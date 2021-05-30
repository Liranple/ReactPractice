import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dice({ diceNum, fontSize }) {
    const diceList = ['dice-one', 'dice-two', 'dice-three'];

    return (
        <FontAwesomeIcon icon={diceList[diceNum - 1]} style={{ fontSize }} />
    );
}

export default Dice;
