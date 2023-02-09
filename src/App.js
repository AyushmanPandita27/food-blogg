import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage/homepage';
import About from './components/homepage/aboutus';
import Latest from './components/homepage/latestarticles';
import Last from './components/homepage/last';



function App() {
  return (
    <div className="app">
 <Homepage/>
<About/>
<Latest/>
<Last/>
    </div>
  );
}

export default App;
