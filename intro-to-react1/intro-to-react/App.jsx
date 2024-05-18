import "./App.css";

import React from "react";
import { Image, Carousel, Timeline } from "antd";
import ButtonCount from "./ButtonCount.jsx";
import Profile from "./Profile.jsx";

export default function App() {
    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <main>
                <div className="container">
                    <h2>Here are some custom components</h2>
                    <ButtonCount />
                    <ButtonCount />
                    <ButtonCount />
                    <ButtonCount />
                    <ButtonCount />
                    <ButtonCount />

                    <div className="cards">
                        <Profile
                            name="Laciesha"
                            picture="https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=640:*"
                            bio="This is Laciesha's bio."
                        />

                        <Profile
                            name="Rinku"
                            picture="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"
                            bio="This is Rinku's bio."
                        />

                        <Profile
                            name="Janice"
                            picture="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
                            bio="This is Janice's bio."
                        />

                        <Profile
                            name="Wanda"
                            picture="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            bio="This is Wanda's bio."
                        />

                        <Profile
                            name="Adwaina"
                            picture="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
                            bio="This is Adwaina's bio."
                        />

                        <Profile
                            name="Andrea"
                            picture="https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=640:*"
                            bio="This is Andrea's bio."
                        />

                        <Profile
                            name="Christina"
                            picture="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"
                            bio="This is Christina's bio."
                        />

                        <Profile
                            name="Silas"
                            picture="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            bio="This is Silas's bio."
                        />

                        <Profile
                            name="Anita"
                            picture="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
                            bio="This is Anita's bio."
                        />
                    </div>
                </div>

                <div className="container">
                    <h2>Here are some images</h2>
                    <Image
                        src="https://picsum.photos/400/400?id=1"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/400/400?id=2"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/400/400?id=3"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/400/400?id=4"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/400/400?id=5"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/400/400?id=6"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/400/400?id=7"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/400/400?id=8"
                        width={200}
                    />
                </div>

                <div className="carousel-container">
                    <h2>Here is a carousel</h2>
                    <Carousel dotPosition="top" autoplaySpeed={5000}>
                        <div className="center-me">
                            <p>Hello, Janice!</p>
                        </div>
                        <img
                            src="https://picsum.photos/500/300?id=9"
                            alt="Alt text"
                        />
                        <img
                            src="https://picsum.photos/500/300?id=10"
                            alt="Alt text"
                        />
                        <img
                            src="https://picsum.photos/500/300?id=11"
                            alt="Alt text"
                        />
                        <img
                            src="https://picsum.photos/500/300?id=12"
                            alt="Alt text"
                        />
                        <img
                            src="https://picsum.photos/500/300?id=13"
                            alt="Alt text"
                        />
                        <img
                            src="https://picsum.photos/500/300?id=14"
                            alt="Alt text"
                        />
                        <img
                            src="https://picsum.photos/500/300?id=15"
                            alt="Alt text"
                        />
                        <img
                            src="https://picsum.photos/500/300?id=16"
                            alt="Alt text"
                        />
                    </Carousel>
                </div>

                <div className="container">
                    <h2>Here is a timeline</h2>
                    <Timeline
                        items={[
                            {
                                children: "Interviewed the client",
                            },
                            {
                                children: "Conducted user research",
                            },
                            {
                                children: "Built low-fidelity prototype",
                            },
                            {
                                children:
                                    "Built high-fidelity prototype using Figma",
                            },
                        ]}
                    />
                </div>
            </main>
        </>
    );
}
