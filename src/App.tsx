import { Row, Col } from 'antd';
import { getTwoArray } from './constants'

import './App.css'
import { useState } from 'react';

const data = getTwoArray();

function App() {
  const [s, setS] = useState(0);
  const onClick = (e: any, it: number) => {
    if (e.target.parentNode.className.indexOf('is-flipped') === -1) {
      if (it === 0) {
        setS(0);
      } else {
        setS((st) => st + it);
      }
    }
    e.target.parentNode.classList.add('is-flipped');
  }

  return (
    <div className="App">
      <Row justify="center">
        <div className="sum">
          总分: {s} 分
        </div>
      </Row>
      {data.map((item: number[], row: number) => (<Row>
        {item.map((it: number, col: number) =>
        <Col key={row+'-'+col}>
        <div className="card" onClick={(e) => onClick(e, it)}>
            <div className="card-face card-face-front">{col+1}-{row+1}</div>
            <div className="card-face card-face-back">{it === 0 ? '归零' : it}</div>
        </div>
        </Col>
      )}
      </Row>
      ))}
    </div>
  )
}

export default App
