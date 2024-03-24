import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';


export default function Navbar() {

  return (
    <>
        <div className="navbar bg-[#E2BFB3] text-white px-5">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow text-gray-900  rounded-box w-52">
                <li><a>Item 1</a></li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <Link href={'/'} className="btn btn-ghost text-white text-[24px]">kitt&apos;s Blog</Link>
          </div>
          <div className="navbar-end">
          <ul className="menu menu-horizontal text-[18px] font-thin p-2">
              <li><a role='btn' className='btn btn-ghost p-1 text-[18px]'>Home</a></li>
              <li><Link href={'/posts'} role='btn' className='btn btn-ghost p-1 text-[18px]'>Blogs</Link></li>
              <li><a role='btn' className='btn btn-ghost p-1 text-[18px]'>About</a></li>
              <li><Link href={'https://github.com/ktcrsw'} role='btn' className='btn btn-ghost p-1 text-[18px]'><GitHubIcon/></Link></li>
            </ul>
          </div>
        </div>

    </>
  );

}