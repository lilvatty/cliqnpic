"use client"
import { useEffect, useState } from "react";
import Product from "../components/product";

export default function ProductPage(){

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/product")
        const {data} = await res.json();
        setData(data)
      } catch (error) {
        console.log(error);
        alert('something when wrong!')
      }
    }
    getData()
  }, [])
  
  return(
    <div className="mt-16 p-10">
      <Product data={data}/>
    </div>
  )
}