import "../index.css";
import { useState } from "react";
const Home = () => {

    const [toggle,settoggle] = useState<Boolean>();
    
    const handleclick = () =>
    {
       settoggle((prev) => !prev);
    }
    return (
        <>
        <section>
            <div className="bg h-90 max-md:h-70 flex justify-between p-10 max-md:justify-center items-center bg-purple-600">
                <div className="flex flex-col max-md:justify-center">
                    <h1 className="text-white text-4xl max-md:text-center font-bold text-start max-md:text-2xl max-md:font-bold">Shop Smarter,Shop Faster</h1>
                    <h1 className="text-white text-4xl max-md:text-center font-bold text-start max-md:text-2xl max-md:font-bold">Choose ViroShop.</h1>
                    <p className="text-white max-md:text-center whitespace-pre-wrap text-start">Discover thousands of products, unbeatable prices, and seamless shopping—all in one place.</p>
                    <div className="flex flex-row max-md:justify-center gap-3 mt-10 max-md:mt-5">
                        <button className ="rounded-lg w-auto p-1.5 bg-white font-medium py-2">Start Today</button>
                        <button className="bg-black rounded-lg w-auto text-white p-1.5 font-medium py-2">Explore</button>
                    </div>
               </div>
               <div className="">
                  
               </div>
            </div>
        </section>
        <section>
            <div className="flex flex-col max-md:justify-center max-md:items-center items-start p-10">
            <h1 className="text-black font-bold text-4xl max-md:text-2xl text-end max-md:text-center mt-5 md:underline">About Viroshop</h1>
            <p className="text-gray-700 max-md:text-center text-justify py-5">ViroShop is your modern online shopping destination, offering a simple, fast, and secure way to find everything you need. From fashion and electronics to home essentials,ViroShop connects you to high-quality products with just a click.{<br/>}
              {toggle && "ViroShop brings the future of online shopping to your fingertips. Our platform combines smart technology with a clean, intuitive design to give you a fast and enjoyable shopping journey. Whether you're discovering new products or grabbing your essentials, ViroShop helps you shop with confidence and convenience." }  
            </p>
            <button onClick={handleclick} className="bg-black p-2 text-white rounded-lg self-center">
                {toggle ? "Back" : "More"}
            </button>
            </div>
        </section>
        <section>
        <div className="flex flex-col p-10 gap-8">
            <h1 className="text-black font-bold text-4xl max-md:text-2xl text-start max-md:text-center md:underline">Why Shop With Viroshop?</h1>
           <div className="flex flex-col bg-gray-300 p-4 rounded-lg">
             <h1 className="font-medium text-xl">Wide Product Selection</h1>
             <p className="text-gray-700 text-start">
                Explore a huge range of categories including fashion, electronics, beauty, home décor, gadgets, and more.
             </p>
           </div>
             <div className="flex flex-col bg-gray-300 p-4 rounded-lg">
             <h1 className="font-medium text-xl">Fast & Easy Checkout</h1>
             <p className="text-gray-700 text-start">
                Designed for smooth shopping—add to cart, pay, and you're done in seconds.
                 </p>
           </div>
             <div className="flex flex-col bg-gray-300 p-4 rounded-lg">
             <h1 className="font-medium text-xl">Secure Payments</h1>
             <p className="text-gray-700 text-start">
                Your information is protected with advanced security and trusted payment gateways.
            </p>
           </div>
           <div className="flex flex-col bg-gray-300 p-4 rounded-lg">
             <h1 className="font-medium text-xl">Customer First</h1>
             <p className="text-gray-700 text-start">
               24/7 support, easy returns, and a hassle-free shopping experience.
                  </p>
           </div>
           </div>
        </section>
        <section>
            <div className="flex flex-col p-10 g-8">
                <h1 className="text-black font-bold text-4xl max-md:text-2xl text-start max-md:text-center md:underline">Features And Categories</h1>
            </div>
        </section>
    </>
    )
}

export default Home;