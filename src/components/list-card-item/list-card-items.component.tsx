import React, { CSSProperties } from 'react';
import { CardItemComponent } from '../card-item/card-item.component';

interface Item {
  url: string,
  title: string,
  price: string,
  description: string
}

const listStyle = {
  minWidth: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
  flexWrap: 'wrap',
};

export class ListComponent extends React.Component<{ data: Item[] }> {
  render() {
    let listItems = [];
    for (let i = 0; i < this.props.data.length; i++) {
      listItems.push(<CardItemComponent url={this.props.data[i].url} title={this.props.data[i].title} price={this.props.data[i].price} description={this.props.data[i].description} key={i} />);
    }
    return (
      <div style={listStyle as CSSProperties}>
        { listItems}
      </div>
    );
  }
}