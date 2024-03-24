import Image from "next/image";
import Navbar from "../../components/Navbar";
import av from '../../image/avartar.jpg';
import fs from "fs";
import Markdown from 'markdown-to-jsx';
import matter from "gray-matter";
import Footer from "@/app/components/Footer";
import Link from "next/link";


const getPostContent = (slug: string) => {
    const folder = 'posts/'
    const decodeSlug = decodeURIComponent(slug.toString());
    const files = `${folder}${decodeSlug}.md`;
    const decodeFile = decodeURIComponent(files.toString());
    const content = fs.readFileSync(decodeFile, 'utf8');
    const matterResult = matter(content);
    return matterResult;
}

export default function blogs(props: any){


    const slug = props.params.slug;
    console.log(slug);
    const decodeSlug = decodeURIComponent(slug.toString());
    const post = getPostContent(slug);

    return (
        <>
        <Navbar/>
        <section>
            <div className="flex justify-center items-center h-auto">
                <div className="mt-3 max-w-3xl mx-auto pb-8 lg:px-0 space-y-4">
                    <p className="text-[#e08e73] font-extrabold text-[38px]">{post.data.title}</p>
                    <div className="py-3  max-w-[200px]">
                            <div className="flex gap-4">
                                <Image className="h-12 w-12 shrink-0 rounded-full  object-cover" src={av} alt="" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#f8c7b7] text-xs">Post by</p>
                                    <Link href={'https://www.facebook.com/mektcrsw'} className="font-semibold text-[#e08e73] ">Kittichai.R</Link>
                                </div>
                            </div>
                        </div>
                        <hr className="border-[#cfa38a]"/>
                        <div className="text-[#c57459]">
                            <Markdown>{post.content}</Markdown>
                        </div>
                </div>
            </div>
        </section>
        <Footer/>

        </>
    );
}