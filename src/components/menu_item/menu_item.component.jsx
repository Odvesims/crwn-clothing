import React from 'react';
import { useNavigate } from 'react-router-dom';

import './menu-item.styles.scss';

function MenuItem({ title, subtitle, imageUrl, size, linkUrl }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`${linkUrl}`);
  }

  return (
    <div onClick={handleClick} className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
}
export default MenuItem;
