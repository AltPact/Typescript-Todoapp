import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from './TextField';

const App: React.FC = () => {
  return <div>
    <TextField text='hello' person={{ firstName: "", lastName: "" }} fn={function (bob: string): string {
      throw new Error('Function not implemented.');
    } } handleChange={function (): void {
      throw new Error('Function not implemented.');
    } } />
  </div>;
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
