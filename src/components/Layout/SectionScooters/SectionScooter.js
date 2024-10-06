import { useEffect, useState } from "react";
import { getScooters } from "../../../helpers/api/api";
import { getLogit } from "../../../helpers/api/api";
import styles from "./SectionScooter.module.css";
import { SectionScooterItem } from "../../SectionScooterItem/SectionScooterItem";

export const SectionScooter = () => {
  const [state, setState] = useState(null);
  const [stateLogin, setStateLogin] = useState("");
  const [statePassword, setStatePassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    getScooters().then((res) => setState(res));
  }, []);

  const funcLogin = () => {
    try {
      getLogit({ username: stateLogin, password: statePassword }).then((res) =>
        console.log({ res })
      );
    } catch (error) {
      setError(true);
    }

    setStateLogin("");
    setStatePassword("");
  };

  return (
    <div>
      <input
        className={styles.inputLogin}
        value={stateLogin}
        onChange={(e) => setStateLogin(e.target.value)}
        placeholder="Введите логин"
      />
      <br />
      <input
        className={styles.inputPassword}
        value={statePassword}
        onChange={(e) => setStatePassword(e.target.value)}
        placeholder="Введите пароль"
      />
      {error ? <h1>Ошибка</h1> : null}
      <div className={styles.divBtnSend}>
        <button className={styles.btnSend} onClick={funcLogin}>
          Войти
        </button>
      </div>
      {state
        ? state.map((el) => <SectionScooterItem key={el.id} el={el} />)
        : null}
    </div>
  );
};
