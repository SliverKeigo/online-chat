// src/components/SentMessage.tsx
const SentMessage = () => {
  return (
    <div className={"flex gap-5 mb-5 justify-end"}>
      <div className={"max-w-4/5 flex flex-col gap-2.5 items-end"}>
        <p className={"bg-blue-400 dark:bg-blue-600 text-white py-2.5 px-5 rounded-br-xl rounded-l-xl"}>Hello</p>
        <img className={"w-1/2"} src={"https://avatars.githubusercontent.com/u/112426853?v=4"} />
      </div>
      <div className={"flex flex-col text-gray-500 dark:text-gray-400 font-light items-end"}>
        <img className={"w-10 h-10 object-cover rounded-3xl"} src={"https://avatars.githubusercontent.com/u/112426853?v=4"} />
        <span>just now</span>
      </div>
    </div>
  );
};

export default SentMessage;