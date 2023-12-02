import EmptyState from "@/components/EmptyState";
import { ClientOnly } from "@/components";
import PropertiesClient from "./PropertiesClient";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import getListings from "../actions/getListings";

const PropertyPage = async () => {

    const currentUser = await getCurrentUser();
    const listings = await getListings({
        userId: currentUser?.id
    });


    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                    title="Unauthorized"
                    subtitle="Please login"
                />
            </ClientOnly>
        )
    }



    if (listings?.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No properties found"
                    subtitle="looks like you have no properties"
                />
            </ClientOnly>
        )
    }


    return (
        <ClientOnly>
            <PropertiesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default PropertyPage;