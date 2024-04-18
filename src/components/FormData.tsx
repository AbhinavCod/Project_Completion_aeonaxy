import { Link } from "react-router-dom";


const RegisterForm = () => {
  return (
    <div className="flex flex-col w-full mx-auto gap-8 items-start px-28">
        <label className="text-3xl font-bold">Sign up to Dribble</label>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr]  w-full">
            <div className="flex flex-col items-start">
              <label className="text-xl font-semibold">Name</label>
              <input type="text" className="outline-none bg-slate-200 rounded-md py-2 px-2 w-[90%]"></input>
            </div>
            <div className="flex flex-col items-start">
              <label className="text-xl font-semibold">Username</label>
              <input type="text" className="outline-none bg-slate-200 rounded-md py-2 px-2 w-[90%]"></input>
            </div>
        </div>

        <div className="flex flex-col items-start w-full">
          <label className="text-xl font-semibold">Email</label>
          <input type="email" className="outline-none bg-slate-200 rounded-md py-2 px-2 w-[95%]"></input>
        </div>

        <div className="flex flex-col items-start w-full">
          <label className="text-xl font-semibold">Password</label>
          <input type="password" placeholder="+6 characters" className="outline-none bg-slate-200 rounded-md py-2 px-2 w-[95%]"></input>
        </div>

        <div className="flex flex-row w-full items-start">
        <span><input className="w-5 h-5" type="checkbox" /></span>
        <p className="text-xl">Creating an account means you're okay with our <span className="text-blue-600">Terms and Service
            ,Privacy Policy,</span>and our default <span className="text-blue-600">Notification Settings</span></p>

        </div>

        <div className="flex items-start my-4">
            <button className="font-semibold text-white bg-pink-500 hover:bg-pink-600 py-2 px-6 rounded-md"><Link to={"/welcome"}>Create Account</Link></button>
        </div>

        <div className="flex flex-col items-start">
          <p>This site is protected by reCAPTCHA and Google</p>
          <p><span className="text-blue-600">Privacy Policy</span> and <span className="text-blue-600">Terms of Service</span>apply</p>
        </div>
    </div>
  )
}

export default RegisterForm;