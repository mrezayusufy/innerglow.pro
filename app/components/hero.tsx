import Image from "next/image";
import Logo from "./logo";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
export default function Hero() {
   
  return (
    <section className="z-0 relative bg-primary">
      <div className="absolute top-0 w-full h-lvh z-0 bg-gradient-to-b from-teal-900">
        <div className=" w-full h-lvh mask-image">
          <Image
            src="/hero/hero-1.avif"
            width={1092}
            height={1080}
            alt="alt"
            className="object-cover brightness-50 opacity-50 w-full"
          />
        </div>
      </div>
      <div className="flex z-10 relative items-center container w-full h-lvh lg:w-3/5">
        {/* text */}
        <div className="w-1/2 flex flex-col items-start text-white" data-aos="zoom-in">
          <Logo className="w-32 h-32" />
          <h1 className="text-5xl font-bold my-5">INNERGLOW</h1>
          <p>
            In your journey, remember: Afghanistan&apos;s spirit walks with you,
            strong and true.
          </p>
          <Button className="btn-mask mt-5">
            <Download className="mr-3" /> Download App
          </Button>
        </div>
        {/* mockup */}
        <div className="w-1/2 grid place-content-end" data-aos="zoom-in">
          <Image
            alt="innerglow app"
            src={"/innerglow-rendered.avif"}
            width={400}
            height={400} 
          />
        </div>
      </div>
    </section>
  );
}
