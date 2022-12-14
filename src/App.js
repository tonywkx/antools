import './App.css';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Nav from './components/Navigation/Nav';
import Newcomer from './components/Newcomer/Newcomer';
import Person from './components/Person/Person';
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
      <Person/>
      <Feedback/>
      <Footer/>
    </div>
    
  );
}

export default App;
