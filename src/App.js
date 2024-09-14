import Footer from './components/Footer/Footer';
import { Header } from './components/Layout/Header/Header';
import Main from './components/Layout/main/Main';
import Section from './components/Layout/section/Section';
import styles from './style.module.css'

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <Section/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
