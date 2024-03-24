import SearchIcon from '@mui/icons-material/Search';
import DateRangeIcon from '@mui/icons-material/DateRange';
import profile from '../image/profile.jpg';
import av from '../image/avartar.jpg';
import Image from 'next/image';

import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

const getPost = () => {
    const folder = 'post/';
    const files = fs.readdirSync(folder);
    const markDownPosts = files.filter((file) => file.endsWith(".md"));
    const posts = markDownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`post/${fileName}`, 'utf8');
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".md", ""),
            img: matterResult.data.img,
        };
    });
    return posts;
}
export default function Post() {
    const postData = getPost();
    const postPreviews = postData.map((post) => (
       <div key={post.slug}>
        <div className="flex flex-wrap justify-center mt-2  ">
                <div className="card card-side bg-[#E2BFB3] shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                    <figure><Image src={profile} width={258} height={258} alt="Movie" /></figure>
                    <div className="card-body text-white">
                        <div className="rounded-full badge badge-outline">
                            <p>Blogs</p>
                        </div>
                        <span className='text-[#e4e4e4]'><DateRangeIcon /> | 24/03/2567</span>
                        <hr />
                        <h2 className="card-title"></h2>
                        <p className='text-[28px] text-[#b64a27] font-extrabold'>{post.slug}</p>
                        <p className='text-[#f3f3f3]'>{post.subtitle}</p>
                        <hr />
                        <div className="py-3  max-w-[200px]">
                            <div className="flex gap-4">
                                <Image className="h-12 w-12 shrink-0 rounded-lg object-cover" src={av} width={200} alt="" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-gray-600 text-xs">Post by</p>
                                    <a href="#" className="font-semibold text-white ">Kittichai.R</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                        <Link href={`/blogs/${post.slug}`} className="btn btn-ghost"><SearchIcon />อ่านต่อ</Link>
                        </div>
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
