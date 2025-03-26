import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        name: "Charlene Reed",
        email: "charlenereed@gmail.com",
        username: "CharleneReed",
        password: "12345678",
        dob: "1990-01-25",
        presentAddress: "San Jose, California, USA",
        permanentAddress: "San Jose, California, USA",
        city: "San Jose",
        country: "USA",
        postalCode: "45962",
        profilePic: "/icons/profile-icon.png",
    });
}
