import Home from "./pages/home/Home";
import Topbar from "./topbar/Topbar";
import AboutUs from "./pages/aboutus/AboutUs";
import ApplyPage from "./pages/apply/Apply";
import {Routes, Route} from 'react-router'

function App() {
	return (
		<>
		<Topbar />
		<Routes>
          <Route exact path="/" element={<Home/>}/>
          {/* <Route exact path="/home" element={<Home/>}/> */}
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/apply" element={<ApplyPage/>}/>
          {/* <Route exact path="/upcoming/:user" element={<Upcoming/>}/>
          <Route exact path="/record/:user" element={<Record/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>
		</>


	);
}

export default App;
