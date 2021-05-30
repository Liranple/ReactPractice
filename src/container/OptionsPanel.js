import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './optionsPanel.css';

function OptionsPanel() {
  return (
    <div className="options-panel">
      <div className="left-content">
        <label className="inventory">
          <FontAwesomeIcon icon="shopping-bag" size="2x" />
          <span>Item</span>
        </label>
        <label className="upgrade">
          <FontAwesomeIcon icon="hammer" size="2x" />
          <span>Forge</span>
        </label>
      </div>
      <div className="right-content">
        <label className="save">
          <FontAwesomeIcon icon="cloud-upload-alt" size="2x" />
          <span>Save</span>
        </label>
        <label className="load">
          <FontAwesomeIcon icon="cloud-download-alt" size="2x" />
          <span>Load</span>
        </label>
        <label className="config">
          <FontAwesomeIcon icon="cog" size="2x" />
          <span>Config</span>
        </label>
      </div>
    </div>
  );
}

export default OptionsPanel;