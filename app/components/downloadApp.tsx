import icons from "@/lib/icons";
import images from "@/lib/image";
import Image from "next/image";

export default function DownloadApp(){
  return <section className="container flex w-11/12 items-center py-10" >
    <div className="w-1/2 flex flex-col" data-aos="fade-in">
      <div className="border-t-2 border-primary w-1/3 mb-3"></div>
      <h1 className="text-4xl font-bold ">Easy Download And <br/>Ready To Use</h1>
      <p className="text-md text-gray-500 mt-6">Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing.</p>

      <div className="flex gap-5 mt-6">
        <button className="flex gap-3 bg-gradient-to-r from-amber-300 to-amber-600 hover:from-amber-600 hover:to-amber-300 text-white px-7 py-3 items-center rounded-full shadow-lg shadow-amber-500/40 hover:shadow-amber-500/75 transition-all duration-700 ease-in-out">
          <Image src={icons.googleStore} alt="google store" width={32} height={32} />
          <div className="flex flex-col gap-1 text-start capitalize">
            <small>download on the</small>
            <strong className="uppercase text-sm">google play</strong>
          </div>
        </button>
        <button className="flex gap-3 bg-gradient-to-r from-teal-300 to-teal-600 hover:from-teal-600 hover:to-teal-300 text-white px-7 py-3 items-center rounded-full shadow-lg shadow-teal-500/40 hover:shadow-teal-500/75 transition-all duration-700 ease-in-out">
          <Image src={icons.appStore} alt="google store" width={32} height={32} />
          <div className="flex flex-col gap-1 text-start capitalize">
            <small>download on the</small>
            <strong className="uppercase text-sm">app store</strong>
          </div>
        </button> 
      </div>
    </div>
    <div className="flex w-1/2 gap-6 relative" data-aos="fade-in">
      <Image src={images.userScreenMockup} width={900}  height={900}  alt="download" className="w-full z-0 drop-shadow" />
      <Image src={images.homeScreenMockup} width={900}  height={900}  alt="download" className="w-full z-10 -ml-16 drop-shadow" />
    </div>
  </section>
}