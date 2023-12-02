import EmptyState from "@/components/EmptyState";
import { ClientOnly } from "@/components";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoriteClient from "./FavoriteClient";



const ListingPage = async () => {
    const currentUser = await getCurrentUser();
    const listings = await getFavoriteListings();


    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                    title="Unauthorized User"
                    subtitle="Please Login"
                />
            </ClientOnly>
        )
    }

    if (listings?.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No favorite found"
                    subtitle="Looks like you have no favorite"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <FavoriteClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )


}

export default ListingPage;