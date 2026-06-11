import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col primary-bg mx-auto w-[375px] h-[812px] flex-shrink-0 flex-grow-0 overflow-hidden box-border">
      <Outlet />
    </div>
  );
};
export default Layout