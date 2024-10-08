import React, { useEffect } from 'react'
// import BarCharts from '../MyComponents/BarCharts';
import Bar from "../scenes/bar";
import Pie from '../scenes/pie';
import Line from '../scenes/line';
import Dashboard from '../scenes/dashboard';

import '../styles/LoginPage.css'; 
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import Topbar from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/global/Topbar.jsx";
// import Sidebar from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/global/Sidebar.jsx";
// import dashboard from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/dashboard/index.jsx";
// import Team from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/team/index.jsx";
// import Invoices from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/invoices/index.jsx";
// import Contacts from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/contacts/index.jsx";
// import bar from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/bar/index.jsx";
// import Form from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/form/index.jsx";
// import line from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/line/index.jsx";
// import pie from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/pie/index.jsx";
// import FAQ from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/faq/index.jsx";
// import Geography from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/geography/index.jsx";
import Topbar from '../scenes/global/Topbar'
import Sidebar from '../scenes/global/Sidebar'
import dashboard from '../scenes/dashboard/index'
import Team from '../scenes/team/index'
import Invoices from '../scenes/invoices/index'
import Contacts from '../scenes/contacts/index'
import bar from '../scenes/bar/index'
import Form from '../scenes/form/index'
import line from '../scenes/line/index'
import pie from '../scenes/pie/index'
import FAQ from '../scenes/faq/index'
import Geography from '../scenes/geography/index'



import { CssBaseline, ThemeProvider } from "@mui/material";
//import { ColorModeContext, useMode } from "/Users/kaustubhsagale/Desktop/carproject/src/theme/theme.jsx";
//import Calendar from "/Users/kaustubhsagale/Desktop/carproject/src/scenes/calendar/calendar.jsx";
import Calendar from '../scenes/calendar/calendar'
import { ColorModeContext, useMode } from '../theme/theme'

import getContact from './getcontact';
const WelcomePage = ({ username }) => {
  
  
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    const nevigate= useNavigate();
    const [contactsData, setContactsData] = useState([]);

function fetchinfo() {
    fetch('http://localhost:5001/getContact')
  .then(response => {
    console.log(response)
    // Check if the response is successful (status 200-299)
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  //   // Parse the JSON response
  //   return response.json();
  // })
  // .then(data => {
  //   // Handle the JSON data
  //   console.log(data);
  })
  .then(data => {
    setContactsData(data);
})
  .catch(error => {
    // Handle errors
    console.error('There was a problem with the fetch operation:', error);
  });
}
useEffect(()=> {
  fetchinfo()
},[fetchinfo])



function DataComponent() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);
  useEffect(()=> {
    fetchinfo()
  },[fetchinfo])
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5001/getContact');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    
    <div>
      {data.map(item => (
        <getContact key={item.id} data={item} />
      ))}
    </div>
  );
}







// const WelcomePage = ({ username }) => {
  return (
    
   
    <div>
<ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
        
      
      </ThemeProvider>
    </ColorModeContext.Provider>
    </div>
  );
};

export default WelcomePage;
