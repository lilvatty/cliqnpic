"use client"

import Image from "next/image";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import axios from "axios";

interface product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

export default function adminProduct() {

  const router = useRouter()
  const {id} = useParams();
  const [data, setData] = useState<product[]>([])

  const deleteBtn = async () => {
    try {
      await axios.delete(`/api/product/${id}`);
      alert('product removed successfully');
      router.push('/admin-dashboard')
    } catch (error) {
      alert('error deleting product!')
    }
  }
  
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(`/api/product/${id}`);
        const {data} = await res.json()
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  }, [])
  
  return(
    <div className="flex flex-col items-center justify-evenly mt-16 h-screen">
      <div className="flex flex-col items-center">
        {data.map(({id, image, description, name, price, tags}) => (
            <div
            className=" shadow-md w-[25rem] flex flex-col"
            key={id}>
              <Image 
              className="object-cover w-full max-h-[20rem]"
              src={`/photobox/${image}`}
              width={200}
              height={200}
              alt="image"/>

              <div className="flex flex-col p-5">
                <h2 className="text-2xl font-inter font-semibold mb-2">{name}</h2>
                <p className="mb-2">{description}</p>
                <p className="text-primary-orange text-sm">package include: </p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {tags.map((tag, index) => (
                    <span
                    className="border p-1 border-primary-orange"
                    key={index}>{tag}</span>
                  ))}
                </div>
                <p className="text-primary-orange text-sm">start price:</p>
                <p>IDR {price.toLocaleString('id-ID')}</p>
                <div className="flex items-center justify-center gap-5 mt-2">
                  <button className="bg-red-500 text-primary-white font-bold px-2 py-1 cursor-pointer active:bg-red-500/80"
                  onClick={deleteBtn}>Delete product</button>
                  <button className="bg-blue-600 text-primary-white font-bold px-2 py-1 cursor-pointer active:bg-blue-600/80">Edit product</button>
                </div>
              </div>
            </div>
        ))}
        
      </div>
    </div>
  )
}