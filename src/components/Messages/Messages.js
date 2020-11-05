import React from "react";
import { Message } from "./Messages.styles";
const Messages = ({ children }) => {
  return <Message>{children}</Message>;
};

export default Messages;
