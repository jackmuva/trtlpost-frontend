import './App.css'
import Layout from "@/components/Layout.tsx";
import Home from "@/pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SearchPage} from "@/pages/SearchPage";
import {AboutPage} from "@/pages/About";
import {LoginPage} from "@/pages/Login";

function App() {
  return (
    <>
        <BrowserRouter>
            <Layout>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/search"} element={<SearchPage/>}/>
                        <Route path={"/about"} element={<AboutPage/>}/>
                        <Route path={"/login"} element={<LoginPage/>}/>
                    </Routes>
            </Layout>
        </BrowserRouter>
    </>
  )
}

export default App
