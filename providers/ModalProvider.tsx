"use client";

import LoginModal from "@/components/modal/LoginModal";
import RegisterModal from "@/components/modal/RegisterModal";
import RentModal from "@/components/modal/RentModal";
import SearchModal from "@/components/modal/SearchModal";

const ModalProvider = () => {
    return (
        <div className="z-50">
            <LoginModal />
            <RegisterModal />
            <RentModal />
            <SearchModal />
        </div>
    )
}

export default ModalProvider