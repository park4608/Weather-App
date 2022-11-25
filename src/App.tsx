import React from 'react';
import styles from './App.module.scss';
import { SunRain, ThunderStorm, Cloud, Snow, Sunny, Rainy } from './components/weatherIcon/WeatherIcons';
import PublicLayout from './components/layout/PublicLayout';
import Main from './components/pages/Main';
import D3Samp from './components/D3Samp';

function App() {
  return (
    <div className={styles.App}>
      <PublicLayout>
        <Main />
        {/* <D3Samp /> */}
      </PublicLayout>
    </div>
  );
}

export default App;
