import { Link } from "react-router-dom";
import RegisterForm from "./FormData";



const SignUpForm = () => {
  return (
    <div className="flex flex-col gap-6 my-2">

        <div className="w-full">
            <div className="ml-auto w-fit py-4">
                <h1 className="text-gray-700 text-xl px-4">Already a member?<Link to={"/"} className="text-purple-600">Sign In</Link></h1>
            </div>
        </div>

        <div className="flex flex-col w-full items-center">

            <RegisterForm />
        </div>

    </div>
  )
}

export default SignUpForm;