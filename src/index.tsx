import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

render(
    <BrowserRouter>
         <App />
    </BrowserRouter>,
    //@ts-ignore
    document.getElementById('root'),
);
