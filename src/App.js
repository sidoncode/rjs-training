import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {TodosItem} from './MyComponents/TodosItem';



function App() {

  const ondelete = ()=>{

    console.log("delete btn clicked");

  }




  let todos = [

    {
      sno: 1,
      title:"go to the market",
      desc:"description"
  
    },
  
    {
      sno: 2,
      title:"go to the mall",
      desc:"description"
  
    },
    {
  
      sno: 3,
      title:"go to the gf house",
      desc:"description"
  
    },
  
  
  ]
  
  return (
      <>
        <Header title = {12} searchbar = {false}></Header>
        { /* <Todos> todos = {todos}</Todos> */ }

        <Todos todos = {todos} ondelete = {ondelete}/>



      </>
  );
}




export default App;
