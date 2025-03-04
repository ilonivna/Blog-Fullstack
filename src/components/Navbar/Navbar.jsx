import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import { TbCat } from "react-icons/tb";
import Link from 'next/link';
import { AuthLinks } from '../AuthLinks/AuthLinks';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';


export const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.socials}>
            <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
            <Image src="/instagram.png" alt="instagram" width={24} height={24}/>
            <Image src="/tiktok.png" alt="tiktok" width={24} height={24}/>
            <Image src="/youtube.png" alt="youtube" width={24} height={24}/>
        </div>
        <div className={styles.logo}>
<TbCat color="gray" size={64}/>
        </div>
        <div className={styles.links}>
            <ThemeToggle/>
            <Link href="/">Homepage</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>
            <AuthLinks/>
        </div>
        
    </div>

  )
}
