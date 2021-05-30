import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';

import './restPanel.css';
import CharSheetRest from '../component/CharSheetRest';
import SortGroups from '../component/SortGroups';

function RestPanel() {
    const sortMenus = [{ name: '진영' }, { name: '이름' }, { name: '체력' }];
    const healPoints = [10, 30, 50, 100, 200, 300];

    return (
        <div className="rest-panel">
            <div className="heal-btns">
                {healPoints.map((value, key) => (
                    <Button key={key} variant="success">
                        {value}
                    </Button>
                ))}
            </div>
            <div className="sort-bars">
                <FontAwesomeIcon icon="check-circle" />
                {sortMenus.map((menu, key) => (
                    <SortGroups key={key} name={menu.name} />
                ))}
            </div>
            <div className="rest-chars">
                <CharSheetRest />
                <CharSheetRest />
                <CharSheetRest />
                <CharSheetRest />
            </div>
        </div>
    );
}

export default RestPanel;
