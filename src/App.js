import { Footer } from "./components/Layout/widgets/Footer/Footer";
import { Header } from "./components/Layout/widgets/Header/Header";
import { Main } from "./components/Layout/widgets/Main/Main";
import { SectionScooter } from "./components/Layout/widgets/Main/SectionScooters/SectionScooter";
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
