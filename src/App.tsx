import { AppRouter } from "./components/AppRouter/AppRouter";
import { Header } from "./components/Layout/widgets/Header/ui/Header";
import styles from "./style.module.css";

function App() {
  return (
    <div className={styles.App}>
            <Header />
            <AppRouter/>
    </div>
  );
}

export default App;
