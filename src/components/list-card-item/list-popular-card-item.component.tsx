import React, { CSSProperties } from 'react';
import { PopularCardItemComponent } from '../popular-card-item/popular-card-item.component';

interface PopularItem {
  title: string,
  description: string
}

const listStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'row',
};

export class ListPopularComponent extends React.Component<{ data: PopularItem[] }> {
  render() {
    let listItems = [];
    for (let i = 0; i < this.props.data.length; i++) {
      listItems.push(<PopularCardItemComponent title={this.props.data[i].title} description={this.props.data[i].description} key={i} />);
    }
    return (
      <div style={listStyle as CSSProperties}>
        { listItems}
      </div>
    );
  }
}