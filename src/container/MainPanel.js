import './mainPanel.css';

import CharPanel from './CharPanel';
import TopPanel from './TopPanel';

function MainPanel() {
    return (
        <div className="main-panel">
            <TopPanel />
            <CharPanel />
        </div>
    );
}

export default MainPanel;
