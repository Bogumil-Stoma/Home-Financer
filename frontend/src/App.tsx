import {BrowserRouter, Route, Routes} from "react-router-dom";
import Shell from "./components/layout/Shell.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Shell/>}>
                    <Route path="budget" element={<div/>}/>
                    <Route path="investments" element={<div/>}/>
                    <Route path="markets" element={<div/>}/>
                    <Route path="*" element={<div>404</div>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
