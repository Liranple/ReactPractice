import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './charSheetNormal.css';
import Dice from './Dice';

function CharSheetNormal() {
  return (
    <div className="normal-char-sheet cb csc">
      <input type="text" className="normal-char-name cbc" />
      <div className="char-image cb">
        <div className="normal-order-image ci"></div>
      </div>
      <div className="normal-char-info">
        <div className="normal-char-stat1">
          <label>
            <FontAwesomeIcon icon="heart" className="normal-hp-icon cc" />
            <input type="number" value="500" max="500" min="0" className="normal-char-hp" disabled="true" />
          </label>
          <label>
            <FontAwesomeIcon icon="fist-raised" className="normal-atk-icon cc" />
            <input type="number" value="20" min="0" className="normal-char-atk" disabled="true" />
          </label>
          <label>
            <FontAwesomeIcon icon="shield-alt" className="normal-def-icon cc" />
            <input type="number" value="10" min="0" className="normal-char-def" disabled="true" />
          </label>
        </div>
        <div className="normal-char-stat2 cc">
            <Dice diceNum="1" fontSize="21px" />
            <Dice diceNum="2" fontSize="21px" />
            <Dice diceNum="3" fontSize="21px" />
            <button className="party1">파티1</button>
            <FontAwesomeIcon icon="utensils" className="food-buff cc" />
        </div>
      </div>
    </div>
  );
}

export default CharSheetNormal;
