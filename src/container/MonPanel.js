import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';

import './monPanel.css';
import Dice from '../component/Dice';

function MonPanel() {
    const monsterHealthPoints = [
        20, 40, 100, 200, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000, 2500,
        3000, 3500, 4000, 4500, 5000, 5500, 6000, 8000, 10000, 15000, 20000,
    ];

    return (
        <div className="mon-panel">
            <FontAwesomeIcon icon="skull" size="2x" />
            <Form.Control as="select" className="mon-health-point">
                {monsterHealthPoints.map((value, key) => (
                    <option key={key} value={value}>
                        {value}
                    </option>
                ))}
            </Form.Control>
            <Dice diceNum="1" fontSize="42px" />
            <Dice diceNum="2" fontSize="42px" />
            <Dice diceNum="3" fontSize="42px" />
            <Form.Control
                type="number"
                className="mon-heal-point"
                placeholder="회복"
            />
            <FontAwesomeIcon
                icon="heartbeat"
                size="2x"
                className="mon-healing"
            />
        </div>
    );
}

export default MonPanel;
