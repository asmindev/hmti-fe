import React, { useEffect, useState } from 'react'
import Dekstop from '@/components/Navbar/Dekstop'
import Mobile from '@/components/Navbar/Mobile'
import Jumbotron from './Jumbotron'
import About from './About'

export default function Index() {
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
        <>
            {isMobile ? (
                <Mobile />
            ) : (
                <div className="fixed top-0 left-0 w-full z-50">
                    <Dekstop />
                </div>
            )}
            <Jumbotron />
            <About />
        </>
    )
}
