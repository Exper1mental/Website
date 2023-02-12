// import React from "react";
import Wave from "./img/wave.mp4"; // Source: https://steamcommunity.com/sharedfiles/filedetails/?id=1830267291 (Converted to HEVC for small file size)

function Welcome() {
    return (
        // component
        // Menu based on: https://tailwindcomponents.com/component/responsive-navbar-with-dropdown by Cricksu
        // <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

        <div>
            <video autoPlay muted loop id="myVideo" style={{ position: `fixed`, top: `0`, left: `0`, width: `100%`, height: `100%`, objectFit: `cover`, objectPosition: `center`, zIndex: `-1` }} >
                <source src={Wave} type="video/mp4" />
            </video>

            <section
                id="welcome"
                className="h-screen text-white bg-gray=900 text-center grid place-items-center"
            >
                <div className = "bg-black bg-opacity-0 rounded" style={{zIndex: `0`}}>
                    <h1 className = "font-bold italic text-white text-7xl md:text-9xl inline-block mt-3 mb-3 ml-5 mr-5">Welcome!</h1>
                </div>
            </section>
        </div>
);
}

export default Welcome;