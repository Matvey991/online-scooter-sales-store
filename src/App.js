import { SectionScooter } from "./components/Layout/SectionScooters/SectionScooter";
import { Footer } from "./components/widgets/Footer/Footer";
import { Header } from "./components/widgets/Header/Header";
import { Main } from "./components/widgets/main/Main";
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
