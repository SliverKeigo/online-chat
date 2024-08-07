import Message from "./Message.tsx";
import SentMessage from "./SentMessage.tsx";

export const Messages = () => {
  return (
    <div className={"bg-indigo-50 flex-1 overflow-y-auto p-2.5"}>
      <Message />
      <SentMessage />
      <SentMessage />
      <Message />
    </div>
  );
};