import axios from "axios";
// import {useDispatch} from "react-redux";
export const loginCall = async (userCredential, dispatch) => {
//    const dispatch=useDispatch();
  dispatch({type: "LOGIN_START"});
  try {
    const res = await axios.post("http://localhost:8800/api/auth/login", userCredential);
    console.log(res);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
  } catch (err) {
    console.log(err);
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

