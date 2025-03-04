"use client"

import { PiHamburger } from "react-icons/pi";
import React from 'react';
import styles from './authLinks.module.css';
import { useState } from 'react';
import Link from 'next/link';

//import { GiHamburgerMenu } from "react-icons/pi";



export const AuthLinks = () => {

const status = "notAuthenticated";
const [open, setOpen] = useState(false);
  return <>
    {status === "notAuthenticated" ? (
      <Link href="/login" className={styles.link}>Login</Link>
    ) : (<>
      <Link href="/write" className={styles.link}>Write</Link>
      <span className={styles.link}>Logout</span>
      </>)}

      <div className={styles.burger} onClick={()=>{setOpen(!open)}}>
      <PiHamburger  size={34} className={styles.burgerIcon}/>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notAuthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}

      </>
}
