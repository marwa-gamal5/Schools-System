import styles from './Overview.module.css';
import Frame1 from '../../assets/Frame1.png';
import Frame2 from '../../assets/Frame2.png';
import Frame3 from '../../assets/Frame3.png';
import Frame4 from '../../assets/Frame4.png';
import { render } from "react-dom";
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
 
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



const percentage =55;
function Overview() {
    const [data, setData] = useState([]);

    useEffect(() => {
      asyncFetch();
    }, []);
  
    const asyncFetch = () => {
      fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };
    const config = {
      data,
      xField: 'timePeriod',
      yField: 'value',
      xAxis: {
        range: [0, 1],
      },
    };
    return (
        <>
       
       <div className={`${styles.sectionone}  `}  style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: "247px" }} >
       <div className='row d-flex row justify-content-around '>
<div className='col-10 d-flex  justify-content-around mt-3 '>
<div className={`${styles.Square1} col-3 `}>
<div className='d-flex justify-content-between align-items-center'>

    <div className=''>
        <div className={`${styles.p1} mt-3`} >4</div>
        <div className={`${styles.p2} `}>Sons</div>

    </div>
    <div className='mt-3'>
    <img  src={Frame1} alt="icon" />
    </div>
</div>
</div>

<div className={`${styles.Square2} col-3 ms-5`}>
<div className='d-flex justify-content-between align-items-center'>

    <div className=''>
        <div className={`${styles.p1} mt-3`}>12</div>
        <div className={`${styles.p2} `}>Bills</div>

    </div>
    <div className='mt-3'>
    <img  src={Frame3} alt="icon" />
    </div>
</div>
</div>
<div className={`${styles.Square3} col-3 ms-5`}>
<div className='d-flex justify-content-between align-items-center'>

    <div className=''>
        <div className={`${styles.p1} mt-lg-0 mt-xl-3 mt-md-0 mt-sm-0 mt-0`}>5</div>
        <div className={`${styles.p2} `}>Paid Bills</div>

    </div>
    <div className='mt-3'>
    <img  src={Frame2} alt="icon" />
    </div>
</div>
</div>
<div className={`${styles.Square4} col-3 ms-5`}>
<div className='d-flex justify-content-between align-items-center'>

    <div className=''>
        <div className={`${styles.p1} mt-lg-0 mt-xl-3 mt-md-0 mt-sm-0 mt-0`}>7</div>
        <div className={`${styles.p2} `}>Unpaid Bills</div>

    </div>
    <div className='mt-3'>
    <img  src={Frame4} alt="icon" />
    </div>
</div>
</div>
</div>
 </div>
 <div className='row d-flex row justify-content-around  '>
    <div className='col-8 '>
    {/* <img src={Group}  alt="icon" /> */}
    <div className={`${styles.Areachart} mt-5`}>
        <p className={`${styles.p6} `}>Total Distributions</p>
    <Area {...config} />
    </div>

    </div>
    <div className='col-3 mt-5 ms-2'>
<div className={`${styles.chart}`}>
<p className={`${styles.p3}`}>Customers</p>
<div className='row'>
    <div className='col-6'>
    <CircularProgressbar
    value={percentage}
    text={`${percentage}%`}
    styles={{
        path: {
            // Set the color to #FF9800
            stroke: '#0951FE'
        },
        trail: {
            // Set the trail color (background) if needed
            stroke: '#E2E2E2'
        },
        text: {
            // Set the text color if needed
            fill: '#0951FE',

            fontWeight: 'bold'
        }
    }}
/>
<p className={`${styles.p5} mt-3 ms-1`}> Current Customers</p>
</div>
<div className='col-6'>
<CircularProgressbar
    value={percentage}
    text={`${percentage}%`}
    styles={{
        path: {
            // Set the color to #FF9800
            stroke: '#FF9800'
        },
        trail: {
            // Set the trail color (background) if needed
            stroke: '#E2E2E2'
        },
        text: {
            // Set the text color if needed
            fill: '#FF9800',

            fontWeight: 'bold'
        }
    }}
/>
<p className={`${styles.p5} mt-3 ms-1`}> New Customers</p>

</div>
</div>
<div className='row'>
    <div className='col-6'>
    <CircularProgressbar
    value={percentage}
    text={`${percentage}%`}
    styles={{
        path: {
            // Set the color to #FF9800
            stroke: '#28C794'
        },
        trail: {
            // Set the trail color (background) if needed
            stroke: '#E2E2E2'
        },
        text: {
            // Set the text color if needed
            fill: '#28C794',

            fontWeight: 'bold'
        }
    }}

/>
<p className={`${styles.p5} mt-3 ms-1`}> Target Customers</p>

</div>
<div className='col-6 '>
<CircularProgressbar
    value={percentage}
    text={`${percentage}%`}
    styles={{
        path: {
            // Set the color to #FF9800
            stroke: '#D91C1F'
        },
        trail: {
            // Set the trail color (background) if needed
            stroke: '#E2E2E2'
        },
        text: {
            // Set the text color if needed
            fill: '#D91C1F',

            fontWeight: 'bold'
        }
    }}
/>
<p className={`${styles.p5} mt-3 ms-1`}> Retarget Customers</p>

</div>
</div>
    
</div>
</div>
    </div>
        </div>
       

     
        </>
    );
}

export default Overview;
