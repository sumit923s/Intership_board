import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/Internship.css';
import SE1 from '../images/SE.webp';
import Backend from '../images/backend-is.png';
import Flutter from '../images/flutter.png';
import Frontend from '../images/front-end.png';
import FullStack from '../images/fullstack.webp';
import SE2 from '../images/software_engineer.jpeg.webp';
import { Link } from 'react-router-dom';
 
export default function internship(props) {

const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
      };
  return (
    <div className='internship'>
        <div className='internship-child'>
        <img className='img' src={FullStack} alt="" />
        <div className='div'>6th Month Internship</div>
        <h3 className='heading'>IBM Internship</h3>
        <p className='para'>FullStack Web Developer</p>
        <Link 
         to="#"
         onClick={() => openInNewTab("https://www.glassdoor.co.in/Jobs/IBM-Web-Development-Intern-Jobs-EI_IE354.0,3_KO4,26.htm?filter.countryId=115")}> 
        <button className='btn-know-more'>Apply Now</button>
        </Link>
        </div>

        <div className='internship-child'>
        <img className='img' src={Flutter} alt="" />
        <div className='div'>6 Month Internship</div>
        <h3 className='heading'>Microsoft Intership</h3>
        <p className='para'>Flutter Development</p>
        <Link 
         to="#"
         onClick={() => openInNewTab("https://www.google.com/search?q=microsoft+internship+flutter+developer&oq=microsoft+internship+flutter+developer&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRifBdIBCjM3MzQwajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwi-5r2ZudWDAxWgk1YBHZOgDJgQkd0GegQIChAB#fpstate=tldetail&htivrt=jobs&htiq=microsoft+internship+flutter+developer&htidocid=bB9vG4jLyXWnNvCuAAAAAA%3D%3D&sxsrf=ACQVn082b4lFWdJWKRCKuxZJ3BtTSkmppw:1704979931828")}> 
        <button className='btn-know-more'>Apply Now</button>
        </Link>
        </div>

        <div className='internship-child'>
            <img className='img' src={SE1} alt="" />
            <div className='div'>4 Month Internship</div>
            <h3 className='heading'>Google Internship</h3>
            <p className='para'>Software Engineer</p>
            <Link 
         to="#"
         onClick={() => openInNewTab("https://www.google.com/search?q=google+job+site+career+home+internship&sca_esv=597516434&sxsrf=ACQVn0_iyaRL7tCCxOFQJgPS_tSFIcCHJQ:1704979772306&ei=PO2fZfGcEuyO2roPr5-csAk&uact=5&oq=google+job+site+career+home+internship&gs_lp=Egxnd3Mtd2l6LXNlcnAiJmdvb2dsZSBqb2Igc2l0ZSBjYXJlZXIgaG9tZSBpbnRlcm5zaGlwMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRifBTIFECEYnwVI7BhQuwNY1hZwAXgBkAEAmAHuAqAB_BiqAQUyLTkuMrgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgUQIRiSA8ICBBAhGBXCAgcQIRgKGKAB4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp&ibp=htl;jobs&sa=X&ved=2ahUKEwjikLXYuNWDAxVAklYBHQlFBZoQkd0GegQIChAB#fpstate=tldetail&htivrt=jobs&htiq=google+job+site+career+home+internship&htidocid=B07a921k-hoiWF3IAAAAAA%3D%3D")}> 
        <button className='btn-know-more'>Apply Now</button>
        </Link>
        </div>

        <div className='internship-child'>
            <img className='img' src={SE2} alt="" />
            <div className='div'>6 Month Internship</div>
            <h3 className='heading'>Apple Internship</h3>
            <p className='para'>Software Engineer</p>
            <Link 
         to="#"
         onClick={() => openInNewTab("https://jobs.apple.com/en-in/details/200480063/software-engineering-internships")}> 
        <button className='btn-know-more'>Apply Now</button>
        </Link>
        </div>

        <div className='internship-child'>
            <img className='img' src={Frontend} alt="" />
            <div className='div'>8 Month Internship</div>
            <h3 className='heading'>Deloite Internship</h3>
            <p className='para'>Front-end Developer</p>
            <Link 
         to="#"
         onClick={() => openInNewTab("https://jobsus.deloitte.com/front-end-developer/jobs-in/")}> 
        <button className='btn-know-more'>Apply Now</button>
        </Link>
        </div>
        <div className='internship-child'>
            <img className='img' src={Backend} alt="" />
            <div className='div'>6 Month Internship</div>
            <h3 className='heading'>Tesla Internship</h3>
            <p className='para'>Back-end Developer</p>
            <Link 
         to="#"
         onClick={() => openInNewTab("https://www.tesla.com/careers/internships")}> 
        <button className='btn-know-more'>Apply Now</button>
        </Link>
        </div>
        
        {/* <div className='internship-child'>
            <div className='div'>6 Month Internship</div>
            <h3 className='heading'>Tesla Internship</h3>
            <p className='para'>AI Engineer</p>
            <button className='btn-know-more'>Apply Now</button>
        </div> */}
    </div>
  );
}
