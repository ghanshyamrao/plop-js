import React from "react";
import "./style.css";
import {
  HomeFilled,
  ThunderboltFilled,
  DribbbleCircleFilled,
  GiftFilled,
  SettingFilled,
  TwitterOutlined,
  FacebookFilled,
  UserOutlined,
  CodeSandboxCircleFilled,
  GithubFilled,
  BellFilled,
  MessageFilled,
} from "@ant-design/icons";

import Voice from './voice'
import Login from "./login";
import loaderImg from '../../../assets/icon/loader.svg'

const DashboardLayout = ({ content }) => {
  return (
    <React.Fragment>
      <nav className="navbar">
        
        <div className='navContainer'>
        <ul className="leftItem">
          <li>
            <strong className="logo"> ROYal 🥇</strong>
          </li>
          <li>
            <input placeholder="search game..." />
          </li>
        </ul>

        <ul className="rightItem">
          <li>
            <button className="price">
              <strong className="priceText"> $233.83</strong>
            </button>
          </li>
          <li>
            <button className="wallet">
              <strong className="priceText"> $233.83</strong>
            </button>
          </li>
          <li>
            <button className="mediaicon">
              <BellFilled />
            </button>
          </li>
          <li>
            <button className="mediaicon">
              {" "}
              <MessageFilled />
            </button>
          </li>
          <li>
            <button className="mediaicon">
              {" "}
              <UserOutlined />
            </button>
          </li>
        </ul>
        </div>
       
      </nav>
      <div className="mainbody">
        <div className="sidebar">
          <div className="top">
            <li>
              <button className="sideBaricon">
                <HomeFilled />
              </button>
            </li>
            <li>
              {" "}
              <button className="sideBaricon">
                <ThunderboltFilled />
              </button>
            </li>
            <li>
              {" "}
              <button className="sideBaricon">
                <DribbbleCircleFilled />
              </button>
            </li>
            <li>
              {" "}
              <button className="sideBaricon">
                <GiftFilled />
              </button>
            </li>
            <li>
              {" "}
              <button className="sideBaricon">
                <SettingFilled />
              </button>
            </li>
          </div>
          <div className="buttom">
            <li>
              <button className="mediaicon">
                <TwitterOutlined />
              </button>
            </li>
            <li>
              {" "}
              <button className="mediaicon">
                <FacebookFilled />
              </button>
            </li>
            <li>
              {" "}
              <button className="mediaicon">
                <CodeSandboxCircleFilled />
              </button>
            </li>
            <li>
              {" "}
              <button className="mediaicon">
                <GithubFilled />
              </button>
            </li>
          </div>
        </div>
        <div className="main">
          <div className="submain">
          <div className='loader'>
        <img style={{width:'50px',height:'50px',background:'lightgreen',borderRadius:'50px'}} src={loaderImg}/>
        </div>
           <Login/>
          <Voice/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardLayout;
