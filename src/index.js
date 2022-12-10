import _ from 'lodash';
import { myName } from './myName';
import './style.css';
import Icon from './icon.png';

function component() {
    const element = document.createElement('div');
  
    element.textContent = myName('John');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());

