import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="bg-[#6941C6] h-[72px] flex items-center">
      <div className="main-container text-white flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex justify-center items-center">
            <div className="">
              <img src="/images/paper 1.svg" alt="paper" />
            </div>
            <span className="text-[20px] w-[98px] font-bold ml-3">Stack</span>
          </div>
          <div className="gap-1">
            <span className="py-2 px-3 mr-1 ml-4 rounded-[6px] hover:bg-[#7F56D9] duration-300">
              <Link to={"/"}>Home</Link>
            </span>
            <span className="py-2 px-3 mr-1 rounded-[6px] hover:bg-[#7F56D9] duration-300">
              <Link to={"/users"}>Users</Link>
            </span>
            <span className="py-2 px-3 mr-1 rounded-[6px] hover:bg-[#7F56D9] duration-300">
              <Link to={"/projects"}>Projects</Link>
            </span>
            <span className="py-2 px-3 mr-1 rounded-[6px] hover:bg-[#7F56D9] duration-300">
              <Link to={"/tasks"}>Tasks</Link>
            </span>
            <span className="py-2 px-3 mr-1 rounded-[6px] hover:bg-[#7F56D9] duration-300">
              <Link to={"/reporting"}>Reporting</Link>
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex mr-4">
            <div className="mr-1 p-[10px]">
              <img src="/images/search.svg" alt="search" />
            </div>
            <div className="mr-1 p-[10px]">
              <img src="/images/settings.svg" alt="settings" />
            </div>
            <div className="mr-1 p-[10px]">
              <img src="/images/bell.svg" alt="bell" />
            </div>
          </div>
          <div>
            <Link to={"/dashboard"}>
              <img src="/images/Avatar.png" alt="Avatar" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
