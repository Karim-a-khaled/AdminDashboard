import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Teams from './pages/teams/Teams.jsx';
import Contacts from './pages/contacts/Contacts.jsx';
import Invoices from './pages/Invoices/Invoices.jsx';
import Form from './pages/form/Form.jsx';
import Calendar from './pages/calendar/Calendar.jsx';
import Faq from './pages/faq/Faq.jsx';
import PieChart from './pages/PieChart/PieChart.jsx';
import LineChart from './pages/lineChart/LineChart.jsx';
import ScholarshipApproval from './pages/ScholarshipApproval/ScholarshipApproval.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<Dashboard/>}/>
      <Route index path="/scholarships-approval" element={<ScholarshipApproval/>}/>
      <Route path="team" element={<Teams/>}/>
      <Route path="contacts" element={<Contacts/>}/>
      <Route path="invoices" element={<Invoices/>}/>
      <Route path="form" element={<Form/>}/>
       <Route path="calendar" element={<Calendar/>}/> 
      <Route path="faq" element={<Faq/>}/>
      <Route path="pie" element={<PieChart/>}/>
      <Route path="line" element={<LineChart/>}/> 
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);