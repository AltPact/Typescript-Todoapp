import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from './TextField';
import Dots from './dots/animationPage'
import {motion} from "framer-motion";
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';

import { TodoList } from "./components/TodoList"

const App: React.FC = () => {
    console.log("Render App")
  return (
    <div className="Wrapper">
        <Navbar />
        <main>
            <TodoList/>
        </main>
        <Sidebar/>
    </div>
  )
  
//   <div>
//     <h1>Hi</h1>
//     <div className="flx w-full h-screen items-center justify center bg-[#ffedd5]">
//             <div className="grid grid-cols-8 gap-24">
//                 {Array.from({ length: 64}, (_,i) => (
//                     <Dot
//                     key={i}
//                     color={getRandomColor()}
//                     time={Math.ceil(Math.random() * 2000)}
//                     />
//                 ))}
//             </div>
//         </div>
//     <p>you</p>
//   </div>
  // return <div>
  //   <Dots></Dots>
  //   <TextField text='hello' person={{ firstName: "", lastName: "" }} fn={function (bob: string): string {
  //     throw new Error('Function not implemented.');
  //   } } handleChange={function (): void {
  //     throw new Error('Function not implemented.');
  //   } } />
  // </div>;
};

function getRandomColor() {
  const colors = ["#f43f5e", "#8b5cf6", "#0ea5e9", "#10b981"];
  return colors[Math.floor(Math.random() * colors.length)];
}

const OFFSET = 4;
const ANIMATION_DURACTION = 0.7;
const PAUSE_DURATION = 0.3;

function Dot({color, time}: {color: string, time: number}){
  return (
      <div className="relative">
          <motion.div 
              initial={{x: 0, y:0}}
              animate={{x:OFFSET, y:OFFSET}}
              transition={{
                  duration: ANIMATION_DURACTION,
                  repeat: Infinity,
                  repeatType: "reverse",
                  case: "CaseInOut",
                  delay: time/1000,
                  repeatDelay: PAUSE_DURATION
              }}
              className="absolute w-8 h-8 rounded-full"
              style={{background: color}}
          />

          <motion.div
              initial={{x:0, y:0}}
              animate={{x:-OFFSET, y:-OFFSET}}
              transition={{
                  duration: ANIMATION_DURACTION,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: time / 1000,
                  repeatDelay: PAUSE_DURATION
              }}
              className="absolute w-8 h-8 rounded-full border"
              style={{ borderColor: color, backgroundColor: "#ffedd5"}}
          />
      </div>
  )
}

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
