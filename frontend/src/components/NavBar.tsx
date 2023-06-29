"use client";

import { Button } from "flowbite-react";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="section">
        <div className="bg-gray-800 p-5 flex justify-between">
          <p className="font-semibold text-xl text-slate-200">MY BLOG</p>
          <Button color="light" pill>
            <p>Add New Blog</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
