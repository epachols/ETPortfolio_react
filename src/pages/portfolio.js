import React from "react";
import Router from 'react-router-dom';
import Project from '../components/project/project.component';
import { Row, Col } from 'antd';
//images 
import Paws from '../components/project/pawslife2.png';
import Emp from '../components/project/employeedirectory.png';
import Budget from '../components/project/budgettracker.png';
import Burgers from '../components/project/evsburgers.png';
import Team from '../components/project/teamtemplateengine.png'
import Local from '../components/project/weatherprev.png'

import { Collapse } from 'antd';
const { Panel } = Collapse;
function callback(key) {
    console.log(key);
  }

const projects = {
    pawslife: {
        name: 'PawsLife',
        gitHub: 'https://github.com/rickyg218/PawsLIfe-',
        deployed:'http://pawslife.herokuapp.com/',
        description:'This application is a social community website of pet owners and pet service providers, giving users the ability to create an account as a pet owner and/or a pet service provider. As an owner, a user can keep track of all of their pets and can book available provider services. As a provider, a user can post pet care services for other members of pawslife to book.'
    },
    employeedirectory: {
        name: 'Employee Directory (react)',
        gitHub: 'https://github.com/epachols/employee_directory',
        deployed:'https://etpemployeedirectory.herokuapp.com/',
        description:'This employee directory uses create-react-app for a responsive front-end with conditional rendering based on user input and sort options from several columns of the rendered information.'
    },
    budgettracker: {
        name: 'Budget Tracker Progressive Web App',
        gitHub: 'https://github.com/epachols/budgettracker',
        deployed:'https://salty-tundra-90790.herokuapp.com/',
        description:'A Progressive Web App budget tracker with offline persistence utilizing indexedDB, simple persistent data and graphed total over time.'
    },
    evsburgers: {
        name:"Ev's Burgers",
        gitHub: 'https://github.com/epachols/EvsBurgers',
        deployed:'https://pure-spire-01384.herokuapp.com/',
        description:'A fullstack "burger place" app that utilizes node, express, mysql, handlebars, and the MVC model including an orm. Persistent data by way of heroku hosting and jawsDB database handling.'
    },
    teamtemplate: {
        name:"Team Template Engine",
        gitHub: 'https://github.com/epachols/TeamTemplateEngine',
        description:'This node/js app uses class extensions and the inquirer NPM module to take Command Line Input from the user to generate a static HTML page displaying pertinent information about software team members, including their role, name, employee ID, and other role-based information.'
    },
    localweather: {
        name:"Local Weather Dash",
        gitHub: 'https://github.com/epachols/Local-Weather-Dash',
        deployed: 'https://epachols.github.io/Local-Weather-Dash/',
        description:'Simple static page that uses 3rd party API retrieval to generate a localized custom weather dashboard, data persists through local storage.'
    },
}


export default function Portfolio() {
    return (
      <>
        <h2>Portfolio</h2>
        <div style={{ minHeight: "80vh", padding: 20 }}>
        <Row style={{display: "flex", justifyContent: "center"}}>

        
            <Project
                name={projects.pawslife.name}
                github={projects.pawslife.github}
                deployed={projects.pawslife.deployed}
                description={projects.pawslife.description}
                src={Paws}
            />
            <Project
                name={projects.employeedirectory.name}
                github={projects.employeedirectory.github}
                deployed={projects.employeedirectory.deployed}
                description={projects.employeedirectory.description}
                src={Emp}
            />
          <Project
            name={projects.budgettracker.name}
            github={projects.budgettracker.github}
            deployed={projects.budgettracker.deployed}
            description={projects.budgettracker.description}
            src={Budget}
          />
          <Project
            name={projects.evsburgers.name}
            github={projects.evsburgers.github}
            deployed={projects.evsburgers.deployed}
            description={projects.evsburgers.description}
            src={Burgers}
          />
          <Project
            name={projects.teamtemplate.name}
            github={projects.teamtemplate.github}
            deployed={projects.teamtemplate.deployed}
            description={projects.teamtemplate.description}
            src={Team}
          />
          <Project
            name={projects.localweather.name}
            github={projects.localweather.github}
            deployed={projects.localweather.deployed}
            description={projects.localweather.description}
            src={Local}
          />
          </Row>
        </div>
      </>
    );
}
