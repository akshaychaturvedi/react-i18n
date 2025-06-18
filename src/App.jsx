import { useTranslation } from 'react-i18next';
import './utils/i18n/index';

function App() {
  const { t } = useTranslation();

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
