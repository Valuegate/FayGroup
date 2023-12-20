"use client";

import BlogsPage from "@/src/components/blogs/BlogsPage";
import { useEffect } from "react";

export default function Blogs() {
  useEffect(() => {
    let localUser = window.localStorage.getItem("user");
    if (localUser !== undefined && localUser.name !== undefined) {
      window.location.replace("/blogs/create-blog");
    }
  }, [])

  return <BlogsPage />;
}
