import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../Buttons";
import { getAuth, signOut } from "firebase/auth";

interface Props {
  linkName: string;
  link: string;
  active?: boolean;
  handleUserState: () => void;
}

const NavigationItem: React.FC<Props> = ({
  linkName,
  link,
  active,
  handleUserState,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(link);
    if (linkName === "Wyloguj się") {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          handleUserState();
        })
        .catch((error) => {});
    } else if (linkName === "Zaloguj się") {
      handleUserState();
    }
  };

  const isActive = location.pathname === link;

  return (
    <div className="group flex flex-col items-center">
      <Button onClick={handleClick} type="button" menu>
        {linkName}
      </Button>
      <div
        className={`w-0 ${
          isActive ? "w-full" : ""
        } w-0 group-hover:w-full border-b border-slate-400 duration-500`}
      ></div>
    </div>
  );
};

export default NavigationItem;
