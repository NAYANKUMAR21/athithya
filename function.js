const container = document.getElementById('react-container');

// ReactDOM.render('Hello! Welcome to React this is my first project', container);

const containerFn = () => {
  return React.createElement(
    `div`,
    null,
    `Hey Kalvians! Welcome to React Learning`,
    React.createElement(`div`, null, `Let's rock and roll`)
  );
};

let newBtnFn = () => {
  return React.createElement('button', null, 'Click Button to signup');
};

// ReactDOM.render(
//   React.createElement(containerFn),
//   document.getElementById('react-container')
// );

ReactDOM.render(
  React.createElement(newBtnFn),
  document.getElementById('react-container')
);
