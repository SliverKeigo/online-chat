// src/components/Navbar.tsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={"flex items-center h-12 bg-indigo-400 dark:bg-indigo-600 p-3 justify-between text-gray-50"}>
      <span className={"font-bold"}>Ori Chat</span>
        <div className={"flex gap-2.5"}>
          <img className={"bg-gray-50 h-6 w-6 rounded-2xl object-cover"} src={"https://avatars.githubusercontent.com/u/112426853?v=4"} alt={""}/>
          <span>Keigo</span>
          <button className="bg-gray-500 dark:bg-gray-700  text-gray-50 text-sm border-none">
            <Link to="/login" >logout</Link>
          </button>
        </div>
    </div>
  );
};

export default Navbar;