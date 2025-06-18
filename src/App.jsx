import { useTranslation } from 'react-i18next';
import './utils/i18n/index';
import { useEffect } from 'react';
import i18n from './utils/i18n/index';

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language)
  }, [])

  return (
    <>
      <div>
        <h1>{t('helloMessage', {
          user: 'Akshay'
        })}</h1>
        {t('welcomeMessage')}
      </div>
    </>
  )
}

export default App
