import logo from './logo.svg';
import './App.css';
import CompHeader from './components/compheader';
import ComponentMain from './components/compmain';
import CompFooter from './components/compfooter';
function App() {
  return (
    <div className="App">
      <CompHeader/>
      <ComponentMain/>
      <CompFooter/>
    </div>
  );
}

export default App;
