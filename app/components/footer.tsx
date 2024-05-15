import footer from "@/lib/footer";
import menu from "@/lib/menu";
import { ChevronLeft, ChevronRight, MapPinIcon, Phone, User, } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";

export default function Footer(){
  return <footer className="py-10 text-white bg-primary">
    <section className="container flex justify-between">
      <section  className="flex flex-col">
        <div>
          <Logo className="mx-2 text-white size-20"/>
          <div className="text-xl">InnerGlow</div>
        </div>
        <ul className="my-3">
          <li className="flex items-center gap-3"><MapPinIcon size={16}/> <span>Paris</span></li>
          <li className="flex items-center gap-3"><Phone size={16}/> <span>+3377337721</span></li>
        </ul>
      </section>
      <div>
        <ul className="flex flex-col gap-3 capitalize">
          {footer.map((item: string) => (
            <li className="flex items-center gap-1"><ChevronRight /> <Link href={"/"+item} className="hover:underline"> {item.replace('-', ' ')}</Link></li>
          ))}
        </ul>
      </div>
      <div >
         
      </div>
    </section>
  </footer>
}