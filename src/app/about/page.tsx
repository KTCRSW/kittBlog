import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function About() {
    return (

        <>
            <Navbar />
            <section className="flex items-center justify-center">
                <div className="grid grid-flow-row auto-rows-max">
                    <div className="mt-[15%] text-[38px]">
                        <p className="text-[#a35f3a] font-extrabold">about&apos;s <span className="text-[#E2BFB3]">Me</span></p>
                    </div>
                    <p className="flex items-center justify-center">&quot;ข้อมูลส่วนตัว&quot;</p>
                    <hr className="border-[#cfa38a]" />
                    
                </div>
            </section>
            <Footer />
        </>

    );
}