import { useNavigate } from "react-router"

const Home = () => {
    const buttonStyles = "rounded-[6px] text-[16px] w-full h-[46px] font-rubik font-medium cursor-pointer"
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-start pb-8 px-5 justify-end w-full h-full px-5">
        <h1 className="text-[28px] leading-9 font-medium font-rubik">
            Welcome to PopX
        </h1>
        <p className="text-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="flex flex-col items-center justify-center w-full h-max pb-12 mt-7.5 gap-2.5">
            <button onClick={()=>{navigate('/create-account')}}className={`${buttonStyles} bg-primary text-white `}>
                Create Account
            </button>
             <button onClick={()=>{navigate('/login')}} className={`${buttonStyles} bg-secondary text-black `}>
                Already Registered? Login
            </button>
        </div>
    </div>
  )
}

export default Home