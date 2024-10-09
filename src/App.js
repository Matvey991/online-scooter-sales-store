import Footer from "./components/Layout/Footer/Footer";
import { Header } from "./components/Layout/Header/Header";
import Main from "./components/Layout/main/Main";
import { SectionScooter } from "./components/Layout/SectionScooters/SectionScooter";
import styles from "./style.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <Footer />
      <SectionScooter />
    </div>
  );
}

export default App;
