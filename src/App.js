import React, { useState, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import './i18n.config';

const Tab1 = React.lazy(() => import("./tab1"));
const Tab2 = React.lazy(() => import("./tab2"));

const App = () => {
  const { t } = useTranslation('app');
  const [selectedTab, selectTab] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const handleLanguageSelect = (event) => {
    setSelectedLanguage(event.target.value);
    i18next.changeLanguage(event.target.value);
    setCount(count + 1);
  }

  return (
    <div>
      <p className='p-4 pb-0'>{t("title.language")}</p>
      <div className='flex p-4'>
        <label className='p-2'>
          English
          <input
            readOnly
            type='radio'
            value='en'
            checked={selectedLanguage === "en"}
            onChange={handleLanguageSelect}
          />
        </label>
        <label className='p-2'>
          中文
          <input
            readOnly
            type='radio'
            value='zh'
            checked={selectedLanguage === "zh"}
            onChange={handleLanguageSelect}
          />
        </label>
      </div>
      <div className='grid grid-cols-2 gap-0'>
        <button
          className='p-4 border border-gray-400'
          onClick={() => selectTab(0)}
        >
          {t("title.tab1")}
        </button>
        <button
          className='p-4 border border-gray-400'
          onClick={() => selectTab(1)}
        >
          {t("title.tab2")}
        </button>
      </div>
      {selectedTab === 0 && (
        <Suspense fallback='Loading...'>
          <Tab1 />
        </Suspense>
      )}
      {selectedTab === 1 && (
        <Suspense fallback='Loading...'>
          <Tab2 />
        </Suspense>
      )}
    </div>
  );
}

export default App;
