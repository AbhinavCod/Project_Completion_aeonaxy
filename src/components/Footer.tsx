import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../../public/images/logo-color.png";
import { faTwitter,faInstagram,faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col mt-16 py-8 bg-slate-100 gap-4">

        <div className="flex flex-col md:flex-row lg:flex-row gap-2 border-b-2">
            <div className="flex flex-col gap-4 w-[25%]">
                <img src={image} className="h-48 mt-10 w-48 mx-auto bg-slate-100" alt="" />
                <p className="text-gray-500 text-xl mx-auto px-10">Dribble is the world's leading community for creatives to share, grow, and get hired.</p>
              <div className="flex flex-row gap-2 my-4 justify-evenly">
                <FontAwesomeIcon style={{fontSize:"2rem"}} icon={faTwitter} />
                <FontAwesomeIcon style={{fontSize:"2rem"}} icon={faInstagram} />
                <FontAwesomeIcon style={{fontSize:"2rem"}} icon={faFacebook} />
              </div>
            </div>

            <div className="flex flex-col gap-2 items-start w-[15%]">
                <h1 className="text-xl font-bold">For Designers</h1>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Go Pro!</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Explore design work</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Design blog</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Overtime podcast</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Playoffs</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Weekly warmup</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Refer a friend</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Code of conduct</Link>
                  
            </div>

            <div className="flex flex-col gap-2 items-start w-[15%]">
                <h1 className="text-xl font-bold">Hire Designers</h1>
                <Link className="text-xl font-semibold text-gray-500" to={"/"}>Post a job opening</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Post a freelance project</Link>
                  <Link className="text-xl font-semibold text-gray-900" to={"/"}>Searh for designers</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Brands</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Advertise with us</Link>
            </div>

            <div className="flex flex-col gap-2 items-start w-[15%]">
                <h1 className="text-xl font-bold">Company</h1>
                <Link className="text-xl font-semibold text-gray-500" to={"/"}>About</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Careers</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Support</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Media Kit</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Testimonials</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>API</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Terms of service</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Privacy Policy</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Cookie Policy</Link>
            </div>

            <div className="flex flex-col gap-2 items-start w-[15%]">
                <h1 className="text-xl font-bold">Directories</h1>
                <Link className="text-xl font-semibold text-gray-500" to={"/"}>Design Jobs</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Designers for hire</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Freelance designers</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Tags</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Places</Link>
                  <Link className="text-xl font-semibold text-gray-900" to={"/"}>Designn assets</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Dribble Marketplace</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Creative Market</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Fontspring</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Fontsquirrel</Link>
            </div>

            <div className="flex flex-col gap-2 items-start w-[15%]">
                <h1 className="text-xl font-bold">Design Resources</h1>
                <Link className="text-xl font-semibold text-gray-500" to={"/"}>Freelancing</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Design Hiring</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Design Portfolio</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Design Education</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Creative Process</Link>
                  <Link className="text-xl font-semibold text-gray-500" to={"/"}>Design Industry Trends</Link>
            </div>

        </div>


        <div className="flex flex-col md:flex-row lg:flex-row justify-between">
          <h1 className="text-xl text-gray-500 tracking-tight px-6"><span><FontAwesomeIcon icon={faCopyright} /></span>2023 Dribble. All rights reserved</h1>
          <h1 className="text-xl text-gray-500 tracking-tight px-6"><span className="text-xl text-gray-900">20,501,853 </span>shots dribbled</h1>
        </div>

    </div>
  )
}

export default Footer;