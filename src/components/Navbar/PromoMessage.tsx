import React from "react";
import Message from "./Message";

interface PromoMessageProps {
  message: string;
}

const PromoMessage: React.FC<PromoMessageProps> = ({ message }) => {
  return (
    <div className="font-medium text-black text-xs absolute left-1/2 transform -translate-x-1/2 mt-31 hidden xl:block">
      <Message message={message} />
    </div>
  );
};

export default PromoMessage;
