import React from "react";
import NavigationItem from "./NavigationItem";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Store/store";
import { login, logout } from "../../Store/slices/userSlice";

interface ListedNavigation {
  id: number;
  name: string;
  link: string;
}

const navigationList: ListedNavigation[] = [
  {
    id: 1,
    name: `ICON`,
    link: `/`,
  },
  {
    id: 2,
    name: `Moje Prace`,
    link: `/moje-prace`,
  },
  {
    id: 3,
    name: `O Mnie`,
    link: `/o-mnie`,
  },
  {
    id: 4,
    name: `Umów spotkanie`,
    link: `/umow-sie`,
  },
  {
    id: 5,
    name: `Zaloguj się`,
    link: `/zaloguj-sie`,
  },
  {
    id: 6,
    name: `Wyloguj się`,
    link: ``,
  },
  {
    id: 7,
    name: `Twoje konto`,
    link: `/twoje-konto`,
  },
];

const NavigationList: React.FC = () => {
  const location = useLocation();
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  const dispatch = useDispatch();
  const handleUserState = (val: boolean) => {
    if (val) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  };
  console.log(isAuthenticated);
  const renderedNavigationList = navigationList.map((navigation) => {
    if (
      (navigation.name === "Twoje konto" ||
        navigation.name === "Wyloguj się") &&
      !isAuthenticated
    ) {
      return null;
    }
    if (navigation.name === "Zaloguj się" && isAuthenticated) {
      return null;
    }
    return (
      <NavigationItem
        key={navigation.id}
        linkName={navigation.name}
        link={navigation.link}
        active={location.pathname === navigation.link}
      />
    );
  });

  return (
    <div className="fixed bg-slate-100 w-full top-0 flex justify-center flex-row gap-x-8 font-poppins text-stone-600 font-bold">
      {renderedNavigationList}
    </div>
  );
};

export default NavigationList;
