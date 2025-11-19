import "../index.css";
const Home = () => {
    return (
        <section>
            <div className="bg h-90 max-md:h-70 flex justify-around max-md:justify-center items-center bg-purple-600">
                <div className="flex flex-col max-md:justify-center">
                    <h1 className="text-white text-4xl max-md:text-center font-bold text-start max-md:text-2xl max-md:font-bold">Shop Smarter,Shop Faster</h1>
                    <h1 className="text-white text-4xl max-md:text-center font-bold text-start max-md:text-2xl max-md:font-bold">Choose ViroShop.</h1>
                    <p className="text-white max-md:text-center whitespace-pre-wrap text-start">Discover thousands of products, unbeatable prices, and seamless shopping—all in one place.</p>
                    <div className="flex flex-row max-md:justify-center gap-3 mt-10 max-md:mt-5">
                        <button className ="rounded-lg w-auto p-1.5 bg-white">Explore</button>
                        <button className="bg-black rounded-lg w-15 text-white p-1.5">Go</button>
                    </div>
               </div>
               <div className="">
                  
               </div>
            </div>
        </section>
    )
}

export default Home;