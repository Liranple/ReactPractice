import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './charPanel.css';
import CharSheetNormal from '../component/CharSheetNormal';
import SortGroups from '../component/SortGroups';


function CharPanel() {
  const sortMenus = [{name: "파티"}, {name: "진영"}, {name: "이름"}, {name: "체력"}];
  const partyGroups = Array.from(new Array(8).keys());
  
  return (
    <div className="char-panel">
      <div className="control-bars">
        <FontAwesomeIcon icon="plus-square" className="char-add" />
        <FontAwesomeIcon icon="minus-square" className="char-del" />
        <Form.Control as="select" className="party-group">
          {partyGroups.map((party, index) => (
            <option key={index} className={`p${index+1}`}>파티{index+1}</option>
          ))}
        </Form.Control>
        <Button variant="danger" className="atk-btn">공격</Button>
        <Button variant="danger" className="sud-btn">기습</Button>
        <Button variant="danger" className="stu-btn">무력화</Button>
      </div>
      <div className="sort-bars">
        <FontAwesomeIcon icon="check-circle" />
        {sortMenus.map((menu, key) => (
          <SortGroups key={key} name={menu.name} />
        ))}
      </div>
      <div className="normal-chars">
        <CharSheetNormal />
      </div>
    </div>
  );
}

export default CharPanel;
