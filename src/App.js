import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
function App() {
  return (
    //BEM
    <div className="App">
      <Sidebar />                   
      
      <Feed />
      {/* widegets */}
    </div>
  );
}

export default App;
