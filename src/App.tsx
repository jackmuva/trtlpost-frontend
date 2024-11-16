import './App.css'
import Layout from "@/components/Layout.tsx";
import Home from "@/pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SearchPage} from "@/pages/SearchPage";
import {AboutPage} from "@/pages/About";

function App() {
  return (
    <>
        <BrowserRouter>
            <Layout>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/search"} element={<SearchPage/>}/>
                        <Route path={"/about"} element={<AboutPage/>}/>
                    </Routes>
            </Layout>
        </BrowserRouter>
    </>
  )
}

export default App
