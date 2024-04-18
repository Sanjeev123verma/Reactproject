const HeroSection = () => {

     return ( 
         
     <main className=" w-full flex items-center pl-5 overflow-y-hidden ">
          <div className="md:w-2/5 w-auto h-auto absolute top-20 right-3 items-center md:py-3">
                <img src="/Images/Nike.png" alt="hero-image" />
          </div>
        <div className="md:p-8 md:w-3/5 md:absolute m-auto md:top-28 left-4 py-5" > 
          <h1 className="font-black text-6xl md:text-wrap md:pr-40 ">YOUR FEET DESERVE THE BEST QUALITY SHOES.</h1>
               
          <p className="md:text-wrap py-5 pe-28 tracking-widest "> 
                  YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR 
                  SHOES.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam  molestiae exercitationem laborum repellat. Placeat eaque, ipsum laboriosam quos odio molestiae magni temporibus sapiente laudantium pariatur, reprehenderit officiis, minus odit hic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, incidunt. Tenetur magnam at impedit dignissimos fuga quo voluptatibus vero harum sunt eum eveniet, repudiandae ex quidem unde, quam aspernatur culpa.!
          </p >

          <div className="flex-row justify-center items-center ">
              <button className=' font-semibold text-2xl bg-red-600 px-3 py-1 rounded-md mr-14 my-2' >Shop Now</button>

              <button className='  font-semibold text-2xl bg-red-600 px-3 py-1  rounded-md ' >Categories</button>
          </div>

          <p className=" font-normal my-3"> Also available on - </p>

          <div className=" flex item-center gap-6 cursor-pointer ">
            <a href="https://flipkart.com" target="_blank">
           <img src="/Images/flipkart.png" alt="flipkart LOGO" className="w-8" /> </a>

          <a href="https://amazon.com" target="_blank">
            <img src="/Images/amazon.png" alt="amazon LOGO" className=" w-16 "/> </a> 
          </div>

       </div> 
           
     </main>
    
     );            
};

export default HeroSection;