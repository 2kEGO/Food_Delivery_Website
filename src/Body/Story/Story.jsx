import "./Story.css";
import { useState } from "react";
import FanFave from "./Fan_fav.jsx";
import pastaImg from "./Story_img/pasta.jpg"
import familyImg from "./Story_img/family.jpg"


export default function Story() {
    const [data, setData] = useState([
        {
            title: "Our Fans' Favorite",
            heading: "Pasta Carbonara - The Ultimate Comfort",
            paragraph: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
            link: "#",
            button: "View Menu"
        },

        {
            title: "An Offer You'll Love",
            heading: "Gather around the Table with Our Family Bundle",
            paragraph: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
            link: "#",
            button: "Order Online"
        }
    ]);

    return (
        <>
            <div className="story-container">

                <h1>We believe in the simple pleasures of life.</h1>
                <h1>Good food, fresh ingredients, and awesome vibes.</h1>
                <h1>Welcome to Salt'n Pepper, make yourself at home.</h1>
            </div>

            <div className="fan-favorite-container">
                
                <div className="upper">
                    <img src={pastaImg} alt="" />
                    <FanFave data={[data[0]]} className=""/>
                </div>

                <div className="down">
                    
                    <FanFave data={[data[1]]}/>
                    <img src={familyImg} alt="" />
                </div>

            </div>
        </>
    );
}