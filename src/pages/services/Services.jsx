import './services.css';
import * as React from 'react';
import Code from '@mui/icons-material/Code';
import Web from '@mui/icons-material/Web';
import Android from '@mui/icons-material/Android';
import IOS from '@mui/icons-material/PhoneIphone';
import ServiceComponent from '../../components/services/ServiceComponent';

function Services() {
    return (
     <div>
      <h1>Services</h1>
       <div className='container'>
      
        <div >
        <div className="row">
  <ServiceComponent icon = {Android} name = "Android App Development"></ServiceComponent>
  <ServiceComponent icon = {IOS} name = "React-Native App Development"></ServiceComponent>
  <ServiceComponent icon = {IOS} name = "Flutter App Development"></ServiceComponent>
  <ServiceComponent icon = {IOS} name = "Iphone App Development"></ServiceComponent>
  <ServiceComponent icon = {Web} name = "Web development Services"></ServiceComponent>
  <ServiceComponent icon = {Code} name = "Social Media Marketing"></ServiceComponent>
    </div>
      </div>
    </div>
     </div>
    )
}

export default Services