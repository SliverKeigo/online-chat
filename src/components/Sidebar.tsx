import Navbar from "./Navbar.tsx";
import Search from "./Search.tsx";
import Chats from "./Chats.tsx";

const Sidebar = () => {
  return (
    <div className={"flex-[2_2_0%] bg-indigo-200"}>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;