import _ from 'lodash';
import { myName } from './myName';

function component() {
    const element = document.createElement('div');
  
    
    element.textContent = myName('John');
  
    return element;
  }
  
  document.body.appendChild(component());

