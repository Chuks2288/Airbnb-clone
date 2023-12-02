"use client";

import React from "react";
import { Container, Heading } from "@/components";
import { SafeListing, SafeUser } from "@/types";
import getFavoriteListings from "../actions/getFavoriteListings";
import ListingCard from "@/components/listings/ListingCard";


interface FavoriteClientProps {
    listings: SafeListing[];
    currentUser: SafeUser | null;
}

const FavoriteClient: React.FC<FavoriteClientProps> = ({
    listings,
    currentUser,
}) => {

    return (
        <Container>
            <Heading
                title="Favorite"
                subtitle="List of places you have favorited"
            />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
            lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8"
            >
                {listings.map((listing) => (
                    <ListingCard
                        currentUser={currentUser}
                        data={listing}
                        key={listing.id}
                    />
                ))}
            </div>
        </Container>
    )
}

export default FavoriteClient