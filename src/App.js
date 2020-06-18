import React from 'react';
//import logo from './logo.svg';
import './App.css';
/*
  Assignment:

  • Change the text “Hello World!” to say “Hello <your name>!”
  • Bold your name by wrapping it in a <strong> tag. It works just like HTML.
  • Inside the <div> , and under your name, add some other HTML elements. Headings, 
    ordered and unordered lists, etc. Get a feel for how it works. 
  • I mentioned that you can put real JS code inside the JSX. 
    Try that out: inside the div, insert a JS expression surrounded with 
    single braces, like {5 + 10} .
  • Want to style it with CSS? Instead of using the “class” property like you would 
    in HTML, use “className”. Then create a file src/index.css with the styles, 
    and add the line import './index.css' to the top of index.js. 
*/
function App(props) {
  return (
    <div>
      Hello <strong>{props.name}</strong>!<br></br>
      <table><tr><td>
      <h4>Cities Visited by You:</h4>
      <ol>
        <li>Islamabad</li>
        <li>Lahore</li>
        <li>Karachi</li>
        <li>Peshawar</li>
        <li>Quetta</li>
      </ol>
      </td><td> AND  </td><td>
      <h4>Foods Tasted by You:</h4>
      <ul>
        <li>Karahi</li>
        <li>Palao</li>
        <li>Chapal Kabab</li>
        <li>Nihari</li>
        <li>Halwa</li>
      </ul>
      </td></tr></table>
      You visited {props.visits_yr_1} times last year and {props.visits_yr_2} times 
      this year. <u>So overall you have made {props.visits_yr_1+props.visits_yr_2} visits.</u>
    </div>
  );
}

export default App;
