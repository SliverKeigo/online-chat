// src/components/Input.tsx
import { FileAddOutlined, PictureOutlined } from "@ant-design/icons";

export const Input = () => {
  return (
    <div className={"h-14 bg-white p-3 flex items-center justify-between"}>
      <input className={"w-full border-none outline-none text-black text-xl placeholder-gray-500"} type={"text"} placeholder={"Type something"} />
      <div className={"flex items-center gap-2.5"}>
        <PictureOutlined className={"h-6 w-6 cursor-pointer text-gray-600"} />
        <input type={"file"} style={{ display: "none" }} id={"file"} />
        <label htmlFor={"file"}>
          <FileAddOutlined className={"h-6 w-6 cursor-pointer text-gray-600"} />
        </label>
        <button className={"border-none py-2.5 px-4 text-white bg-blue-500"}>Send</button>
      </div>
    </div>
  );
};