import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { Nunito, Quicksand, Passion_One } from "next/font/google";
import ShirtRed from "@/public/assets/img/shirt.jpg"
import ShirtWhite from "@/public/assets/img/shirt_red.jpg"
import ShirtBlack from "@/public/assets/img/shirt_black.jpg"
import ShirtPurple from "@/public/assets/img/shirt_purple.jpg"
import Footer from "@/components/Footer/Footer";

const QuicksandFont = Quicksand({
  weight: '600',
  subsets: ['latin']
})

const PassionOneFont = Passion_One({
  weight: '400',
  subsets: ['latin']
})

const NunitoFont = Nunito({
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
  return (
    <main >
      <div style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      {/* Background Video */}
      <video 
              autoPlay 
              loop 
              muted 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translate(-50%, -50%)',
                zIndex: '-1'
              }}
            >
              <source src="/assets/img/bg_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Navbar */}
      <Navbar />
      </div>
      
      {/* Handphone Mode */}
      <div className={`md:hidden pt-5 mx-5 ${PassionOneFont.className}`}>
        {/* Your content goes here */}
        <div className="grid grid-cols-2 gap-x-2">
          <div className="relative">
            <img src={ShirtRed.src} alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">SHOES</span>
            </div>
          </div>
          <div className="relative">
            <img src={ShirtWhite.src} alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-black text-4xl font-bold">HOODIE</span>
            </div>
          </div>
        </div>
        
        <div className="relative pt-2">
          <img src={ShirtBlack.src} alt="" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">BAGS</span>
          </div>
        </div>
        <div className="relative pt-2">
          <img src={ShirtPurple.src} alt="" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">HAT</span>
          </div>
        </div>
      </div>
      
      {/* Dekstop Mode */}
      <div className={`hidden md:grid gap-x-2 md:grid-cols-4 pt-5 mx-5 gap-y-4 md:gap-x-4 ${PassionOneFont.className}`}>
        {/* Your content goes here */}
        <div className="relative">
          <img src={ShirtRed.src} alt="" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">SHOES</span>
          </div>
        </div>
        <div className="relative">
          <img src={ShirtWhite.src} alt="" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-black text-4xl font-bold">HOODIE</span>
          </div>
        </div>
        <div className="relative">
          <img src={ShirtBlack.src} alt="" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">BAGS</span>
          </div>
        </div>
        <div className="relative">
          <img src={ShirtPurple.src} alt="" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">HAT</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
