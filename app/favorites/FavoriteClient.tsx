"use client";

import { Container, Heading } from "@/components";
import { SafeListing, SafeUser } from "@/types";


interface FavoriteClientProps {
    listings: SafeListing[];
    currentUser: SafeUser | null;
}

const FavoriteClient: React.Fc<FavoriteClientProps> = ({
    listings,
    currentUser,
}) => {
    return (
        <Container>
            <Heading
                title="Favorite"
                subtitle="List of places you have favorited"
            />
        </Container>
    )
}

export default FavoriteClient