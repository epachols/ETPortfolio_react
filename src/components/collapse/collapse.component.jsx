import React from 'react'
import './collapse.css'

import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
    console.log(key);
  }

export default function MyCollapse() {
    return (
        <div style={{padding: 10}}>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="PawsLife" key="1">
                <h4>PawsLife</h4>
                <p>A collaborative project utilizing express router and handlebars, session auth, google maps API integration and a sequelize database to provide a community pet-care focused experience, allowing users to search for services for their pets or provide services for others.</p>
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
    )
}
