import { NextRequest, NextResponse } from "next/server";

import { connectMongoDB } from "@/utils/dbConnect";
import ContactInfo from "./contact.model";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    await connectMongoDB();
    await ContactInfo.create(data);

    return NextResponse.json(
      { message: "Message created successfully" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "An error occurred while sending the message.", error: err },
      { status: 500 }
    );
  }
}
