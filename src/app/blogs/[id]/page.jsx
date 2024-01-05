import React from "react";

import Blog from "@/src/components/blogs/Blog";

import axios from "axios";

export async function generateStaticParams() {
  try {
    const res = await axios.get('https://faysolutions.com:3000/api/blog/get-blogs', { timeout: 60000 });
    const blogIds = res.data.blogs.map(blog => ({ id: blog._id }));
    return blogIds;
  } catch (error) {
    console.error(error);
    return [];
  }
 }
 

const ReadBlog = ({ params }) => {
  return <Blog id={params.id} />;
};

export default ReadBlog;
