import Image from "next/image";
import Consultant from "./icons/consultant";
import Education from "./icons/education";
import Motivation from "./icons/motivation";
import Support from "./icons/support";

export default function Services() {
  return (
    <section className="py-32">
      <div className="container text-center flex items-center justify-center flex-col relative">

        <div className="px-3 mb-10 border-x-2 border-primary" data-aos="fade-down">
          <h1 className="font-bold text-5xl capitalize text-primary">Services</h1>
          <p>Empowering Afghan Girls Every Step of the Way</p>
        </div>
        
        <div className="flex gap-3 flex-wrap justify-center z-10 relative">
          {list.map((item) => (
            <div key={item.id} data-aos="fade-up" className="w-72 flex items-center flex-col gap-3 hover:bg-primary/10 hover:outline-4 outline outline-0 outline-primary/30 bg-teal-50 py-5 px-3 rounded-xl transition-all duration-1500">
              {item.icon}
              <div className="flex flex-col gap-2 items-center text-center text-balance">
              <h1 className="text-2xl font-bold text-primary">{item.title}</h1>
              <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const list = [
  {id: 1, title: "Consultant", icon: <Consultant className="size-20"/>, desc: "Our experienced consultants provide personalized guidance tailored to your needs, helping you navigate challenges and discover your path to success", Icon: ""},
  {id: 2, title: "Motivation", icon: <Motivation className="size-20"/>, desc: "Stay inspired with our motivational resources and uplifting content, designed to fuel your drive and empower you to overcome obstacles with confidence.", Icon: ""},
  {id: 3, title: "Support", icon: <Support className="size-20"/>, desc: "Lean on our supportive community and dedicated mentors who are here to listen, offer advice, and provide encouragement as you pursue your goals and dreams.", Icon: ""},
  {id: 4, title: "Education", icon: <Education className="size-20"/>,desc: "Access valuable educational resources and workshops curated to enhance your skills, broaden your knowledge, and unlock new opportunities for growth and development.", Icon: ""},
]