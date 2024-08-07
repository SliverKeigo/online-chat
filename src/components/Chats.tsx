// src/components/Chats.tsx
const Chats = () => {
  return (
    <div className={""}>
      <div className={"flex p-3 items-center gap-2.5 text-gray-900 dark:text-gray-100 cursor-pointer hover:bg-indigo-300 dark:hover:bg-indigo-700"}>
        <img className={"h-12 w-12 rounded-3xl object-cover"} src={"https://avatars.githubusercontent.com/u/112426853?v=4"}/>
        <div className={""}>
          <span className={"text-xl font-medium"}>Keigo</span>
          <p className={"text-sm text-gray-500 dark:text-gray-700"}> Hello </p>
        </div>
      </div>
    </div>
  );
};

export default Chats;