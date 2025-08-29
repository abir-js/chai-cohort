import React from 'https://esm.sh/react@19.1.0';
import ReactDOM from 'https://esm.sh/react-dom@19.1.0/client';

const Chai = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('p', {}, props.cost),
  ]);
};

const App2 = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Chai variations by ChaiCode'),
    React.createElement(Chai, { name: 'Masala Chai', cost: 1200 }),
    React.createElement(Chai, { name: 'Ginger Chai', cost: 1200 }),
    React.createElement(Chai, { name: 'Lemon Tea', cost: 1200 }),
    React.createElement(Chai, { name: 'Ice Tea', cost: 1200 }),
  ]);
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App2));
