import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogReaderImageProps {
  parmy: any;
}

const BlogReaderImage: React.FC<BlogReaderImageProps> = ({ parmy }) => {
  const blog = allBlogs.find(
    (blog: any) => blog._raw.flattenedPath === parmy.slug
  );

  if (!blog) {
    // Handle case where the blog is not found
    return (
      <div>
        {" "}
        <div className="relative flex flex-col items-center justify-center">
          <h1
            className={`inline-block text-dark dark:text-light
      text-6xl font-bold w-full capitalize xl:text-8xl text-center`}
          >
            404
          </h1>
          <h2
            className={`inline-block text-dark dark:text-light
      text-5xl font-bold w-full capitalize xl:text-6xl text-center mt-4 tracking-wide leading-snug`}
          >
            Page Not Found!
          </h2>
          <Link
            aria-label="Starbucks Home"
            href="/"
            className="self-center mt-8 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2
        font-semibold text-light hover:border-dark hover:bg-light hover:text-dark 
        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        "
          >
            Go To Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {blog.image && (
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          draggable={false}
          width={blog.image.width}
          loading="lazy"
          decoding="async"
          height={blog.image.height}
          className="rounded-full h-[240px] w-[250px] object-cover myshadow-black"
          sizes="100vw"
        />
      )}
    </div>
  );
};

export default BlogReaderImage;
