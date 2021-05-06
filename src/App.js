import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import './i18n.config';

const App = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const handleLanguageSelect = (event) => {
    setSelectedLanguage(event.target.value);
    i18next.changeLanguage(event.target.value);
    setCount(count + 1);
  }

  return (
    <div>
      <label>
        English
        <input
          type="radio"
          value="en"
          checked={selectedLanguage === 'en'}
          onChange={handleLanguageSelect}
        />
      </label>
      <label>
        中文
        <input
          type="radio"
          value="zh"
          checked={selectedLanguage === 'zh'}
          onChange={handleLanguageSelect}
        />
      </label>
      <p>{t('selectedLanguage', { language: selectedLanguage })}</p>
      <p>{t('numOfTimesSwitchingLanguage', { count })}</p>
      <p>{t('welcome')}</p>
    </div>
  );
}

export default App;
