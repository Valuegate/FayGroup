import React from "react";

import Blog from "@/src/components/blogs/Blog";

import axios from "axios";

export async function generateStaticParams() {
  try {
    let res = await axios({
      method: "GET",
      url: `https://faysolutions.com:3000/api/blog/get-blogs`,
    });

    return res.data.map((blog) => ({
      id: blog.id,
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}

const ReadBlog = ({ params }) => {
  return <Blog id={params.id} />;
};

export default ReadBlog;
