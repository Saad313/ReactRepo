import React from "react";
import {render} from "react-dom";
import  Pet  from "./Pet";

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'This is Sample Root'),
    React.createElement(Pet, { getName: 'Cow', getAge: '3' }),
    React.createElement(Pet, { getName: 'Goat', getAge: '2' }),
  ]);
};

render(React.createElement(App), document.getElementById('root'));
