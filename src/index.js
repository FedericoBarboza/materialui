import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BUTTON } from './components/button';
import { SELECT } from './components/select';
import { CHECK } from './components/check';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <br></br>
    <BUTTON/>
    <SELECT/>
    <CHECK/>
  </div>
);

