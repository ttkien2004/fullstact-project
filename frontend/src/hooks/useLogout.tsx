import { useAuthContext } from "./useAuthContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    localStorage.removeItem("user");
  };
  // dispatch user logout
  dispatch({
    type: "LOGOUT",
    payload: {
      email: "",
      token: "",
    },
  });

  return { logout };
};

export default useLogout;
