import React, {useEffect} from 'react';
import Aos from "aos"
import {Routes, Route} from "react-router-dom";
import Home1 from "./component/page/home1.jsx";
import Darslar2 from "./component/page/darslar2.jsx";
import Aql3 from "./component/page/aql3.jsx";
import Talab4 from "./component/page/talab4.jsx";
import Angren5 from "./component/page/angren5.jsx";
import BizHaqimizda from "./component/page/BizHaqimizda.jsx";
import Darslar from "./component/page/Darslar.jsx";
import Nav01 from "./component/page/nav01.jsx";

function App(props) {

    useEffect(() => {
        Aos.init()
    }, []);
    return (
        <div >
            <Nav01/>
            <Routes>
                <Route path="/biz" element={<BizHaqimizda/>}/>
                <Route path="/dars" element={<Darslar/>}/>
                <Route path="/" element={<Home1/>}/>
                <Route path="/Darslar2" element={<Darslar2/>}/>
                <Route path="/Aql3" element={<Aql3/>}/>
                <Route path="/Talab4" element={<Talab4/>}/>
                <Route path="/Angren5" element={<Angren5/>}/>
            </Routes>

        </div>
    );
}

export default App;