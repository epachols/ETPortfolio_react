import React from "react";
import { CopyOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import Mugshot from '../images/mugshot.jpg'



export default function Home() {
    return (
        
        <div style={{ minHeight: "90vh", padding: 24}}>
        <Row style={{display: "flex", justifyContent: "center"}}>
        <Col xs={24} s={12} m={6} l={6} xl={6}>
        <img src={Mugshot} style={{ width: "75%", borderRadius:"5%"}}></img>

        </Col>
        <Col style={{marginTop:"15px"}}xs={24} s={12} m={18} l={18} xl={18}>
            
            <h3>A little about me: </h3>
            <p>
                
                &nbsp;&nbsp;&nbsp; As a Chef-turned-Full Stack Developer with a STEM background, I have seen the world from a few different perspectives.  Studying medicine imparted an experimental
                mindset, and 15 years as a culinary professional
                engraved a high standard of excellence 
                done while communicating successfully; even in a stressful,
                time-sensitive environment while working closely with a small or medium team. 
            </p>
                  
            <p>
                &nbsp;&nbsp;&nbsp;An immersive addition of startup-style business branch
                construction and guidance has rounded my out sales and management
                soft skills, which taught me to listen well and learn often.

                All this amounts to an energetic, positive team member with a will to learn and get the job done right.

            </p>
            <p style={{textAlign: 'center'}}><a href="https://docs.google.com/document/d/1KKa4oOKz6EXh4vNG1fPF1TMprcI9s_Y0w7DBuTfqXe4/edit?usp=sharing" target="_blank"><CopyOutlined /> Resume</a></p>
        </Col>
        </Row>
        </div>
        
    )
}
