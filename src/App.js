import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
import SearchLocation from './searchLocation';

const App = () => {
  // return React.createElement('div', {}, [
  //   React.createElement('h1', {}, 'This is Sample Root'),
  //   React.createElement(Pet, { getName: 'Cow', getAge: '3' }),
  //   React.createElement(Pet, { getName: 'Goat', getAge: '2' }),
  // ]);
  return (
    <div>
      <h1>This is Sample Root</h1>
      {/* <Pet getName="Cow1" getAge="3"/>
      <Pet getName="Goat" getAge="2"/> */}
      <SearchLocation />
    </div>
  );
};

render(<App />, document.getElementById('root'));
