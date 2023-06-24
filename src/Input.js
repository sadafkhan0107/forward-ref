// export const Input = ({ ref, placeholder }) => {
//   return <input ref={ref} placeholder={placeholder} />;
// };
import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  return <input ref={ref} placeholder={props.placeholder} />;
});
