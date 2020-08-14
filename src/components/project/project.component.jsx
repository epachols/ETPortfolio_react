import React from 'react'
import { Card } from 'antd';
import './index.css';
import { Col } from 'antd';

const { Meta } = Card;

export default function Project(props) {
    return (
       <Col xs={24} s={24} m={12} l={8} xl={6}>

            <Card
                hoverable
                style={{ width: "90%", paddingTop: "8px", marginBottom: "10px" }}
                cover={
                <img
                    alt={props.name}
                    src={props.src}
                />
                }
            >
                <Meta title={props.name} description={props.description} />
                <p style={{fontSize: 25}}>
                    <a href={props.github}><i className="fab fa-github-square"></i></a>
                    &nbsp;&nbsp;&nbsp;
                    <a href={props.deployed}>live</a>
                </p>
            </Card>
       </Col> 
    );
}
