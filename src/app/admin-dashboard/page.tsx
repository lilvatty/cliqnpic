"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import axios from "axios";
import Product from "../components/product";


interface product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string[];
  tags: string[];
}

export default function Admin () {

  const [data, setData] = useState<product[]>([]);
  const [equipmentChange, setEquipmentChange] = useState<string>("");
  const [equipment, setEquipment] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [image, setImage] = useState<string[]>([]);
  const [imageChange, setImageChange] = useState<string>("")

  const router = useRouter()

  const handleClick = (id: number) => {
    router.push(`/admin-dashboard/product/${id}`)
  }

  const createProduct = async () => {
    try {
      await axios.post('/api/product', { 
        name: name,
        description: description,
        image: image,
        price: price,
        tags: equipment
      })
      alert('succesfully create product')
    } catch (error) {
      console.log(error);
      alert('something went wrong try again!')
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await createProduct();
    setEquipmentChange('');
    setName('');
    setPrice(0);
    setDescription('');
    setImageChange('')
  }
 
  useEffect(() => {
    setEquipment(equipmentChange.split(',').map((item) => item.trim()))
  }, [equipmentChange])

  useEffect(() => {
    setImage(imageChange.split(',').map(item => item.trim()))
  }, [imageChange])

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/product")
        const {data} = await res.json()
        setData(data)
      } catch (error) {
        console.log(error instanceof Error ? error.message : "Error while fetching the data")
        alert("Error while fetching the data")
      }
    }
    getData()
  }, [])
  
  return(
    <div className="h-screen mt-16 flex">

      <div className="grow flex flex-col items-center p-10">
        <p className="font-inter text-3xl font-bold">Add product</p>
        <form 
        onSubmit={handleSubmit}
        className="w-full flex flex-col rounded-lg shadow-lg p-10 gap-5">
          
          <div className="flex items-center">
            <label className="w-[10rem]">Name</label>
            <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border w-full h-10 items-center px-2" 
            type="text" />
          </div>

          <div className="flex items-center">
            <label className="w-[10rem]">Description</label>
            <input
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border w-full h-10 items-center px-2" 
            type="text" />
          </div>

          <div className="flex items-center">
            <label className="w-[10rem]">Price</label>
            <input
            required
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            className="border w-full h-10 items-center px-2" 
            type="number" />
          </div>

          <div className="flex items-center">
            <label className="w-[10rem]">Equipment</label>
            <input
            required
            value={equipmentChange}
            onChange={(e) => setEquipmentChange(e.target.value)}
            className=" border w-full h-10 items-center px-2" 
            type="text" />
          </div>

          <div className="flex items-center">
            <label className="w-[10rem]">Image</label>
            <input
            required
            value={imageChange}
            onChange={(e) => setImageChange(e.target.value)}
            className=" border w-full h-10 items-center px-2" 
            type="text" />
          </div>

          <button className="bg-blue-600 font-bold px-2 py-1 text-white">submit</button>
        </form>
      </div>
      
      <div 
      className="flex flex-col w-[40rem] h-full overflow-scroll p-10 shadow-lg">
        {data.length <= 0 && <div>No Product</div> }
        <Product onClick={handleClick} data={data}/>
      </div>

    </div>
  )
}