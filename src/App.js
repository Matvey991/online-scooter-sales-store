import { Header } from "./components/Header/Header";
import Main from "./components/main/Main";
import Section from "./components/section/Section";

import styles from './style.module.css'

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <Main/>
      <Section/>
    </div>
  );
}

export default App;
