import image from "../../../public/images/logo-color.png";
// import image2 from "../../../public/images/img-a9juSuGpTC2yU1tvr4Jue.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../../components/Cards";

const Welcome = () => {
    const [disabled] = useState(false);
   
  return (
    <div className="flex flex-col gap-4">
        <div className="flex flex-1">
            <figure className="w-32 h-24 ml-8">
                <img src={image} alt="" />
            </figure>
            <button className="text-xl mt-6">⬅️</button>
        </div>

        <div className="flex flex-col gap-4 items-center w-full">
            <div className="flex items-center w-[33%] ">
                <label className="text-4xl font-bold tracking-tight mr-auto">What bring's you to Dribble?</label>
            </div>
            <div className="flex items-start w-fit">
                <p className="text-xl font-semibold text-gray-600 tracking-tight mr-auto">Select the options that best describe you.Don't worry you can explore other options later.</p>
            </div>

            <Cards />

                    <div className="flex flex-col items-center w-full py-8">
                        <p className="text-2xl font-semibold my-2">Anything else? You can select multiple.</p>
                        <Link to={"/emailVerify"} className={disabled ?`font-semibold text-white bg-pink-200 py-2 px-16 rounded-md` : `font-semibold text-white bg-pink-500 hover:bg-pink-600 py-2 px-16 rounded-md`}>Next</Link>
                        {!disabled && (
                            <label className="font-semibold text-gray-500">Or press <Link to={"/"}>Return</Link></label>

                        )}
                    </div>
        </div>
    </div>
  )
}

export default Welcome