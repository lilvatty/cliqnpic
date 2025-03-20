import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET(){
  try {
    const products = await prisma.products.findMany();
    return NextResponse.json({message: "successfully fetching product", data: products}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: error}, {status: 500})
  }
}

export async function POST(request: Request){
  try {
    const {name, description, image, price, tags} = await request.json();
    const newUser = await prisma.products.create({
      data: {name, description, image, price, tags}
    })
    return NextResponse.json({message: "successfullt create product", data: newUser}, {status: 201})
  } catch (error) {
    return NextResponse.json({message: error instanceof Error ? error.message : "unknown error"}, {status: 500})
  }
}