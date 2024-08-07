import Sidebar from "../components/Sidebar.tsx";
import Chat from "../components/Chat.tsx";


const Home = () => {
    return (
        <div className={"bg-gray-300 h-screen flex items-center justify-center"}>
            <div className="border border-solid border-white rounded-lg flex w-2/3 h-4/5 overflow-hidden">
                <Sidebar />
                <Chat />
              </div>

        </div>
    )
}

export default Home