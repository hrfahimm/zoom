import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <nav className=' flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 '>
            <Link href="/" className='flex items-center gap-2 '>
                <Image alt='woom logo' src="/woom-logo.png" width={35} height={35} className='max-sm:size-10' />
                <p className="text-[26px]  font-bold text-white max-sm:hidden"> WOOM </p>
            </Link>

            <div className="flex-between gap-5">
                {/* cler user manage mant */}
                {/* <SignedIn> */}
                <UserButton />
                {/* </SignedIn> */}
                {/* <SignedOut>
                    <UserButton />
                </SignedOut> */}

                <MobileNav />
            </div>

        </nav>
    )
}

export default Navbar