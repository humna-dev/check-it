import { useContext, useEffect } from "react";
import Admin from "./Admin";
import User from "./User";
import Guest from "./Guest";
import { GlobalContext } from "./Context/context";
import { decodeToken } from "react-jwt";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";

const ComponentByRoles = {
  admin: Admin,
  user: User,
  guest: Guest,
};

const getUserRole = (params) =>
  ComponentByRoles[params] || ComponentByRoles["guest"];

export default function App() {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000
    });
  }, []);

  const decodeUser = (token) => {
    if (!token) {
      return undefined;
    } else {
      const res = decodeToken(token);
      return res?.role;
    }
  };

  const currentToken = decodeUser(state.token);
  const CurrentUser = getUserRole(currentToken);
  return <CurrentUser />;
}
