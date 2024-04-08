import React from "react";
import {Image, Carousel} from "antd";

export default function App() {
		const carouselStyling = {
				"width": "500px",
				"backgroundColor": "#999",
                "height": "300px"
		};
        const slideStyling={"height": "300px"}
    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <main>
                <p>Hello React!</p>
                <h2>Here are some images</h2>
                <Image src="https://picsum.photos/400/400?id=1" width={200} />
                <Image src="https://picsum.photos/400/400?id=2" width={200} />
                <Image src="https://picsum.photos/400/400?id=3" width={200} />
                
                <h2>Here is a carousel</h2>
                <div style={carouselStyling}>
		                <Carousel>
				                <div style={slideStyling}>Slide 1</div>
				                <div style={slideStyling}>Slide 2</div>
				                <div style={slideStyling}>Slide 3</div>
		                </Carousel>
	               </div>
            </main>
        </>
    );
}