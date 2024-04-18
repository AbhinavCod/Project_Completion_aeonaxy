import SignUpForm from "../components/SignUpForm";
import image from "../../public/images/img-a9juSuGpTC2yU1tvr4Jue.jpeg"

const Home = () => {
  return (
    <div className="grid md:grid-cols-[2fr_2fr]">
        <div>
            <div>
                <figure>
                    <img src={image} alt="" />
                </figure>
            </div>
        </div>
        <div>
            <SignUpForm />
        </div>
    </div>
  )
}

export default Home;