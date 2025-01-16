import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { blogs } from "@/data/blogs";

// Reusable Section Header Component
const SectionHeader = ({
  title,
  content,
}: {
  title: string;
  content?: string;
}) => (
  <>
    <div className="bg-[#2b2b2b] p-3 sm:p-4 rounded-lg mb-4">
      <h2 className="text-2xl sm:text-3xl merichfont textcolor">{title}</h2>
    </div>
    {content && (
      <>
        <p
          className="roboto textcolor mb-4 text-sm sm:text-base textcolor"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <hr className="border-white/10 mb-6" />
      </>
    )}
  </>
);

// Reusable Bullet Points Component
const BulletPoints = ({
  bulletPoints,
}: {
  bulletPoints?: Array<{ point: string; description?: string }>;
}) => {
  if (!bulletPoints) return null;
  return (
    <ul className="list-disc pl-6 space-y-4">
      {bulletPoints.map((bullet, idx) => (
        <li key={idx} className="textcolor">
          <span className="font-bold">{bullet.point}</span>
          {bullet.description && <>: {bullet.description}</>}
        </li>
      ))}
    </ul>
  );
};

// Reusable Table Component
const ComparisonTable = ({
  title,
  content,
  headers,
  rows,
}: {
  title?: string;
  content?: string;
  headers: string[];
  rows: Array<{ [key: string]: string }>;
}) => (
  <div className="mb-8">
    {title && <SectionHeader title={title} content={content} />}
    <div className="relative">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-white/20 border border-white/20">
              <thead className="bg-[#2b2b2b] textcolor">
                <tr>
                  {headers.map((header, index) => (
                    <th
                      key={index}
                      className="px-3 py-2 sm:px-4 sm:py-3 text-left text-sm sm:text-base font-medium border-r border-white/20 last:border-r-0 textcolor"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/20">
                {rows.map((row, index) => (
                  <tr key={index}>
                    {headers.map((header, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base whitespace-nowrap border-r border-white/20 last:border-r-0 textcolor"
                      >
                        {row[header]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Reusable Resources Component
const Resources = ({ title, content }: { title: string; content?: string }) => (
  <div id="resources" className="mb-12">
    <SectionHeader title={title} content={content} />
  </div>
);

// Reusable FAQs Component
const FAQs = ({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) => (
  <div id="faqs" className="mb-12">
    <div className="bg-[#2b2b2b] p-3 sm:p-4 rounded-lg mb-6">
      <h2 className="text-2xl sm:text-3xl merichfont textcolor">
        Frequently Asked Questions
      </h2>
    </div>
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-[#232323] p-4 sm:p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300"
        >
          <h3 className="text-lg sm:text-xl merichfont textcolor mb-3">
            {index + 1}. {faq.question}
          </h3>
          <p className="roboto textcolor text-sm sm:text-base">{faq.answer}</p>
          <hr className="border-white/10 mt-4" />
        </div>
      ))}
    </div>
  </div>
);

// Main Blog Post Component
const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = blogs.find((blog) => blog.id === Number(id));

  useEffect(() => {
    // Handle browser back button
    const handlePopState = (event: PopStateEvent) => {
      const previousSection = sessionStorage.getItem("previousSection");
      const scrollPosition = sessionStorage.getItem("scrollPosition");

      if (previousSection === "blog" && scrollPosition) {
        router.push("/#blog").then(() => {
          setTimeout(() => {
            window.scrollTo({
              top: parseInt(scrollPosition),
              behavior: "instant",
            });
          }, 100);
        });

        // Clear the stored values
        sessionStorage.removeItem("previousSection");
        sessionStorage.removeItem("scrollPosition");
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [router]);

  const handleBack = () => {
    const previousSection = sessionStorage.getItem("previousSection");
    const scrollPosition = sessionStorage.getItem("scrollPosition");

    if (previousSection === "blog") {
      router.back(); // Use router.back() instead of push to trigger browser's back behavior
    } else {
      router.push("/#blog");
    }
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#1b1b1b] text-white flex items-center justify-center">
        Blog post not found
      </div>
    );
  }

  return (
    <section className="min-h-screen w-full bg-[#1b1b1b] text-white p-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Blog Title and Date */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl merichfont textcolor  mb-2">
              {blog.title}
            </h1>
            <p className="text-sm roboto text-white/70">
              {new Date(blog.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Featured Image */}
          {blog.image && (
            <div className="w-full h-[400px] mb-8">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}

          {/* Main Content */}
          {blog.content.mainDescription && (
            <p className="text-lg roboto textcolor mb-6">
              {blog.content.mainDescription}
            </p>
          )}

          {blog.content.boldStatement && (
            <p className="text-xl roboto font-bold textcolor mb-12">
              {blog.content.boldStatement}
            </p>
          )}

          {/* Introduction */}
          {blog.content.sections.introduction && (
            <div id="introduction" className="mb-12">
              <SectionHeader
                title={blog.content.sections.introduction.title}
                content={blog.content.sections.introduction.content}
              />
            </div>
          )}

          {/* Main Content Sections */}
          <div id="main-content" className="mb-12">
            {blog.content.sections.mainContent.section1 && (
              <div className="mb-8">
                <SectionHeader
                  title={blog.content.sections.mainContent.section1.title}
                  content={blog.content.sections.mainContent.section1.content}
                />
                {blog.content.sections.mainContent.section1.subsections?.map(
                  (subsection, index) => (
                    <div key={index} className="mb-6">
                      <div className="bg-[#2b2b2b] p-3 sm:p-4 rounded-lg mb-4">
                        <h3 className="text-xl sm:text-2xl merichfont textcolor">
                          {subsection.title}
                        </h3>
                      </div>
                      {subsection.content && (
                        <>
                          <p className="roboto textcolor mb-4 text-sm sm:text-base">
                            {subsection.content}
                          </p>
                          <hr className="border-white/10 mb-6" />
                        </>
                      )}
                      <BulletPoints bulletPoints={subsection.bulletPoints} />
                    </div>
                  )
                )}
              </div>
            )}

            {/* Section 2 & 3 */}
            {["section2", "section3"].map((section) => {
              const sectionData =
                blog.content.sections.mainContent[
                  section as "section2" | "section3"
                ];
              return (
                sectionData && (
                  <div key={section} className="mb-8">
                    <SectionHeader
                      title={sectionData.title}
                      content={sectionData.content}
                    />
                    <BulletPoints bulletPoints={sectionData.bulletPoints} />
                  </div>
                )
              );
            })}
          </div>

          {/* Comparison Tables */}
          {(blog.content.sections.comparisonTables.twoColumn ||
            blog.content.sections.comparisonTables.threeColumn) && (
            <div id="comparison" className="mb-12">
              {blog.content.sections.comparisonTables.twoColumn && (
                <ComparisonTable
                  {...blog.content.sections.comparisonTables.twoColumn}
                />
              )}

              {/* Add betweenTables section here */}
              {blog.content.sections.comparisonTables.betweenTables && (
                <div className="mb-8">
                  <SectionHeader
                    title={
                      blog.content.sections.comparisonTables.betweenTables.title
                    }
                    content={
                      blog.content.sections.comparisonTables.betweenTables
                        .content
                    }
                  />
                  <BulletPoints
                    bulletPoints={
                      blog.content.sections.comparisonTables.betweenTables
                        .bulletPoints
                    }
                  />
                </div>
              )}

              {blog.content.sections.comparisonTables.threeColumn && (
                <ComparisonTable
                  {...blog.content.sections.comparisonTables.threeColumn}
                />
              )}
            </div>
          )}

          {/* Additional Info */}
          {blog.content.sections.additionalInfo && (
            <div id="additional-info" className="mb-12">
              <SectionHeader
                title={blog.content.sections.additionalInfo.title}
                content={blog.content.sections.additionalInfo.content}
              />
              {blog.content.sections.additionalInfo.subsections.map(
                (subsection, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-2xl merichfont textcolor mb-4">
                      {subsection.title}
                    </h3>
                    {subsection.bulletPoints && (
                      <BulletPoints bulletPoints={subsection.bulletPoints} />
                    )}
                  </div>
                )
              )}
            </div>
          )}

          {/* Resources */}
          {blog.content.sections.resources && (
            <Resources {...blog.content.sections.resources} />
          )}

          {/* FAQs */}
          {blog.content.sections.faqs &&
            blog.content.sections.faqs.length > 0 && (
              <FAQs faqs={blog.content.sections.faqs} />
            )}

          {/* Conclusion */}
          {blog.content.sections.conclusion && (
            <div id="conclusion" className="mb-12">
              <SectionHeader
                title={blog.content.sections.conclusion.title}
                content={blog.content.sections.conclusion.content}
              />
              {blog.content.sections.conclusion.finalThoughts && (
                <p className="roboto textcolor italic">
                  {blog.content.sections.conclusion.finalThoughts}
                </p>
              )}
            </div>
          )}

          {/* Back Button - Now positioned after conclusion */}
          <div className="flex justify-center mt-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBack}
              className="px-6 py-3 bg-[#2b2b2b] rounded-lg text-white/80 hover:text-[#26d3b4] transition-colors duration-300"
            >
              Back to Blogs
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPost;
