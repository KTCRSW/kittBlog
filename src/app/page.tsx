import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./blogs/post";
import PostList from "./blogs/postList";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <section className="flex items-center justify-center">
        <div className="grid grid-flow-row auto-rows-max">
          <div className="mt-[15%] text-[38px]">
            <p className="text-[#a35f3a] font-extrabold">Kittichai&apos;s <span className="text-[#E2BFB3]">Blog</span></p>
          </div>
          <p className="flex items-center justify-center">&quot;ความรู้ของผม จะไม่หายไปไหน&quot;</p>
      <hr className="border-[#cfa38a]"/>
        </div>
      </section>
      
        <Cards/>
        <section className="flex items-center justify-center">
        <div className="grid grid-flow-row auto-rows-max">
          <div className="mt-[15%] text-[38px]">
            <p className="text-[#a35f3a] font-extrabold">more&apos;s <span className="text-[#E2BFB3]">Blog</span></p>
          </div>
          <p className="flex items-center justify-center">&quot;บทความอื่นๆ&quot;</p>
      <hr className="border-[#cfa38a]"/>
        </div>
      </section>
        <div className="flex flex-wrap justify-center mt-10">

        <PostList/>
        </div>
        <Footer/>
    </>
  );
}
