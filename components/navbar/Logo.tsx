"use client"
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/navigation"


const Logo = () => {

    const router = useRouter();

    return (
        <Link href="/" className="cursor-pointer">
            <Image
                src="/images/logo.png"
                alt="logo"
                width="100"
                height="100"
                priority
            />
        </Link>
    )
}

export default Logo