import DateRangeIcon from '@mui/icons-material/DateRange';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SearchIcon from '@mui/icons-material/Search';
import Navbar from "../components/Navbar";

import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { PostMeta } from '../components/PostMeta';
import Footer from '../components/Footer';



const getPost = (): PostMeta[] => {
    const folder = 'posts/';
    const files = fs.readdirSync(folder);
    const markDownPosts = files.filter((file) => file.endsWith(".md"));

    const posts = markDownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8');
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".md", ""),
            img: matterResult.data.img
        };
    });
    return posts;
}
export default function PostList() {
    const postData = getPost();
    const postPreviews = postData.map((post) => (
        <div key={post.title}>


            <Link href={`/blogs/${post.slug}`}
                className=" transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-120 relative flex h-full flex-col rounded-md  bg-[#E2BFB3] p-2.5  sm:rounded-lg sm:p-5 shadow-xl">

                <span className="text-md mb-0 font-semibold text-white sm:mb-1.5 sm:text-xl">
                    <FormatQuoteIcon />{post.title}
                    <span className="text-sm leading-normal text-[#b47965] sm:block">
                        {post.subtitle}
                    </span>
                </span>

            </Link>


        </div>

    ));
    return (

        <>
            <Navbar />
            <section className="flex items-center justify-center">
                <div className="grid grid-flow-row auto-rows-max">
                    <div className="mt-[15%] text-[38px]">
                        <p className="text-[#a35f3a] font-extrabold">my&apos;s <span className="text-[#E2BFB3]">Blog</span></p>
                    </div>
                    <p className="flex items-center justify-center">&quot;ความรู้ของผม จะไม่หายไปไหน&quot;</p>
                    <hr className="border-[#cfa38a]" />
                </div>
            </section>
            <div className="h-screen p-4 sm:p-8 md:p-16 ">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {postPreviews}
                    </div>
                </div>

            </div>
            <Footer/>

        </>

    );
}