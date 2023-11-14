import axios from "axios";
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from "react";
import { toast } from 'react-hot-toast';

import { SafeUser } from "@/types";

import useLoginModal from "./useLoginModal";

interface IUserFavorite {
    listingId: string,
    currentUser?: SafeUser | null;
}

const useFavorite = ({
    listingId,
    currentUser

}) => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const hasFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || [];

        return list.includes(listingId)
    }, [currentUser, listingId])
}

export default useFavorite