import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './main/MainApp';

try {
  ReactDOM.render(
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>,
    document.getElementById('root')
  );
} catch (error) {
  localStorage.clear()
}