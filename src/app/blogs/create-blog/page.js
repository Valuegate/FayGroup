"use client";

import CreateBlog from "@/src/components/blogs/create/CreateBlog";
import { useEffect, useState } from "react";

export const metadata = {
  title: "Create Blog",
};

export default function CreateBlogs() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    let user = window.localStorage.getItem("faygroup-user");
    user = JSON.parse(user);
    if (
      user === undefined ||
      user === null ||
      user?.name === null ||
      user?.name === undefined
    ) {
      setIsLoggedIn(false);
      window.location.replace("/blogs");
    }
  }, []);

  return !isLoggedIn ? <></> : <CreateBlog />;
}
