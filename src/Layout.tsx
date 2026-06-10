import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col primary-bg mx-auto w-[375px] h-[812px] border-1 border-black">
        <Outlet/>
    </div>
  );
}

export default Layout