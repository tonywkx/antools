import './App.css';
import Main from './components/Main/Main';
import Nav from './components/Navigation/Nav';
import Newcomer from './components/Newcomer/Newcomer';
import Popular from './components/Popular/Popular';
import Trusted from './components/Trusted/Trusted';

function App() {
  return (
    <div className='app'>
      <Nav/>
      <Main/>
      <Popular/>
      <Trusted/>
      <Newcomer/>
    </div>
    
  );
}

export default App;
