import category from "@/lib/enums/category.enum"
import Image from "next/image"
import Link from "next/link"
import { use } from "react"

export default function Blog(){
  
  return <section className="container flex flex-col items-center py-32">
    
    <div className="px-3 mb-10 text-center border-x-2 border-primary" data-aos="fade-down">
      <h1 className="text-5xl font-bold capitalize text-primary">Blog</h1>
      <p>Empowering Afghan Girls Every Step of the Way</p>
    </div>
    <div className="flex">
      
      {list.map(item => (
        <div key={item.id} className="relative rounded-lg shadow-lg">
          <picture className="relative overflow-hidden rounded-lg">
            <div className="absolute w-auto px-2 py-1 m-1 text-xs text-white bg-red-600 rounded-full">{category[item.category]}</div>
            <Image src={item.pictures[0]} alt="pictures" width={400} height={400} className="object-cover w-56 h-56 rounded-lg" />
            <small className="absolute bottom-0 right-0 px-3 py-1 text-white rounded-b-lg bg-primary opacity-80 rounded-s-lg">✍ {item.firstName} {item.lastName}</small>
          </picture>
          <div className="w-56 px-4 py-4 capitalize">
            <div className="text-stone-700 ">{item.title}</div>
            <div className="my-2 text-sm leading-tight text-gray-700 lowercase text-balance">{item.content}</div>
            <Link href={"/blog/"+item.slug} className="px-4 py-2 text-sm border-b-2 rounded-full shadow-md text-primary border-primary">read more</Link>
          </div>
        </div>
      ))}
    </div>
  </section>
}

const list = [
  {
    id: 1,
    title: "A story about my disteny",
    subtitle: "sub test",
    content: "A sunny day and cloudy and fogy weather, I was feeling so sad and disoppointed...",
    firstName: "Zahra",
    lastName: "Yusufy",
    slug: 'a-sunny-day',
    views: 12,
    category: 1,
    type: 1,
    created: "Friday, May 10, 2024",
    pictures: ["/photo.avif"]
  }
]