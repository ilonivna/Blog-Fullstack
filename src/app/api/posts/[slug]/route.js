import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//GET SINGLE BLOG POST
export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { user: { select: { name: true, email: true } } }
    });

    const user = await prisma.user.findUnique({
      where: { email: post.userEmail },
      select: { name: true },
    });
    
    console.log("User data:", user);
    
    console.log("Fetched post:", post);
    
    return new NextResponse(JSON.stringify({post, user}, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!", error: err.message }),
      { status: 500 }
    );
  }
};
