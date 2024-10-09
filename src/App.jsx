import {RouterProvider} from "react-router-dom";
import './App.scss'
import router from './routing/routing'
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Favorite from "./pages/Favorite/Favorite";



function App() {
  return (
      <div className="App">
        <RouterProvider router={router}/>
        <Header/>
        <Card/>
        <Favorite/>

      </div>
  );
}

export default App;