"use client";

import { useRouter } from "next/navigation";
import BlogsPage from "@/src/components/blogs/BlogsPage";
import { useEffect } from "react";

export default function Blogs() {
  const router = useRouter();

  useEffect(() => {
    let localUser = window.localStorage.getItem("user");
    if (localUser !== undefined && localUser.name !== undefined) {
      router.replace("/blogs/create-blog");
    }

  }, [])

  return <BlogsPage />;
}
