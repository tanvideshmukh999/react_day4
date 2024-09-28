
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import List from "./Components/Data.json"
import Quotes from './Components/Quotes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section class="section">
           {
            List.map((data)=>{
              return <Quotes {...data}></Quotes>
            })
           }
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
