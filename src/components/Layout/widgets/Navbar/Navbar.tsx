import cls from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <div className={cls.links}>
          <a className={cls.link} href="/">
          Главная
          </a>
          /
          <a className={cls.link} href={"/"}>
          Каталог
          </a>
          /
          <a className={cls.link} href="/basket">
          Моя корзина
          </a>
        </div>
      );
};
