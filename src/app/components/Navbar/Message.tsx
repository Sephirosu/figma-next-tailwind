import { MessageProps } from "@/types";

const Message: React.FC<MessageProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default Message;
