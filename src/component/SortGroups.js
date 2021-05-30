import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './sortGroups.css';

function SortGroups({ name }) {
    return (
        <div className="sort-orders">
            <span style={{ fontSize: '18px', marginRight: '4px' }}>{name}</span>
            <FontAwesomeIcon icon="sort-up" style={{ position: 'absolute' }} />
            <FontAwesomeIcon
                icon="sort-down"
                style={{ position: 'absolute' }}
            />
        </div>
    );
}

export default SortGroups;
