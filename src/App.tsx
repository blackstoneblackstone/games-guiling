import { Row, Col } from 'antd';
import { getTwoArray } from './constants';
import { useState } from 'react';

import './App.css';

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
  };

  return (
    <div className="App">
      <Row justify="center">
        <div className="sum">
          <div className="title">好运翻不停，只要别归零</div>
          {/* <div className="score">总分: {s} 分</div> */}
        </div>
      </Row>
      {data.map((item: number[], row: number) => (
        <Row gutter={10}>
          {item.map((it: number, col: number) => (
            <Col key={row + '-' + col} span={4}>
              <div className="card" onClick={(e) => onClick(e, it)}>
                <div className="card-face card-face-front">
                  {row + 1}-{col + 1}
                </div>
                <div className="card-face card-face-back">
                  {it === 0 ? '归零' : it}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      ))}
      <p style={{ fontSize: 20 }}>游戏开发者【万晴】，祝大家玩得开心！</p>
    </div>
  );
}

export default App;
