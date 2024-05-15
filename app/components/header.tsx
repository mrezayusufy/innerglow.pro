"use client"
import Navbar from "./navbar";
import TopBar from "./topbar";
export default function Header(){
  return <header className="z-10 container absolute left-0 top-0">
    <TopBar/>
    <Navbar/>
  </header>
}