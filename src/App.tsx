
import './App.css'
// import Demo from './Demo'
// import ButtonComponent from "./component/ButtonComponent.tsx";
// import {useState} from "react";

import SubjectComponent from "./component/SubjectComponent.tsx";
// import LoggingComponent from "./component/LoggingComponent.tsx";
// import DashboardComponent from "./component/DashboardComponent.tsx";
// import {Button, FancyButton, SmallButton} from './Button'
// import {Item} from "./component/Item.tsx";
// import {Body} from "./component/Item.tsx";

function App() {
    // const [content, setContent] = useState('Default value');
    // // const isLoggedIn :boolean=false;
    // function handleOnClick(type:string) {
    //     // console.log( ' clicked');
    //     // alert(type + ' clicked');
    //     setContent(type)
    // }
    // const [count, setCount] = us(0);
    // function increment() {
    //     setCount(prevCount => prevCount + 1);
    // }
  return (
      <>
        {/* <Demo/>
        <p>This is p tag</p> */}
    
          {/* <div>
              <button onClick={() => increment()}>Click Me: {count}</button>
          </div> */}
    {/*// <div>*/}
    {/*//     {content}*/}
    {/*//   <Button/>*/}
    {/*//   <FancyButton/>*/}
    {/*//   <SmallButton/>*/}
    {/*// </div>*/}
    {/*      <div>*/}
    {/*        <Item title={"RAD"} desc={"rapid application development"} footer={"footer"}/>*/}
    {/*      </div>*/}
    {/*      <div>*/}
    {/*          <Body title={"This is footer"} />*/}
    {/*      </div>*/}

          {/*<Item title={itemsList[0].title} desc={itemsList[0].desc}/>*/}
          {/*<Item title={itemsList[1].title} desc={itemsList[1].desc}/>*/}

          {/*<Item{...itemsList[0]}/>*/}
          {/*<Item{...itemsList[1]}/>*/}
          {/*<Item{...itemsList[2]}/>*/}


          {/*<div>*/}
          {/*    {itemsList.map(item => (*/}
          {/*        <Item title={item.title} desc={item.desc} />*/}
          {/*    ))}*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*    {isLoggedIn ? <DashboardComponent/> : <LoggingComponent/>}*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*    <button>click me</button>*/}
          {/*    <button>click me1</button>*/}
          {/*    <button>click me2</button>*/}
          {/*</div>*/}
          <SubjectComponent name = 'RAD'>aaaaaa</SubjectComponent>
          <SubjectComponent name = 'MAD'>bbbbbb</SubjectComponent>
          <SubjectComponent name = 'BAD'>cccccc</SubjectComponent>

          {/*<ButtonComponent name = 'DashBoard' onClick = {handleOnClick}></ButtonComponent>*/}
          {/*<ButtonComponent name = 'Add Customer' onClick = {handleOnClick}></ButtonComponent>*/}
          {/*<ButtonComponent name = 'Delete Customer' onClick = {handleOnClick}></ButtonComponent>*/}
          {/*{content}*/}
      </>
  )
}
// const itemsList = [
//     {
//         title: "RAD",
//         desc: "lorem ipsum",
//     },
//     {
//         title: "MAD",
//         desc: "lorem ipsum",
//     }
// ]

export default App
