import image from "../../../public/images/logo-color.png";
import image2 from "../../../public/images/img-a9juSuGpTC2yU1tvr4Jue.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    const [disabled,setDisabled] = useState(true);
    const [location,setLocation] = useState("");
   
  return (
    <div className="flex flex-col gap-4">
        <div className="flex flex-1">
            <figure className="w-32 h-24 ml-8">
                <img src={image} alt="" />
            </figure>
        </div>

        <div className="flex flex-col gap-4 items-center w-full">
            <div className="flex items-start w-[33%] ">
                <label className="text-4xl font-bold tracking-tight mr-auto">Welcome! Let's create your profile</label>
            </div>
            <div className="flex items-start w-[33%]">
                <p className="text-xl font-semibold text-gray-600 tracking-tight mr-auto">Let other get to know you better! You can do these better</p>
            </div>

            <div className="flex items-start gap-4 w-[33%] py-8">
                <label className="text-3xl font-bold mr-auto">Add an avatar</label>

            </div>

                <div className="flex flex-col md:flex-row lg:flex-row gap-4 w-[33%]">
                    <div className="w-36 h-36  outline-dashed outline-gray-600" style={{borderRadius:"50%",overflow:"hidden"}}>
                        <img className="object-cover" src={image2} alt="" />
                    </div>

                    <div className="flex flex-col mx-auto gap-8">
                        <button className="px-2 font-semibold border py-1 rounded-md shadow-md border-gray-400">Choose image</button>
                        <p className="text-gray-500">Or choose one of our defaults</p>
                    </div>

                </div>
                    <div className="flex flex-col items-start w-[33%] py-8">
                        <label className="text-3xl font-bold mr-auto">Add your location</label>
                        <div className="mt-4">
                            <input className="font-semibold text-xl outline-none" value={location} onChange={(e)=> {
                                setLocation(e.target.value)
                                if(location.length > 0){
                                    setDisabled(false);
                                }else if(location.length === 0){
                                    setDisabled(true);
                                }
                            }} type="text" placeholder="Enter your location" />
                        </div>
                            <hr className="w-full"></hr>
                    </div>


                    <div className="flex flex-col items-start w-[33%] py-8">
                        <Link to={"/whatBrings"} className={disabled ?`font-semibold text-white bg-pink-200 py-2 px-16 rounded-md` : `font-semibold text-white bg-pink-500 hover:bg-pink-600 py-2 px-16 rounded-md`}>Next</Link>
                        {!disabled && (
                            <label className="font-semibold text-gray-500">Or press <Link to={"/"}>Return</Link></label>

                        )}
                    </div>
                    


        </div>
    </div>
  )
}

export default Welcome