import React from "react";
import footer1 from "../img/footer1.png"
export function Footer(){
    return(
        <article className="bg-gray-800">
            <section className=" px-12 py-10 text-white grid grid-cols-2 gap-y-5 gap-x-3
         md:flex md:flex-row md:items-center md:justify-between  ">
<section className="">
    <ul className=" flex flex-col md:space-y-2 ">
        <li>Home</li>
        <li>About Us</li>
        <li>Trending Products</li>
        <li>Contact Us</li>
        <li>Trending Products</li>
    </ul>
</section>
<section className=" flex flex-col  md:space-y-3">
<img src={footer1}/>
<p>Reach Globally, Interact Locally.</p>
</section>

<section>
<ul className=" flex flex-col md:space-y-2">
    <li>Privacy Policy</li>
    <li>Safety Tips</li>
    <li>FAQs</li>
    <li>Join Forum</li>
    <li>Terms and Conditions</li>
</ul>
</section>
</section>
<p className="flex flex-row items-center justify-center text-gray-400 pb-10">Designed by @ <span className="text-yellow-700">Halimatu Ibrahim</span></p>
        </article>
    )
}