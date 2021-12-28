import React from 'react';
import MenuItem from '../menu_item/menu_item.component';

const DirectoryMenu = ({ items } = this.props) => {
  return (
    <div className="directory-menu">
      {items.map((item) => (
        <MenuItem
          key={item.id}
          title={item.title}
          subtitle="Shop Now"
        ></MenuItem>
      ))}
    </div>
  );
};

export default DirectoryMenu;
