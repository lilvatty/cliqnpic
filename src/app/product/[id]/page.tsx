'use client'

import { useParams } from "next/navigation"

export default function Product() {

  const {id}  = useParams()
  
  return(
    <div className="mt-16 h-screen">
      product {id}
    </div>
  )
}