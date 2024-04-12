import React from "react";
import {Image, Carousel} from "antd";
import "./App.css";

export default function App() {
    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <main> 
                               
                <div className="image-container">
                    <h2>Here are some images</h2>
                    <Image src="https://picsum.photos/400/400?id=1" width={200} />
                    <Image src="https://picsum.photos/400/400?id=2" width={200} />
                    <Image src="https://picsum.photos/400/400?id=3" width={200} />
                    <Image src="https://picsum.photos/400/400?id=4" width={200} />
                    <Image src="https://picsum.photos/400/400?id=5" width={200} />
                    <Image src="https://picsum.photos/400/400?id=6" width={200} />
                    <Image src="https://picsum.photos/400/400?id=7" width={200} />
                    <Image src="https://picsum.photos/400/400?id=8" width={200} />
                    <Image src="https://picsum.photos/400/400?id=9" width={200} />
                </div>

                <div className="carousel-container">
                    <h2>Here is a carousel</h2>
                    <Carousel>
                        <img src="https://picsum.photos/500/300?id=9" alt="Alt text" />
                        <img src="https://picsum.photos/500/300?id=10" alt="Alt text" />
                        <img src="https://picsum.photos/500/300?id=11" alt="Alt text" />
                        <img src="https://picsum.photos/500/300?id=12" alt="Alt text" />
                        <img src="https://picsum.photos/500/300?id=13" alt="Alt text" />
                        <img src="https://picsum.photos/500/300?id=14" alt="Alt text" />
                        <img src="https://picsum.photos/500/300?id=15" alt="Alt text" />
                        <img src="https://picsum.photos/500/300?id=16" alt="Alt text" />
                        <img src="https://picsum.photos/500/300?id=17" alt="Alt text" />
                    </Carousel>
                </div>
            </main>
        </>
    );
}