import React from "react";

import Blog from "@/src/components/blogs/Blog";

import axios from "axios";

export async function generateStaticParams() {
  const res = await axios.get(`https://faysolutions.com:3000/api/blog/get-blogs`);
  const blogIds = res.data.blogs.map(blog => ({ id: blog.id }));
  return blogIds;
 }
 

const ReadBlog = ({ params }) => {
  return <Blog id={params.id} />;
};

export default ReadBlog;
