import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";



interface IParams {
    reservationId?: string,
}
export async function DELETE(
    request: Request,
    { params }: { params: IParams }
) {

    const currentUser = await getCurrentUser();


    if (!currentUser) {
        return NextResponse.error()
    }


    const { reservationId } = params;

    if (!reservationId || typeof reservationId !== "string") {
        throw new Error("Invalid ID");
    }

    const reservation = await prisma.reservation.delete({
        where: {
            id: reservationId,
            userId: currentUser.id,
        },
    });

    return NextResponse.json(reservation);
}