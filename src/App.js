import './App.css';
import './css/common.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RestPanel from './container/RestPanel';
import MainPanel from './container/MainPanel';
import LogPanel from './container/LogPanel';

function App() {
  return (
    <div className="screen">
      <RestPanel />
      <MainPanel />
      <LogPanel />
    </div>
  );
}

export default App;
