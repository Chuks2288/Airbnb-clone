"use client";

import useCountries from "@/hooks/useCountry";
import { SafeUser } from "@/types";


interface ListingHeadProps {
    title: string;
    imageSrc: string;
    locationValue: string;
    id: string;
    currentUser?: SafeUser | null;
}


const ListingHead: React.FC<ListingHeadProps> = ({
    title,
    imageSrc,
    locationValue,
    id,
    currentUser
}) => {
    const { getByValue } = useCountries()
    return (
        <div>ListingHead</div>
    )
}

export default ListingHead