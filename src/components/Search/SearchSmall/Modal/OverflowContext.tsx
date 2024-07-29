import { createContext, useContext, useState } from "react";

const OverflowContext = createContext({
  isOverflowHidden: false,
  setOverflowHidden: (hidden: boolean) => {},
});

export const OverflowProvider: React.FC = ({ children }) => {
  const [isOverflowHidden, setOverflowHidden] = useState(false);

  return (
    <OverflowContext.Provider value={{ isOverflowHidden, setOverflowHidden }}>
      {children}
    </OverflowContext.Provider>
  );
};

export const useOverflow = () => useContext(OverflowContext);
