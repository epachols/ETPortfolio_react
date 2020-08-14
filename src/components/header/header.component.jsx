import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import Logo from './logocrow.png'

const menu = (
    <Menu>

      <Menu.Item>
        <Link to="/">About Me</Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/contact">Contact</Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/portfolio">Portfolio</Link>
      </Menu.Item>

    </Menu>
  );

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={Logo} />
            <Dropdown overlay={menu} placement="bottomLeft">
                <Button size="large" id="navButton">
                Navigation
                <CheckCircleOutlined twoToneColor="#18661e"/>
                </Button>
            </Dropdown>
        </div>
    )
}
