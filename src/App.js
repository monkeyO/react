import React  from 'react';
import './App.css';
import  Header from  './components/container/header';
const model = "侯立凯的微主页";
const App=({children})=>{
  return (
    <div className="containAll">
       <Header model={model}/>
       <div>{children}</div>
    </div>
  );
}
export default App;
