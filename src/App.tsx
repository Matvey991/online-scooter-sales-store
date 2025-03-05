import { AppRouter } from "./components/AppRouter/AppRouter";
import styles from "./style.module.css";
import { CatalogHeader } from "./widgets/Header/ui/CatalogHeader/CatalogHeader";
import { Header } from "./widgets/Header/ui/Header";
import { SearchHeader } from "./widgets/Header/ui/SearchHeader/SearchHeader";

function App() {
    return (
        <div className={styles.App}>
            <SearchHeader/>
            <CatalogHeader/>
            <Header />
            <AppRouter/>
        </div>
    );
}

export default App;
