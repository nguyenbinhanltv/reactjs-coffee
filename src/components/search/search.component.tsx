import { Input } from 'antd';
import React from 'react';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);
export class SearchComponent extends React.Component {
  render() {
    return (
      <Search placeholder="Tìm kiếm trên Đức Long Cafe" allowClear onSearch={onSearch} style={{ width: 400 }} />
    );
  }
} 