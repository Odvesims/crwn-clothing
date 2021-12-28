import React from 'react';
import DirectoryMenu from '../../components/directory_menu/directory_menu.component';
import './homepage.styles.scss';

const items = [
  {
    id: 1,
    title: 'HATS',
  },
  {
    id: 2,
    title: 'JACKETS',
  },
  {
    id: 3,
    title: 'SNEAKERS',
  },
  {
    id: 4,
    title: 'WOMEN',
  },
  {
    id: 5,
    title: 'MEN',
  },
];
const HomePage = () => (
  <div className="homepage">
    <DirectoryMenu className="directory-menu" items={items}></DirectoryMenu>
  </div>
);

export default HomePage;
