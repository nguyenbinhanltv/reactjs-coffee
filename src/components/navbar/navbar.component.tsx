import React from "react";
import "./navbar.css";

import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { SearchComponent } from "../search/search.component";

const { SubMenu } = Menu;

export class NavbarComponent extends React.Component {
  state = {
    current: 'mail'
  }

  handleClick = (e: { key: { toString: () => any; }; }) => {
    console.log("click ", e);
    this.setState({ current: e.key.toString() });
  };
  render() {
    const { current } = this.state;
    return (
      <div className="dlc-navbar">
        <img src={process.env.PUBLIC_URL + "logo192.png"} alt="" style={{ width: 50, height: 50 }} />
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          className="dlc-navbar-menu"
        >
          <SubMenu
            key="danh mục sản phẩm"
            icon={''}
            title="Danh mục sản phẩm"
          >
            <SubMenu
              key="nguyên liệu"
              icon={<SettingOutlined />}
              title="Nguyên Liệu"
            >
              <Menu.Item key="setting:1">Sinh tố Osterberg</Menu.Item>
              <Menu.Item key="setting:2">Sinh Tố Berrino</Menu.Item>
              <Menu.Item key="setting:3">Syrup Monin</Menu.Item>
            </SubMenu>
            <SubMenu
              key="cà phê"
              icon={''}
              title="Cà phê"
            >
              <Menu.Item key="setting:4">Cà phê chồn</Menu.Item>
              <Menu.Item key="setting:5">Cà phê Capuchino</Menu.Item>
              <Menu.Item key="setting:6">Cà phê xay</Menu.Item>
            </SubMenu>
          </SubMenu>
          <Menu.Item key="liên hệ" icon={<MailOutlined />}>
            Liên hệ
        </Menu.Item>
        </Menu>
        <SearchComponent></SearchComponent>
      </div>
    );
  }
}
