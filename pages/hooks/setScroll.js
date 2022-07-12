import { useState, useEffect } from "react";
export const SetScroll = (scroll) => {
  const [state, setState] = useState(0);
  useEffect(() => {
    setState(scroll);
  }, [scroll]);
  return state;
};
// const getScroll = () => {
//     return state;
//   };
