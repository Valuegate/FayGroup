import React from "react";

import Blog from "@/src/components/blogs/Blog";

const ReadBlog = (blogData) => {
  const id = blogData.params.id;
  return <Blog id={id} />;
};

export default ReadBlog;
