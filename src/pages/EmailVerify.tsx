import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


const EmailVerify = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex flex-col mx-auto w-full gap-4 my-6">
            <label className="text-5xl font-semibold">Please verify your email...</label>
            <FontAwesomeIcon style={{fontSize:"8rem"}} icon={faEnvelope} />
        </div>

        <div className="flex flex-col w-full gap-4 mx-auto items-center">
            <h1 className="text-gray-500 text-2xl">Please verify your email address. We've sent a confirmation code to :</h1>
            <Link className="font-bold text-xl" to={"/"}>account@refero.design</Link>
            <h1 className="text-gray-500 text-2xl">Click the confirmation link in that email to begin using Dribble.</h1>
            <h1 className="text-gray-500 text-2xl">Didn't recieve the email? Check your Spam folder, it may have been caught by a filter. If</h1>
            <h1 className="text-gray-500 text-2xl">you still don't see it, you can <span className="text-pink-500">resend the confirmation email</span></h1>
            <h1 className="text-gray-500 text-2xl my-2">Wrong email address? <span className="text-pink-500">Change it.</span></h1>
        </div>

        <Footer />
    </div>
  )
}

export default EmailVerify;