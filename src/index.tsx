import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App";


const container = document.getElementById('root');

if (!container) {
    throw new Error("Не удалось найти контейнер root. НЕ удалось вмонтировать react приложение")
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
         <App />
    </BrowserRouter>,
)