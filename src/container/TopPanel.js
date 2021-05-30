import './topPanel.css';
import MonPanel from './MonPanel';
import OptionsPanel from './OptionsPanel';

function TopPanel() {
  return (
    <div className="top-panel">
      <MonPanel />
      <OptionsPanel />
    </div>
  );
}
  
export default TopPanel;