import type { Metadata } from "next";
import dynamic from "next/dynamic";
import BlogReader from "@/src/components/Blog/BlogReader/BlogReading";
import siteMetadata from "@/src/utils/siteMetaData";
import { allBlogs } from "contentlayer/generated";

const ScrollProgressBar = dynamic(
  () => import("@/src/components/Blog/BlogReader/ScrollProgressBar"),
  { ssr: false }
);

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: blog.title,
    description: blog.description || siteMetadata.description,
    openGraph: {
      title: blog.title,
      description: blog.description || siteMetadata.description,
      images: siteMetadata.socialBanner
    },
  };
}

const BlogPage = ({ params }: BlogPageProps) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: blog.title,
    description: blog.description,
    image: blog.image
      ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
      : [siteMetadata.socialBanner],
    datePublished: new Date(blog.publishedAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    author: [
      {
        "@type": "Person",
        name: blog.author || siteMetadata.author,
        url: "https://www.linkedin.com/in/amin-ahsan-b10a7822/",
      },
    ],
  };

  return (
    <>
      <ScrollProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <BlogReader parmy={params} blogy={blog} />
      </article>
    </>
  );
};

export default BlogPage;