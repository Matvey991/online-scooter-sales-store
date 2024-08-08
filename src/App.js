import { Header } from "./components/Header/Header";
import Main from "./components/main/Main";
import Section from "./components/section/Section";

import './style.module.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <Main/>
    </div>
  );
}

export default App;
