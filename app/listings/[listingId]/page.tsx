import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";

import { ClientOnly } from "@/components";
import EmptyState from "@/components/EmptyState";
import ListingClient from "./ListingClient";

interface IParams {
    listingId?: string,
}

const page = async ({ params }: { params: IParams }) => {

    const listing = await getListingById(params);
    const currentUser = getCurrentUser();

    if (!listing) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <ListingClient
                listing={listing}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default page