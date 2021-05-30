import './App.css';
import './css/common.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogPanel from './container/LogPanel';
import MainPanel from './container/MainPanel';
import RestPanel from './container/RestPanel';

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
