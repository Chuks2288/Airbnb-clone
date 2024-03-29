"use client";

import useCountries from "@/hooks/useCountry";
import { SafeUser } from "@/types";
import { IconType } from "react-icons";
import { Avatar } from "..";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), {
    ssr: false
});

interface ListingInfoProps {
    user: SafeUser | null;
    description: string;
    roomCount: number;
    guestCount: number;
    bathroomCount: number;
    locationValue: string;
    category: {
        icon: IconType;
        label: string;
        description: string;
    } | undefined;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
    user,
    category,
    description,
    roomCount,
    guestCount,
    bathroomCount,
    locationValue,
}) => {

    const { getByValue } = useCountries();
    const coordinate = getByValue(locationValue)?.latlng;


    return (
        <div className="col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className="text-xl font-semibold flex flex-row items-center gap-2">
                    <div className="">
                        Hosted by {user?.name}
                    </div>
                    <Avatar src={user?.image} />
                </div>
                <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
                    <div className="">
                        {guestCount} {guestCount > 1 ? "guests" : "guest"}
                    </div>
                    <div className="">
                        {roomCount} {roomCount > 1 ? "rooms" : "room"}
                    </div>
                    <div className="">
                        {bathroomCount} {bathroomCount > 1 ? "bathrooms" : "bathroom"}
                    </div>
                </div>
            </div>
            <hr />

            {category && (
                <ListingCategory
                    icon={category.icon}
                    label={category.label}
                    description={category.description}
                />
            )}

            <hr />

            <div className="text-lg font-light text-neutral-500">
                {description}
            </div>

            <hr />

            <Map center={coordinate} />
        </div>
    )
}

export default ListingInfo