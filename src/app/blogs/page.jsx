"use client";

import BlogsPage from "@/src/components/blogs/BlogsPage";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let user = window.localStorage.getItem("faygroup-user");
    user = JSON.parse(user);
    if (!(user === undefined || user === null || user?.name === null || user?.name === undefined)) {
      window.location.replace("/blogs/create-blog");
      setIsLoggedIn(true);
    }
  }, [])

  return isLoggedIn ? <></> : <BlogsPage />;
}
