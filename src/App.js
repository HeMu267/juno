import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Dashboard } from './Dashboard/Dashboard';
import './App.css';
import { Monitoring } from './Components/Monitoring';
import { useEffect, useState } from 'react';
import { CloseComponent } from './Components/CloseComponent';
function App() {
  const [closeAcc,setCloseAcc]=useState(false);
  const navigate=useNavigate();
  useEffect(()=>{
      navigate("/dashboard/Monitoring")
  },[]);
return(
  <div className='w-screen font-medium overflow-x-hidden flex min-h-screen relative bg-white'>
    <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="Monitoring" element={<Monitoring setCloseAcc={setCloseAcc}/>}></Route>
          <Route path="Overview" element={<Monitoring setCloseAcc={setCloseAcc}/>}></Route>
          <Route path='Onboarding' element={<Monitoring setCloseAcc={setCloseAcc}/>}></Route>
          <Route path='Flagging' element={<Monitoring setCloseAcc={setCloseAcc}/>}></Route>
          <Route path="UAR" element={<Monitoring setCloseAcc={setCloseAcc}/>}></Route>
          <Route path='Source-Of-Income' element={<Monitoring setCloseAcc={setCloseAcc}/>}></Route>
        </Route>
    </Routes>
    <div className={`w-screen flex items-center justify-center h-screen ${(closeAcc)?"visible":"invisible"} backdrop-blur-sm bg-white/10 absolute z-[200]`}>
        {
          closeAcc &&
          <CloseComponent setCloseAcc={setCloseAcc}/>
        }
      </div>
  </div>
)

}

export default App;
