'use client'

import CreateBlog from "@/src/components/blogs/create/CreateBlog";
import { useEffect } from "react";


export default function CreateBlogs() {
  useEffect(() => {
    let localUser = window.localStorage.getItem("user");
    if (localUser === undefined || localUser.name === undefined) {
      window.location.replace("/blogs");
    }
  }, [])

  return (
   <CreateBlog/> 
  )
}
