import { Avatar, Card } from 'antd';
import React from 'react';
import './popular-card-item.css';

const { Meta } = Card;

interface PopularItem {
  title: string,
  description: string
}

export class PopularCardItemComponent extends React.Component<PopularItem> {
  render() {
    return (
      <Card
        hoverable
        style={{ minWidth: '20%', maxHeight: '100%', margin: 0 }}
      >
        <Meta
          title={this.props.title}
          description={this.props.description}
        />
      </Card>
    );
  }
}