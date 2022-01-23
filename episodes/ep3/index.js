const App = React.createElement('div', null, 'Hello world!');

// Null is provided as a type to cause an error.
// This error allows us to test the assumption about createElementWithValidation function.
// const App = React.createElement(null, null, 'Hello world!'); 

ReactDOM.render(App, document.querySelector('#root'));
