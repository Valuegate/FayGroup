'use client'

import CreateBlog from "@/src/components/blogs/create/CreateBlog";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function CreateBlogs() {
  const router = useRouter();
  useEffect(() => {
    let localUser = window.localStorage.getItem("user");
    if (localUser === undefined || localUser.name === undefined) {
      router.replace("/blogs");
    }
  }, [])


  return (
   <CreateBlog/> 
  )
}
