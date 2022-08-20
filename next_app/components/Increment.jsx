import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

import { increment } from "../redux/slices/postSlice";

const Increment = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(increment())}>Add User</Button>
    </div>
  );
};

export default Increment;
