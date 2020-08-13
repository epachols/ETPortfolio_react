import React from 'react'
import './collapse.css'
import Paws from './pawslife2.png'
import Paws2 from './pawslife1.png'
import { Layout } from 'antd';
import { Collapse } from 'antd';
// import Paws3 from './pawslife3.png'

const { Header, Footer, Sider, Content } = Layout;




const { Panel } = Collapse;

function callback(key) {
    console.log(key);
  }

export default function MyCollapse() {

    const styles = {
        img: {
            margin: "0 10px",
            width:"30vw",
            height: "30vw",
            border: "2px solid black",
            borderRadius: "5px",
            //TODO: add onhover TOOLTIP, shadowbox, etc
        },
        links: {
           fontSize: "20px",
           color: "#14732d"  
        }
       
    }

    return (
      <div style={{ padding: 10 }}>
        <Collapse defaultActiveKey={["1"]} onChange={callback}>
          <Panel header="PawsLife" key="1">
            
            <h4>PawsLife</h4>
            
            <div className="picRow">
              <img src={Paws} style={styles.img}></img>
              <img src={Paws2} style={styles.img}></img>
            </div>
            <p>
              A collaborative project utilizing express router and handlebars,
              session auth, google maps API integration and a sequelize database
              to provide a community pet-care focused experience, allowing users
              to search for services for their pets or provide services for
              others.
            </p>
            <p style={{textAlign: "center"}}>
            <a href="https://github.com/rickyg218/PawsLIfe-" style={styles.links} alt="Paws Life" target="_blank"
                rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>&nbsp;
              
            <a href="https://https://pawslife.herokuapp.com/" style={styles.links} alt="deployed Mood Indigo app"
                target="_blank">  &nbsp;PawsLife</a>
            </p>
            
          
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>project 1 placeholder</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>additional placeholder</p>
          </Panel>
          <Panel header="This is panel header 4" key="4">
            <p>additional placeholder</p>
          </Panel>
        </Collapse>
      </div>
    );
}
