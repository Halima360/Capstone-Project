import React from "react";
import { Category } from "../Component/categorylist";
import { Nav } from "../Component/navbar";
import main1 from "../img/frame3.png";
import frame2 from "../img/frame2.png";
import { HiChevronRight  } from "react-icons/hi2";
import { imagesList } from "./imagelist";
import { DailyDeals } from "./Dailydeals";
import { Footer } from "./footer";



 function Home(){
    return(
        <div className="">
            <Nav/>
            <section id="main-section" className=" flex flex-col md:flex-row items-top justify-center">
            <article className=" mt-32 ">
            
            <div className="w-60 px-10   left-0" >
        <h2 className=" p-5">CATEGORIES</h2>
        <div className="h-0.5 w-40 bg-gray-200"></div>
        {Category.map((items)=> (
            <div  className="flex flex-col items-left justify-center space-y-10  " key={items.id}>
             <div  className="flex flex-row items-center justify-between mt-3">
               <div className="flex flex-row space-x-0">
                 <img className="h-5" src={items.icon}/>
                <p>{items.title}</p>
                </div>
            <img src={items.nav}/>
                </div>   
            </div>
        ) )}
        </div> 
        
        
</article>
<article className="flex flex-col space-y-10 mt-32">
    <section className="flex flex-row px-5 md:px-0 items-center overflow-x-scroll md:overflow-hidden  justify-center space-x-3">
        <div className="">
            {/*<p className="absolute top-20 left-4 text-4xl font-bold text-white w-80" >How to <span className="text-orange">Buy</span> & <span className="text-orange">Sell</span> on iMarket</p>*/}
            <img src={main1}/>
            {/*<div className="flex flex-row items-center justify-center space-x-1 absolute top-52 left-4 text-white ">
                
                <p>Click here</p>
                <HiChevronRight/>
        </div>*/}
        </div> 
        <div>
            <img src={frame2}/>
        </div>
    </section>

<section className="flex flex-col  space-y-5">
    <div className="flex flex-row items-center justify-between">
        <h1 className="font-bold mb pl-4">Explore Popular Brands</h1>
        <p className="text-orange  flex flex-row items-center  space-x-1 ">SEE ALL  <HiChevronRight/> </p>
    </div>
    <div className="flex flex-row flex-wrap space-x-8 md:px-0 px-5  items-center justify-around">
    {imagesList.map((items) =>(
     <div  className="flex flex-col items-center justify-around " key={items.id}>
     
       <div className="flex flex-col space-x-0">
         <img src={items.img}/>
        <p>{items.title}</p>
        </div>
    
        </div>   
      
    )
    )}
    </div>
</section>
<section className="flex flex-col space-y-10">
    <div className="flex flex-row   items-center px-5 justify-between">
        <h1 className="font-bold">Daily Deals</h1>
        <p className="text-orange  flex flex-row items-center  space-x-1">SEE ALL <HiChevronRight/> </p>
    </div>
    <div className="flex flex-row flex-wrap w-screen md:w-full items-center  px-10 justify-around space-x-5">
        <p className="bg-gray-100 py-1 px-2 rounded ">Phones</p>
        <p className="bg-gray-100  py-1 px-2 rounded">Vehicles</p>
        <p className="bg-gray-100 py-1 px-2 rounded">Fashion</p>
        <p className="bg-gray-100 py-1 px-2 rounded">Electronics</p>
        <p className="bg-gray-100 py-1 px-2 rounded">Appliances</p>
        <p className="bg-gray-100 py-1 px-2 rounded">Beauty & Health</p>
        <p className="bg-gray-100 py-1 px-2 rounded">Sports</p>
        <p className="bg-gray-100 py-1 px-2 rounded">Games</p>
    </div>
    </section>
<section>
    <div className="flex md:flex-row flex-col flex-wrap space-x-5 space-y-10 mb-10 items-center justify-center">
    {DailyDeals.map((items) =>(

     <div  className="flex flex-col items-left justify-center text-xs space-y-2 " key={items.id}>
         <img src={items.img}/>
        <p>{items.title}</p>
        <p>{items.location}</p>
        <p className="font-bold">{items.price}</p>    
    </div>   
    )
    )}
    </div>
</section>
</article>
</section>
    <Footer/>
    </div>
    )
}

export default Home;