import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET (request: Request, {params}: {params: {id: string}}){
  try {
    const productId = parseInt(params.id);
    if(!productId || isNaN(productId)){
      return NextResponse.json({message: "Invalid Product id"}, {status: 404})
    } else{
      const product = await prisma.products.findMany({where: {id: productId}})
      if(product.length <= 0){
        return NextResponse.json({message: "product does not exist or has been deleted"}, {status: 404})
      } else {
        return NextResponse.json({message: "success fetching data", data: product}, {status: 200})
      }
    }
  } catch (error) {
    return NextResponse.json({message: error instanceof Error? error.message : "Error get the product"}, {status: 500})
  }
}

export async function DELETE(request: Request, {params}: {params: {id: string}}){
  try {
    const productId = parseInt(params.id)
    if(!params.id){
      return NextResponse.json({message: "invalid Id"}, {status: 400})
    } else {
      await prisma.products.delete({
        where: {id: productId}
      })
    }
    return NextResponse.json({message: "Product deleted"}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: error instanceof Error? error.message : "Error deleting product"}, {status: 500})
  }
}