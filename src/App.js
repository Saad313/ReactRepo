const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h2', {}, props.getName),
    React.createElement('h2', {}, props.getAge),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'This is Sample Root'),
    React.createElement(Pet, { getName: 'Cow', getAge: '3' }),
    React.createElement(Pet, { getName: 'Goat', getAge: '2' }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
