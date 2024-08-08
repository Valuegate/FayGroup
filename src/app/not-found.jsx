import React from "react";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[url('../../public/assets/Faygroup.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="w-full h-full flex flex-col items-center justify-center  bg-black bg-opacity-75">
        <p className="lg:text-3xl text-xl font-bold text-white">
          Page Not Found
        </p>
        <Link
          href={"/"}
          className="text-maroon font-bold lg:text-xl text-lg mt-5"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
