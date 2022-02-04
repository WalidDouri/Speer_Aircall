import React from 'react';

import outgoing from './images/outgoing.png';
import contacts from './images/contacts.png'
import cellphone from './images/cellphone.png';
import search from './images/search.png';
import cog from './images/cog.png'

export default function Footer() {
  return (
    <div>
      <div id="container-footer">
      <img src={outgoing} alt="logo"/>
      <img src={contacts} alt="logo"/>
      <img src={cog} alt="logo"/>
      <img src={search} alt="logo"/>
      </div>
    </div>
  );
};
