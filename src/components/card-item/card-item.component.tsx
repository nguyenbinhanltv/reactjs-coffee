import { Card } from 'antd';
import React from 'react';
import './card-item.css';

const { Meta } = Card;

interface Item {
  url: string,
  title: string,
  price: string,
  description: string
}

export class CardItemComponent extends React.Component<Item> {
  render() {
    return (
      <Card
        hoverable
        style={{ maxWidth: '13vw' }}
        cover={<img alt="example" src={process.env.PUBLIC_URL + this.props.url} style={{ maxWidth: '13vw', maxHeight: '13vw', minWidth: '13vw', minHeight: '13vw' }} />}
      >
        <Meta title={this.props.title} />
        <div className="dlc-card-item-price">
          <span className="price">
            {this.props.price}
          </span>
          <span className="currency">
            &nbsp;đ
          </span>
        </div>
        <Meta description={this.props.description} />
      </Card>
    );
  }
}