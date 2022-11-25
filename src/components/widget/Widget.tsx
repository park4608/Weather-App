import React from 'react';
import styles from './Widget.module.scss';
import { SunRain, ThunderStorm, Cloud, Snow, Sunny, Rainy } from '../weatherIcon/WeatherIcons';
import { Typography } from 'antd';
const { Title, Text } = Typography;

function Widget() {
  return (
    <>
      <div className={styles.widget}>
        <Title level={3} style={{ margin: '0', color: '#fff', padding: '5px' }}>
          KR, Asia
        </Title>
        <Snow />
        <div className={styles.desc}>
          <Text style={{ color: '#fff', fontSize: '20px' }}>23°C / 73.4°F</Text>
        </div>
      </div>
    </>
  );
}

export default Widget;
