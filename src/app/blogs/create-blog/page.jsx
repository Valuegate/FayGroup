'use client'

import useLocalStorage from "use-local-storage";
import CreateBlog from "@/src/components/blogs/create/CreateBlog";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function CreateBlogs() {
  let user = useLocalStorage("user", {});
  const router = useRouter();


  useEffect(() => {
    if (!user[0].name) {
      router.replace("/blogs");
    }
  }, [router])

  return (
   <CreateBlog/> 
  )
}
