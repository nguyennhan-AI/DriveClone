'use client';
import React from 'react';
import UploadButton from '../Upload/UploadButton';
import Image from 'next/image';
import './Adjust.css'
import { useRouter } from 'next/navigation';

//temporary
import {CircleUserRound} from "lucide-react";
import Memory from './Memory';
const Sidebar = () => {
    const router = useRouter();
    const handleCLick = () => {
        window.location.reload();
    }
    return (
        <div className='sidebar w-full h-full flex-col'>
            {/* Logo & Notification */}
            <div className='w-full h-[120px] flex items-center justify-between p-2 gap-2 mt-3'>
                <div className='h-[80px] items-center flex' ><img src="/home-avatar.png" alt="avatar" className='rounded-full h-[80px] hover:cursor-pointer' onClick={handleCLick} /></div>
                <div className=' font1 h-full pt-3 font-semibold text-4xl '>BiBoxStorage</div>
                <div className='flex-col justify-end flex h-full'>
                    <div className='flex gap-2 '>
                        <div><img src="/home-bell.svg" alt="bell" className='h-[20px] w-[20px]'/></div>
                        <CircleUserRound className='rounded-xl h-[20px] w-[20px] '></CircleUserRound>
                    </div>
                </div>

            </div>

            {/* Navigation */}
            <nav className='w-full h-[300px] items-center flex justify-center'>
                <ul className='w-[300px] h-auto flex-col '>
                    <div className="flex w-full h-[70px] items-center gap-3">
                        <button className="w-[140px] h-full  items-center justify-center flex gap-3 bg-white rounded-2xl hover:shadow-lg hover:bg-gray-100 " onClick={()=>router.push('/homepage')}>
                            <div className='bg-[#7DAFAF] rounded-xl opacity-[70%]  p-2'><img src="/homeicon.svg" alt="homeicon" /></div>
                            <div>Home</div>
                        </button>
                        <button className="w-[140px] h-full  items-center justify-center flex gap-3 bg-white rounded-2xl hover:shadow-lg hover:bg-gray-100">
                            <div className='bg-[#7DAFAF] rounded-xl opacity-[70%]  p-2'><img src="/favoriteicon.svg" alt="homeicon" className='w-[24px] h-[24px]'/></div>
                            <div>Favourite</div>
                        </button>
                    </div>
                    <div className="flex w-full h-[70px] items-center gap-3 mt-4">
                        <button className="w-[140px] h-full  items-center justify-center flex gap-3 bg-white rounded-2xl hover:shadow-lg hover:bg-gray-100">
                            <div className='bg-[#7DAFAF] rounded-xl opacity-[70%]  p-2'><img src="/lockicon.svg" alt="homeicon" className='w-[24px] h-[24px]' /></div>
                            <div>Locker</div>
                        </button>
                        <button className="w-[140px] h-full  items-center justify-center flex gap-3 bg-white rounded-2xl hover:shadow-lg hover:bg-gray-100">
                            <div className='bg-[#7DAFAF] rounded-xl opacity-[70%]  p-2'><img src="/workspaceicon.svg" alt="homeicon" className='w-[24px] h-[24px]'/></div>
                            <div>Workspace</div>
                        </button>
                    </div>
                    <div className="flex w-full h-[70px] items-center gap-3 mt-4">
                        <button className="w-[140px] h-full  items-center justify-center flex gap-3 bg-white rounded-2xl hover:shadow-lg hover:bg-gray-100" onClick={() => router.push("/bin")} >
                            <div className='bg-[#7DAFAF] rounded-xl opacity-[70%] p-2'><img src="/binicon.svg" alt="homeicon" className='w-[24px] h-[24px]'/></div>
                            <div>Bin</div>
                        </button>
                    </div>
                </ul>
            </nav>

            {/* Cloud Pro Section */}
            <div className='w-full h-[150px] flex items-center justify-center mt-3'>
                <div className="relative w-[300px] h-[150px] rounded-3xl bg-white flex flex-col px-5 py-5 gap-0">
                    <div className='flex items-center w-[144px]'>
                        <div className='text-3xl  font-bold'>CloudPro</div>
                        <Image src="/blink.svg" alt="blink icon" width={35} height={35} className='' />
                    </div>
                    <div className='text-gray-400 font-semibold w-[60%]'>The only storage you need</div>
                    <UploadButton/>
                    <img src="/homepic2.svg" alt="overlay"  style={{ width: "80%", height: "80%", position: "absolute", zIndex: 1, top:"70px",left:"150px" }}/>
                </div>
            </div>

            {/*Memory section*/}
            <div className='w-full h-[50px] flex items-center justify-center mt-[60px]'>
                <div className='w-[300px] h-full'>
                    <Memory></Memory>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;

