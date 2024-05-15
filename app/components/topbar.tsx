import { Facebook, Instagram, Linkedin, Mail, Phone, Send, } from "lucide-react";

export default function TopBar(){
  return <div className="flex justify-between text-white text-xs my-2 opacity-65">
    <div className="flex gap-3 items-center">
      <a href="mail:info@innerglow.pro" className="flex"><Mail className="mr-2 h-3 w-3"/>info@innerglow.pro</a>
      <a href="tel:+3377722773" className="border-l-2 pl-3 flex"><Phone className="mr-2 h-3 w-3"/>+3377722773</a>
    </div>
    <div className="flex gap-3 items-center">
      <a href="https://facebook.com/innerglow_pro" className="flex"><Facebook className="h-3 w-3"/></a>
      <a href="https://instagram.com/innerglow_pro" className="border-l-2 pl-3 flex"><Instagram className="h-3 w-3"/></a>
      <a href="https://t.me/innerglow_pro" className="border-l-2 pl-3 flex"><Send className="h-3 w-3"/></a>
      <a href="https://linkedin.com/company/innerglow-pro" className="border-l-2 pl-3 flex"><Linkedin className="h-3 w-3"/></a>
    </div>
  </div>
}