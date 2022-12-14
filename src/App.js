import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import Tooltip from '@mui/material/Tooltip';


import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Home,Calendar,PatientHistory,Profile,HealthReport } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import Consultations from './appointments/Consultations';
import NewAppointments from './appointments/NewAppointments';
import FollowupAppointments from './appointments/FollowupAppointments';
import Payment from './appointments/Payment';
import UrgentMeetings from './UrgentMeetings';
import SeeAllNotification from './pages/SeeAllNotification';
import Prescription from './Prescription/Prescription';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <Tooltip
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </Tooltip>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
         

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Home />)} />
                <Route path="/Home" element={(<Home />)} />

                {/* pages  */}
              
                <Route path="/PatientHistory" element={< PatientHistory />} />
                <Route path="/HealthReport" element={<HealthReport />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Calendar" element={<Calendar />} />

                <Route path="/Consultations" element={<Consultations/>} />
                <Route path="/newAppointments" element={<NewAppointments />} />

               <Route path="/followUpAppointments"  element={<FollowupAppointments />} /> 
               <Route path="/Payment"  element={<Payment />} />

               <Route path="/urgent_meetings"  element={<UrgentMeetings />} />      

              <Route path="/See%20all%20notifications" element={<SeeAllNotification />} />
              {/* other pages */}

              <Route path="/prescription"  element={<Prescription />} />      


              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;