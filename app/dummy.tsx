import ShoesImage from "@/public/assets/img/shoes.jpg"
import BagsImage from "@/public/assets/img/bags.jpg"
import HoodieImage from "@/public/assets/img/hoodie.jpg"

<div className="pt-24 md:grid md:grid-cols-2 px-20">
        <div>
          <h1 className={`${QuicksandFont.className} font-bold text-5xl leading-snug line tracking-wide`}>Simplicity is the ultimate in sophistication</h1>
          <div className="flex">
            <button className={`w-36 h-12 bg-black mt-8 text-xs rounded-full text-white justify-center flex items-center ${NunitoFont.className}`}>
              Shop Now
              <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </button>
            <button className={`w-36 h-12 ml-2 bg-white border-black border-2 mt-8 text-xs rounded-full text-black justify-center flex items-center ${NunitoFont.className}`}>
              Trending
              
            </button>
          </div>
        </div>
        
        <h1 className="md:pl-72">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ipsa quasi optio officiis maiores, explicabo vitae officia non quibusdam doloremque. Quo pariatur nulla exercitationem doloremque, facilis voluptates adipisci qui illum?</h1>
      </div>

      <div className="flex mx-20">
      <div className="relative w-[550px] h-[450px] mt-5 group">
        <img src={ShoesImage.src} alt="" className="w-full h-full object-cover rounded-xl" />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-xl"></div>
        <div className={`absolute inset-0 flex flex-col justify-end items-center text-white mb-5 ${QuicksandFont.className}`}>
          <h1 className="text-2xl font-bold">Shoes Collection</h1>
          <h4 className="text-sm">Designed to stand the test of time</h4>
        </div>
      </div>
        <div className="grid-flow-row pt-[1.2px] pl-5">
          <div className="relative w-64 h-56">
            <img src={BagsImage.src} alt="" className="w-full h-full object-cover rounded-xl" />
            <div className={`absolute inset-0 flex flex-col justify-end items-center text-white mb-5 ${QuicksandFont.className}` }>
              <h1 className="text-2xl font-bold">Bags Collection</h1>
              <h4 className="text-sm">Designed to stand the test of time</h4>
            </div>
          </div>
          <div className="relative w-64 h-56 mt-3">
          <img src={ShoesImage.src} alt="" className="w-full h-full object-cover rounded-xl" />
          <div className={`absolute inset-0 flex flex-col justify-end items-center text-black mb-5 ${QuicksandFont.className}` }>
            <h1 className="text-2xl font-bold">Shoes Collection</h1>
            <h4 className="text-sm">Designed to stand the test of time</h4>
          </div>
        </div>
        </div>
        <div className="relative w-[550px] h-[460px] pl-3">
          <img src={HoodieImage.src} alt="" className="w-full h-full object-cover bg-center rounded-xl" />
          <div className={`absolute inset-0 flex flex-col justify-end items-center text-white mb-5 ${QuicksandFont.className}` }>
            <h1 className="text-2xl font-bold">Hoodie Collection</h1>
            <h4 className="text-sm">Designed to stand the test of time</h4>
          </div>
        </div>
        
      </div>