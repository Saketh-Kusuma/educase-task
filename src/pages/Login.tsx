import { useState } from "react";
import { useStore } from "../store/store";
import { useNavigate } from "react-router";

const Login = () => {
        const labelStyle = "text-[13px] leading-[17px] text-primary absolute -top-2.5 px-1 left-2 bg-white font-rubik"
        const inputStyle = "w-full h-[40px] text-[14px] rounded-[6px] border-1 px-3 border-gray-300 font-rubik";
        const [email,setEmail] = useState('');
        const [password, setPassword] = useState('');
        const addUser = useStore((state) => state.addUser);
        const navigate = useNavigate();
        const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            addUser('Marry Doe', email);
            navigate('/account-settings');
        }
      return (
        <div className="flex flex-col items-start w-full h-full px-5 pt-8 gap-3.5">
            <h1 className="text-[28px] leading-9 font-medium font-rubik">
                Sign in to your PopX account
            </h1>
            <p className="text-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <form onSubmit={handleSubmit}
            className="mt-4.5 w-full flex flex-col gap-3.5">
                <div className="relative">
                <label className={labelStyle} htmlFor="email">
                    Email Address
                </label>
                <input id="email" className={inputStyle} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Enter Email Address"/>
                </div>
                <div className="relative">
                <label className={labelStyle} htmlFor="password">
                    Password
                </label>
                <input id="password" className={inputStyle} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Enter Password"/>
                </div>
                <button className="bg-primary text-white w-full h-[46px] rounded-[6px] text-[16px] font-rubik font-medium disabled:opacity-[.4] cursor-pointer disabled:cursor-not-allowed" disabled={email=='' || password=='' ? true : false} type="submit">
                    Login
                </button>
            </form>
        </div>
      )
}

export default Login