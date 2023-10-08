import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import {GlobalStyle} from "../style.ts";
import { DetailPost } from "./DetailPost/DetailPost.tsx";

export function Router(){
    return(
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/detalhe" element={<DetailPost />} />
            </Routes>
        </BrowserRouter>
    )
}