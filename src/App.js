import './App.css';
import Footer from './components/footer/Footer';
import Future from './components/future/Future';
import Header from './components/headers/Header';
import Infrastructure from './components/infrastructure/Infrastructure';
import Navbar from './components/navbar/Navbar';
import Tooling from './components/tooling/Tooling';

function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Future/>
    <Infrastructure/>
    <Tooling/>
    <Footer/>
    </>
  );
}

export default App;
