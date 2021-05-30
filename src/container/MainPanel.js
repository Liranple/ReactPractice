import './mainPanel.css';
import TopPanel from './TopPanel.js';
import CharPanel from './CharPanel.js';

function MainPanel() {
  return (
    <div className="main-panel">
      <TopPanel />
      <CharPanel />
    </div>
  );
}
  
export default MainPanel;