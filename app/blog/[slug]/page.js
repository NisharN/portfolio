// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";

async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  return data;
};

async function BlogDetails({params}) {
  const slug = params.slug;
  const blog = await getBlog(slug);
 
  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            {blog.title}
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {blog.cover_image && (
        <div className="w-full mb-6">
          <Image src={blog.cover_image} alt={blog.title} width={1200} height={630} className="w-full h-auto rounded" />
        </div>
      )}

      <div className="prose prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: blog.body_html || "" }} />
      </div>

      <div className="mt-8">
        <Link target="_blank" className="text-pink-500 hover:underline" href={blog.url}>Read on DEV.to</Link>
      </div>
    </div>
  );
};

export default BlogDetails;