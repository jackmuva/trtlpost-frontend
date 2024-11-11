import './App.css'
import Layout from "@/components/Layout.tsx";
import Home from "@/pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SearchPage} from "@/pages/SearchPage";

function App() {
  return (
    <>
        <BrowserRouter>
            <Layout>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/search"} element={<SearchPage/>}/>
                    </Routes>
            </Layout>
        </BrowserRouter>
    </>
  )
}

export default App
