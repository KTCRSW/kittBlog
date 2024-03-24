import DateRangeIcon from '@mui/icons-material/DateRange';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SearchIcon from '@mui/icons-material/Search';

import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { PostMeta } from '../components/PostMeta';



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
        <div key={post.title} > 
            <div className="flex flex-wrap justify-center mt-10 ">
                <div className="p-4 max-w-lg transition  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
                    <div className="flex rounded-lg h-full bg-[#E2BFB3] p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <FormatQuoteIcon className='text-white' />
                            <h2 className="text-white  text-lg font-medium">{post.slug}</h2>
                        </div>
                              
                            <h2 className="text-white  text-sm  font-medium"><DateRangeIcon className='text-white' />{post.date}</h2>
                          
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base text-white ">
                                บทความนี้จะเล่าเกี่ยวกับ &quot;{post.slug}&quot; ว่ามีที่มาและเนื้อหาเป็นอย่างไร
                            </p>
                        </div>
                            <Link href={`/blogs/${post.slug}`} className="btn btn-ghost text-white"><SearchIcon />อ่านต่อ</Link>
                    </div>
                </div>
            </div>
        </div>
    ));
    return (

        <>

        {postPreviews}

        </>

    );
}