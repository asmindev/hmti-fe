import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Dekstop from '@/components/Navbar/Dekstop'
import Mobile from '@/components/Navbar/Mobile'
import Footer from './Footer'

function Layout({ children, title = 'Next.js App' }) {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        })
        window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
        return () => {
            window.removeEventListener('resize', () => {
                if (window.innerWidth < 768) {
                    setIsMobile(true)
                } else {
                    setIsMobile(false)
                }
            })
        }
    }, [])
    return (
        <div className="w-full flex flex-col min-h-screen">
            <Head>
                <title>{title}</title>
            </Head>
            {isMobile ? (
                <Mobile />
            ) : (
                <div className="fixed top-0 left-0 w-full z-50">
                    <Dekstop />
                </div>
            )}
            <main className="flex-1 w-full mx-auto">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
