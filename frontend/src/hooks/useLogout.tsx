import { useAuthContext } from "./useAuthContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
  };
  // dispatch user logout

  return { logout };
};

export default useLogout;
