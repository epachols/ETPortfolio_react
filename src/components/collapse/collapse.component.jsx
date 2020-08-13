import React from 'react'
import './collapse.css'
import Paws from './pawslife2.png'
import Paws2 from './pawslife1.png'
import { Layout } from 'antd';
import { Collapse } from 'antd';
import Foredash from './weatherprev.png'

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
            
            <h4><strong>PawsLife</strong></h4>
            
            <div className="picRow">
              <img src={Paws2} style={styles.img}></img>
              <img src={Paws} style={styles.img}></img>
            </div>
            <p>
              A collaborative project allowing users
              to search for services for their pets or provide services for
              others. Modeled after Rover and Craigslist, this community connection app links would-be service providers to users, and allows location and tracking of services. 
              <br></br>
              This app utilizes express, express router, handlebars,
              express session authorization, google maps API integration and a sequelize database
              to provide a community pet-care focused experience.
            </p>
            <p style={{textAlign: "center"}}>
            <a href="https://github.com/rickyg218/PawsLIfe-" style={styles.links} alt="Paws Life" target="_blank"
                rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
              ||
            <a href="https://https://pawslife.herokuapp.com/" style={styles.links} alt="deployed Mood Indigo app"
                target="_blank">  &nbsp;PawsLife</a>
            </p>
          </Panel>





          <Panel header="Foredash" key="2">
          <h4><strong>Foredash: a weather dashboard</strong></h4>
            
            <div className="picRow">
              <img src={Foredash} style={styles.img}></img>
            </div>
            <p>
              A simple local weather dashboard that allows the user to view the current weather at a given location (searched for by city name), including a 5 day forecast and uv index.  Uses local storage to retain a list of searched-for cities and return said cities as options. Includes toggleable day/night themes.
            </p>
            <p style={{textAlign: "center"}}>
            <a href="https://github.com/epachols/Local-Weather-Dash" style={styles.links} alt="Foredash" target="_blank"
                rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
              ||
            <a href="https://epachols.github.io/Local-Weather-Dash" style={styles.links} alt="Foredash live"
                target="_blank">  &nbsp;Foredash</a>
            </p>
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
