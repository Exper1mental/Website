import React from "react";
import Hike from "./img/trekking_1920.jpg"; // Source: https://pixabay.com/photos/couple-the-glacier-mountains-7612157/
import Gunter from "./img/GunterSnowPhotobomb.jpg";
import Coding from "./img/coding_1920.jpg"; // Source: https://pixabay.com/photos/coding-programming-working-macbook-924920/

function About() {
    return (
        <section id="about" className="bg-gradient-to-r from-gray-500 to-gray-800 pt-10" style={{zIndex: `1`}}>
            <h2 className="text-center text-xl font-bp;d text-gray-300">About Me</h2>
            <ul className="grid p-10 gap-10 md:grid-cols-3">
                <li className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-gray-900 shadow rounded-lg overflow-hidden">
                    <img src={Hike} className="w-full" alt="A couple hiking in the Swiss Alps." />
                    <div className="p-6 md:p-8 text-gray-300">
                        <h3 className="font-bold">Hiking</h3>
                        <p>I love discovering places I've never been before.</p>
                    </div>
                </li>
                <li className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-gray-900 shadow rounded-lg overflow-hidden">
                    <img src={Coding} className="w-full" alt="A computer with with programming a text editor." />
                    <div className="p-6 md:p-8 text-gray-300">
                        <h3 className="font-bold">Computer Programming</h3>
                        <p>One of my favorite topics to learn about in my free time.</p>
                    </div>
                </li>
                <li className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-gray-900 shadow rounded-lg overflow-hidden">
                    <img src={Gunter} className="w-full" alt="My german shepherd in the snow."/>
                    <div className="p-6 md:p-8 text-gray-300">
                        <h3 className="font-bold">Gunter</h3>
                        <p>My favorite german shepherd!</p>
                    </div>
                </li>
            </ul>
        </section>
);
}

export default About;