// src/components/Chat.tsx
import { CameraOutlined, EllipsisOutlined, UserAddOutlined } from "@ant-design/icons";
import { Messages } from "./Messages.tsx";
import { Input } from "./Input.tsx";

const Chat = () => {
  return (
    <div className={"flex-[3_3_0%] bg-gray-200 dark:bg-gray-900 flex flex-col"}>
      <div className={"h-12 bg-indigo-600 dark:bg-indigo-800 flex items-center justify-between p-2.5 text-white"}>
        <span>Keigo</span>
        <div className={"flex gap-3"}>
          <CameraOutlined className={"h-6 cursor-pointer"} />
          <UserAddOutlined className={"h-6 cursor-pointer"} />
          <EllipsisOutlined className={"h-6 cursor-pointer"} />
        </div>
      </div>
        <Messages />
        <Input />
    </div>
  );
};

export default Chat;