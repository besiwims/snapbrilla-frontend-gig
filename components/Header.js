import React from 'react'
import Image from 'next/image'
import de from '../public/de.png'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Header = ({ wallet }) => {
    const router = useRouter();

    const isActive = 'text-white text-[20px] font-[700] underline '
    const noActive = ' text-white text-[20px] font-[700]'

    return (
        <div className='
                    h-28
                    bg-[#395241]
                    flex items-center
                    '>

            <div className='
                    absolute
                        left-[100px]
                        flex flex-row
                        items-center
                        
                        
                    '>

                <div className='
                            cursor-pointer
                            '>
                    <Link href="http://app.directed.dev/">
                        <Image src={ de }
                            alt="Logo"
                            width="50"
                            height="52.81"
                            layout="fixed"
                            priority="false" />
                    </Link>
                </div>


                <div className='
                           flex flex-col
                           relative
                           left-[10px]
                                   '>
                    <h1 className='
                        text-white
                        font-extrabold
                        tracking-normal
                        text-[20px]
                        '>DirectEd</h1>
                    <h1 className='
                        text-white
                        text-[14px]
                        
                        '>Realising Potential</h1>
                </div>


                {/* MENUS */ }
                <div className='
                        relative
                        left-[100px]
                        flex flex-row
                        gap-14
                        
                        '>

                    <Link href="/">
                        <a className={ router.pathname == '/' ? isActive : noActive }>SCHOLOSHIP POOLS</a>
                    </Link>

                    <Link href="/scholar">
                        <div >
                            <a className={ router.pathname == '/scholar' ? isActive : noActive }>SCHOLARS’ PROGRESS</a>
                        </div>
                    </Link>


                    <Link href="/transactions">
                        <div>
                            <a className={ router.pathname == '/transactions' ? isActive : noActive }>TRANSACTIONS</a>
                        </div>
                    </Link>

                </div>
            </div >
            {/* end of row */ }


            {/* wallet btn */ }
            <div className='
            
                    sm:ml-auto
                    sm:right-[50px]
                    sm:h-[60px]
                    sm:w-[250px]
                    sm:rounded-lg
                    sm:bg-[#F3EEE2]
                    sm:text-center
                    sm:relative
                    sm:flex items-center
                    sm:justify-center
                    '>
                <div className="
                            ">
                    <a className='
                            text-[#395241]
                            ' href="">
                        { wallet }
                    </a>
                </div>

            </div>
        </div >

    )
}

export default Header

