import React, { useState } from 'react';
import './tabList.css';
import { FaTrash, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function TabList() {
  const [tabvalue, setTabValue] = useState([]);

  const [displayNum, setDisplayNum] = useState([
    { name: 'Tab 1', id: 1 },
    { name: 'Tab 2', id: 2 },
    { name: 'Tab 3', id: 3 },
  ]);
  const [flag, setFlag] = useState(false);
  const [flagData, setFlagData] = useState(false);

  const tabCal = (data) => {
    setTabValue(data)
    setFlag(true)
  }

  

  const IntermentTab = () => {
    let tabIncr = Object.keys(displayNum).length + 1;
    var obj = {};
    obj["name"] = 'Tab ' + tabIncr;
    obj["id"] = tabIncr;
    setDisplayNum([...displayNum, obj])
  }

  const deleteTab = (data) => {
    let listData = displayNum;
    listData.splice(data.id-1, 1);
    setDisplayNum([...listData])
  }

  return (
    <div>

      <ul style={{ display: 'inline' }}>
        <div class="scrollmenu">
          {displayNum.length >= 4 && <li style={{ marginTop: 10 }}><FaAngleLeft onClick={() => alert('hi')}/></li>}
          {displayNum.map((data) => {
            return (
              <div className="listDiv">
                <li
                  key={data.id}
                  style={{ listStyleType: "none" }}
                  onClick={() => tabCal(data.name)}>
                   <a>{data.name}</a>
                </li>
                <li
                  style={{ marginTop: 2, fontSize: 10, fontWeight: 'bold', color: '#6e6a69' }}
                  onClick={() => deleteTab(data)}>
                  <a><FaTrash /></a>
                </li>
              </div>
            )
          })}
          {displayNum.length > 3  && <li style={{ marginTop: 10, marginLeft: 20 }}>
            <FaAngleRight />
          </li>}
          <button style={{ marginTop: 10, marginLeft: 10 }} onClick={() => IntermentTab()}>ADD Tab</button>
        </div>

      </ul>



      <div className="app"> {flag && <p >{tabvalue} content</p>}</div>
    </div>
  );
}

export default TabList;
