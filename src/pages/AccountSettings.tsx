import { useStore } from "../store/store"
import avatarImage from "../assets/avatar.png"
import camera from "../assets/camera-icon.png"
const AccountSettings = () => {
    const user = useStore((state) => state);
  return (
    <div className="flex flex-col items-start w-full h-full py-5">
        <div className="flex flex-col items-start w-full h-full gap-5">
            <h1 className="text-[18px] px-5 leading-[21px] font-rubik font-medium">Account Settings</h1>
        <div className="flex flex-col pt-8 w-full h-full bg-gray-100 gap-6">
            <div className="flex px-5 ">
                <div className="relative pe-5">
                    <img className="size-[76px]" src={avatarImage}/>
                    <img src={camera} className="absolute bottom-0.5 right-4"/>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-[15px] leading-[19px] font-medium font-rubik capitalize">{user.name}</h4>
                    <p className="text-[14px] leading-[19px] font-rubik lowercase">{user.email}</p>
                </div>
            </div>
            <div className="px-5">
                <p className="text-[14px] leading-[21px] opacity-[.6] font-rubik">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </p>
            </div>
        </div>
        </div>
       <span className="w-full border-t border-dashed border-t-gray-300 pb-8 h-max"></span>
    </div>
  )
}

export default AccountSettings