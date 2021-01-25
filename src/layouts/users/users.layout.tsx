import React from 'react';
import { Layout, Typography } from 'antd';
import './users.css';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';

import { DummyData } from './dummy-data';
import { ListPopularComponent } from '../../components/list-card-item/list-popular-card-item.component';
import { ListComponent } from '../../components/list-card-item/list-card-items.component';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export class UsersLayout extends React.Component {
  render() {
    return (
      <Layout style={{ padding: 0 }}>
        <Header className="dlc-header">
          <NavbarComponent></NavbarComponent>
        </Header>
        <Content className="site-layout">
          {/* <Breadcrumb style={{ margin: '16px 0', padding: '0 50px' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Danh mục sản phẩm</Breadcrumb.Item>
          </Breadcrumb> */}
          <div className="site-layout-background">
            <div className="dlc-content">
              <div className="dlc-box-carousel">
                <div className="dlc-carousel">
                  <CarouselComponent></CarouselComponent>
                </div>
              </div>
              <div className="dlc-popular">
                <Title level={2}>Tìm kiếm phổ biến</Title>
                <div className="dlc-popular-bottom">
                  <ListPopularComponent data={DummyData.popularItems} />
                </div>
              </div>
              <div className="dlc-top-sell">
                <Title level={2}>Danh mục sản phẩm</Title>
                <div className="dlc-top-sell-list-item">
                  <ListComponent data={DummyData.topSellItems} />
                </div>
              </div>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', background: '#fff' }}>
          <FooterComponent></FooterComponent>
        </Footer>
      </Layout>
    );
  }
}