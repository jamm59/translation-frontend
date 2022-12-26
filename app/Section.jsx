"use client";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
// fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//importing font awesome css
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; 
// icons
import { faPaperPlane,faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { useRef,useState,useEffect } from "react";

export default function Section() {
    const [englishText,setEnglishText] = useState("");
    const input = useRef(null);
    const handleRefresh = (event) => {
        setEnglishText("");
        try {
            event.preventDefault();
        } catch (error) {
        }
        fetch("/api/random_data")
        .then( response => response.json())
        .then(data => {setEnglishText(data.comment)});      
    }
    const handleSubmit = (event) => {
        try {
            event.preventDefault();
        } catch (error) {
        }
        const value = input.current.value;
        input.current.value = "";
        if (value.length > 10 && englishText.length > 5){
            const data = {
                inEnglish : englishText,
                inPidgin : value
            }
            fetch("/api/post_data", {
                method: "POST",
                body: JSON.stringify(data)
            });
        }
        else {
            alert("Please type in a Longer sentence! ")
        }

    
    }
    useEffect(()=> {
        handleRefresh();
    },[])
    return(<section 
                className="w-full col-span-3 flex flex-col
                            justify-center items-center 
                            md:h-[100%] md:row-span-3 ">
                <div className="w-2/3 h-5/6 grid grid-row-4 gap-2 
                                relative rounded-2xl drop-shadow-lg
                                md:w-[100%]
                                md:flex md:flex-col md:bg-teal-50" >
                    <div className="w-5/6 md:w-full md:h-16">
                        <Button 
                            clickEvent={handleSubmit}
                            content={"submit"}
                            FontIcon={<FontAwesomeIcon className="text-white mr-2" icon={faPaperPlane}/>}
                          />
                    </div>
                    <div className="text-center w-3/4 py-2 rounded-md row-span-2 mx-auto mb-4 md:w-[98%]">
                        <span className="text-3xl font-black bg-clip-text 
                                        text-transparent bg-gradient-to-r 
                                      from-pink-500 to-violet-500
                                        md:text-2xl">
                            {englishText ? englishText :`Loading...`}
                        </span>
                        <div className="w-full py-2 md:py-1 md:fixed md:bottom-16 md:grid md:place-items-center">
                            <Button 
                                clickEvent={handleRefresh}
                                content={"refresh"}
                                FontIcon={<FontAwesomeIcon className="text-white mr-2 transition-transform duration-200 hover:rotate-180 hover:scale-150" icon={faArrowsRotate}/>}
                            />
                        </div>
                    </div>
                    <div className="grid place-items-center fixed bottom-0 w-full h-16 bg-gray-800 rounded-lg p-2 md:rounded-none">
                        <Input reference={input}/>
                    </div>
                </div>
           </section>
        );
}