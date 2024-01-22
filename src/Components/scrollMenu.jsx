import React from 'react';
import './ScrollMenu.css'; // Adjust the path based on your project structure

const ScrollMenu = () => {
  
  return (
    <div class=" container nav-scroller px-1 mb-3 border-top">
        <nav class="nav nav-underline justify-content-between navbar-expand scrollmenu">
          <a class="nav-item nav-link link-body-emphasis active" href="#">World</a>
          <a class="nav-item nav-link link-body-emphasis" href="#">India</a>
          <a class="nav-item nav-link link-body-emphasis" href="#">Technology</a>
          <a class="nav-item nav-link link-body-emphasis" href="#">Sports</a>
          <a class="nav-item nav-link link-body-emphasis" href="#">IPL</a>
          <a class="nav-item nav-link link-body-emphasis" href="#">Latest Update</a>
          <a class="nav-item nav-link link-body-emphasis" href="#">Politics</a>
          <a class="nav-item nav-link link-body-emphasis" href="#">Views</a>
          <a class="nav-item nav-link link-body-emphasis" href="#">Science</a>
          
        </nav>
      </div>
  );
}

export default ScrollMenu;
