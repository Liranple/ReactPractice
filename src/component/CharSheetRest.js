import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './charSheetRest.css';

function CharSheetRest() {
    return (
        <div className="rest-char-sheet cb csc">
            <div className="rest-order-image cbc ci"></div>
            <input type="text" className="rest-char-name cbc" />
            <FontAwesomeIcon icon="heart" className="rest-hp-icon cc" />
            <input type="number" value="500" max="500" min="0" className="rest-char-hp" disabled="true" />
            <button className="rest">휴식중</button>
        </div>
    );
}

export default CharSheetRest;