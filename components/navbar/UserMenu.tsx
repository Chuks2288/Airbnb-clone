"use client"
// import { User } from '@prisma/client';
import { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Avatar, MenuItem } from '..';
import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/types';


interface UserMenuProps {
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {

    const registerModal = useRegisterModal();

    const loginModal = useLoginModal();

    const [isOpen, setIsOpen] = useState(false);

    const toggeleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
                    onClick={() => { }}
                >
                    Airbnb your home
                    {/* {currentUser?.name} */}
                </div>
                <div
                    className="p-4 md:py-1 md:px-2 border-[1px] flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-sm transition"
                    onClick={toggeleOpen}
                >
                    <AiOutlineMenu />
                    <div className="hidden sm:block">
                        <Avatar />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white
                 overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">

                        {currentUser ? (
                            <>
                                <MenuItem
                                    handleClick={() => { }}
                                    label="My trips"
                                />
                                <MenuItem
                                    handleClick={() => { }}
                                    label="My favorites"
                                />
                                <MenuItem
                                    handleClick={() => { }}
                                    label="My reservations"
                                />
                                <MenuItem
                                    handleClick={() => { }}
                                    label="My Properties"
                                />
                                <MenuItem
                                    handleClick={() => { }}
                                    label="Airbnb my home"
                                />
                                <hr />
                                <MenuItem
                                    handleClick={() => signOut()}
                                    label="Logout"
                                />
                            </>
                        ) : (

                            <>
                                <MenuItem
                                    handleClick={loginModal.onOpen}
                                    label="login"
                                />
                                <MenuItem
                                    handleClick={registerModal.onOpen}
                                    label="sign up"
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu 