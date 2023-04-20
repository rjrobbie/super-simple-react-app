import React from 'react';
import "../styles/main-content.css";

function MainContent() {
  return (
    <div className='main-content'>
        <h1>Fun Facts About React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Wilke</li>
            <li>Has well over 100L stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
  )
}

export default MainContent