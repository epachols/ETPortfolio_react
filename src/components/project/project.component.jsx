import React from 'react'
import { Card } from 'antd';
import './index.css';

const { Meta } = Card;

export default function Project(props) {
    return (
        
      <Card
        hoverable
        style={{ width: "350px", paddingTop: "8px" }}
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
    );
}
