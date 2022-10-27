import React from 'react'
import './LandingPage.css'
export default function LandingPage({user, setUser}) {

// screenright is logo on the top left 
// add regular typing photo 

  return (
    <div className='landing-page-container'>
    <div>
        <div className='sect'>
          <div className='site'>
            <div>
            <h1 className='site-title'></h1>
        </div>
        <h2 className='site_subtitle'>ARE YOU A WRITER?</h2>
        <h1>STAND OUT</h1>
        <p>Create your writer profile to track the performance of your submissions to writing programs while highlighting your successes.</p>
        <div>This is how industry professionals find you.</div>
        <div className='site_box_link'>
        <button className='btn btn--width'>Submit</button>
        </div>
        <h2>We work to be good stewards of your resources by curating the most impactful writing programs and coverage services, so you can focus on your craft and your career.</h2>
        <div>
          <img className='site_img' src="https://image.ibb.co/c7grYb/image3015.png"></img>
        </div>
        </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
    </div>
  )
}
 