const App = React.createElement('div', null, 'Hello world!');

ReactDOM.render(App, document.querySelector('#root'), () => {
  console.log("The App has been mounted successfully!");
});
