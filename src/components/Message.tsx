// src/components/Message.tsx
const Message = () => {
  return (
    <div className={"flex gap-5 mb-5"}>
      <div className={"flex flex-col text-gray-500 dark:text-gray-400 font-light items-start"}>
        <img className={"w-10 h-10 object-cover rounded-3xl mb-1"}
             src={"https://avatars.githubusercontent.com/u/112426853?v=4"}/>
        <span className={""}>just now</span>
      </div>
      <div className={"max-w-4/5 flex flex-col gap-2.5"}>
        <p
          className={"bg-gray-200 dark:bg-gray-700 py-2.5 px-5 rounded-bl-xl rounded-r-xl max-w-max text-black dark:text-white"}>Hello</p>
        <img className={"w-1/2"} src={"https://avatars.githubusercontent.com/u/112426853?v=4"}/>
      </div>
    </div>
  );
};

export default Message;