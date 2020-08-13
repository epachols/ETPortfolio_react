import React, { useState, useEffect } from "react";
import Router from 'react-router-dom'
import { CopyOutlined } from '@ant-design/icons';


export default function Home() {
    return (
        <div style={{padding: 24}}>
            <h3>A little about me: </h3>
            <p>
                ::FIX THIS:
                &nbsp;&nbsp;&nbsp; As a Chef-turned-Full Stack Developer I have my hands
                in the dirt, and a weather eye on the horizon.  Studying medicine imparted an experimental
                mindset, and 15 years as a culinary professional
                engraved a high standard of excellence 
                done while communicating successfully, even in a stressful,
                time-sensitive environment working closely with a small or medium team. 
            </p>
                  
            <p>
                &nbsp;&nbsp;&nbsp;An immersive addition of startup-style business branch
                construction and guidance has rounded my out sales and management
                soft skills, which taught me to listen well and learn often.

                All this amounts to an energetic, positive team member with a will to learn and get the job done right.

            </p>
            <p style={{textAlign: 'center'}}><a href="https://docs.google.com/document/d/1KKa4oOKz6EXh4vNG1fPF1TMprcI9s_Y0w7DBuTfqXe4/edit?usp=sharing" target="_blank"><CopyOutlined /> Resume</a></p>
        </div>
    )
}
