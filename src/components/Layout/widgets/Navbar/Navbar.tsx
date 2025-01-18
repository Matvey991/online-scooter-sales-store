import { RoutePath } from "../../../routerConfig/routerConfig";
import cls from "./Navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={cls.links}>
          <Link className={cls.link} to={RoutePath.main}>
          Главная
          </Link>
          /
          <Link className={cls.link} to={RoutePath.main}>
          Каталог
          </Link>
          /
          <Link className={cls.link} to={RoutePath.basket}>
          Моя корзина
          </Link>
        </div>
      );
};
