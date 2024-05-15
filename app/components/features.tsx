import Image from "next/image";
import Canvas from "./icons/canvas";
import Handshake from "./icons/handshake";
import Healtcare from "./icons/healthcare";
import Heart from "./icons/healthcare";
import Quill from "./icons/quill";

export default function Features() {
  
  return (
    <section className="bg-primary py-32">
      <div className="container text-white text-center flex items-center justify-center flex-col relative">
        <Image data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500" src={"/SVG/grid-circle.svg"} alt="" width={32} height={32} className="h-32 w-32 opacity-45 invert absolute inset-10"/>
        <div className="px-3 border-x-2 mb-10" data-aos="fade-down">
          <h1 className="font-bold text-5xl capitalize text-white">features</h1>
          <p>Unlock Your Creative Potential with InnerGlow</p>
        </div>

        <div className="flex flex-wrap justify-center w-full md:w-4/6 gap-5">
          {list.map((item) => (
            <section key={item.id} className="flex gap-3 transition-colors ease-in-out group text-white outline outline-white/50 p-3 rounded-md hover:bg-white hover:text-primary" data-aos={item.id % 2 === 0 ? "fade-left": "fade-right"}>
              {item.Icon}
              <div className="flex flex-col justify-between items-start  text-start">
                <h2 className="text-xl font-bold ">{item.title}</h2>
                <p className="text-sm w-52 opacity-70">{item.desc}</p>
              </div>
            </section>

          ))}
        </div>
      </div>
    </section>
  );
}

const list = [
  {id: 1, title: "Express", desc: "Writing poetry, stories and deep quotes", Icon: <Quill className="size-16 text-white group-hover:text-primary"/>},
  {id: 2, title: "Showcase", desc: "Sharing art, photography, music and declamation", Icon: <Canvas className="size-16 text-white group-hover:text-primary"/>},
  {id: 3, title: "Connect", desc: "Connecting with other creative users", Icon: <Handshake className="size-16 text-white group-hover:text-primary"/>},
  {id: 4, title: "Haven", desc: "Safe and supportive community space for girls", Icon: <Healtcare className="size-16 text-white group-hover:text-primary"/>},
]