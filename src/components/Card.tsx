import { useState } from "react";
import image from "../../public/images/img-a9juSuGpTC2yU1tvr4Jue.jpeg";

const Card = () => {
    const [selected, setSelected] = useState(false);

    return (
        <div className={`flex flex-col items-center gap-2 my-8 p-4 border-2 ${selected ? 'border-pink-500' : 'border-gray-300'} rounded-md w-96 h-72`}>
            <div className={selected ? "absolute" : ""}>
                <img className="h-32 w-32 mx-auto my-2" src={image} alt="Design" />
                <div className="flex flex-col">
                    <p className="text-xl font-semibold">I'm a designer looking to share my work</p>
                    {selected && (
                        <p className="text-gray-500 w-full max-w-xs overflow-auto mx-auto">With over 7 million shots from a vast community of designers, Dribble is the leading source of design inspiration.</p>
                    )}
                </div>
                <div>
                    <input type="checkbox" onChange={() => setSelected(!selected)} className="rounded" />
                </div>
            </div>
        </div>
    );
}

export default Card;

