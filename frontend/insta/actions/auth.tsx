import { AnyAction, Dispatch } from "redux";
import { REGISTER_SUCCESS, REGISTER_FAIL, SET_AUTH_LOADING, REMOVE_AUTH_LOADING } from "./types";

const register = async (name: any, email: any, password: any, dispatch: Dispatch<AnyAction>) => {
  dispatch({
    type: SET_AUTH_LOADING
  })

  const body = JSON.stringify({
    name,
    email,
    password,
  })

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    })

    if (res.status === 200) {
      dispatch({
        type: REGISTER_SUCCESS
      })
    } else {
      dispatch({
        type: REGISTER_FAIL,
      })
    }

  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    })
  }

  dispatch({
    type: REMOVE_AUTH_LOADING,
  })

}

export default register

