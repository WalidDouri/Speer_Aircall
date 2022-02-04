import React from 'react';
import { Breadcrumb } from 'antd';

import threedots from '../images/threedots.png';

export default function NavBar() {

  return (
    <Breadcrumb id='caller-nav' class='bar'>
      <Breadcrumb>All</Breadcrumb>
      <Breadcrumb>Placed</Breadcrumb>
      <Breadcrumb>Received</Breadcrumb>
      <Breadcrumb><img src={threedots} alt="filler"/> </Breadcrumb>
    </Breadcrumb>


  );
};


