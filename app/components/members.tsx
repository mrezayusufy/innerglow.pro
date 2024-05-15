import Image from "next/image"

export default function Members(){
  return <section className="bg-primary py-32">
    <div className="container text-center flex items-center justify-center flex-col relative">
      <div className="px-3 mb-10 border-x-2 border-white text-white" data-aos="fade-down">
        <h1 className="font-bold text-5xl capitalize">Our Members</h1>
        <p>Empowering Afghan Girls Every Step of the Way</p>
      </div>
      <div className="flex gap-3">
        {list.map(item => (
          <div key={item.id}>
            <div className="relative flex flex-col items-center" data-aos="zoom-in">
              <Image src={item.avatar} width={256} height={256} alt={item.firstname} className="size-56 object-contain avatar-mask rounded-full "/>
              <div className="flex flex-col items-center text-white">
                <p className="text-white/60">{item.title} {item.firstname} {item.lastname}</p>
                <p className="font-bold">{item.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
}

const list = [
  {
    id:1,
    avatar: "/avatar/atifa.webp",
    title: "Mrs",
    firstname: "Atifa",
    lastname: "Baran",
    position: "CEO & Founder",
  },
  {
    id: 2,
    avatar: "/avatar/abozar.webp",
    title: "Mr",
    firstname: "S.Abozar",
    lastname: "Hussaini",
    position: "CEO & Co-Founder",
  },
  {
    id:3,
    avatar: "/avatar/reza.webp",
    title: "Mr",
    firstname: "Reza",
    lastname: "Yusufy",
    position: "CTO",
  },
  {
    id: 4,
    avatar: "/avatar/marzia.webp",
    title: "Mrs",
    firstname: "Marzia",
    lastname: "Mousavi",
    position: "COF",
  },
  {
    id: 5,
    avatar: "/avatar/khatib.png",
    title: "Mr",
    firstname: "Khatib",
    lastname: "Amiri",
    position: "COF",
  },
]