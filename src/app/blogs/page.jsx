"use client";

import useLocalStorage from "use-local-storage";
import { useRouter } from "next/navigation";
import BlogsPage from "@/src/components/blogs/BlogsPage";
import { useEffect } from "react";

export default function Blogs() {
  let user = useLocalStorage("user", {});
  const router = useRouter();

  // useEffect(() => {
  //   if (user[0].name) {
  //     router.replace("/blogs/create-blog");
  //   }

  // }, [router])
  
  

  return <BlogsPage />;
}
