"use client"

// import { User } from '@prisma/client';
import React from 'react'
import { Container, Logo, Search, UserMenu } from '..';
import { SafeUser } from '@/types';
import Categories from './Categories';

interface NavbarProps {
    currentUser?: SafeUser | null
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
    return (
        <nav className='fixed w-full bg-white shadow-sm'>
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-grow items-center justify-between gap-3 md:gap-0">
                        <Logo />
                        <Search />
                        <UserMenu currentUser={currentUser} />
                    </div>
                </Container>
            </div>

            <Categories />
        </nav>
    )
}

export default Navbar