import "./styles/index.css";
import { AppRouter } from "./providers/router";
// import { Header } from 'src/widgets/Header/ui/Header'
// import { classNames } from "src/shared/lib/classNames/classNames";

function App() {
    return (
        // <div className={classNames('app', {}, [])}>
        //  {/* <Header /> */}
        <>
            <AppRouter/>
        </>
        // </div>
    );
}

export default App;
