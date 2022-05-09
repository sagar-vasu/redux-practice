import React, { useState } from "react";
import { login } from "../redux/actions/authActions";
import { useSelector, useDispatch } from "react-redux";

function Login() {
    
  const auth = useSelector((state) => console.log(state.AuthReducer,'====>here'));
  const dispatch = useDispatch();
  const [state,setState]  = useState({
      email:"sa@g.com",
      password:'123456'
  })

  return <div>

      <button onClick={() => dispatch(login(state))}>Click Me</button>
  </div>;
}

export default Login;
