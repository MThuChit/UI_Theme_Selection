import { useSettings } from '../context/SettingsContext';

const SettingsPanel = () => {
  const { theme, setTheme, language, setLanguage, resetSettings } = useSettings();

  return (
    <div className="panel">
      <h3>Settings</h3>
      <div className="row">
        <span>Theme</span>
        <div className="pill-group">
          <button className={theme === 'light' ? 'active' : ''} onClick={() => setTheme('light')}>Light</button>
          <button className={theme === 'dark' ? 'active' : ''} onClick={() => setTheme('dark')}>Dark</button>
        </div>
      </div>
      <div className="row">
        <span>Language</span>
        <div className="pill-group">
          <button className={language === 'EN' ? 'active' : ''} onClick={() => setLanguage('EN')}>EN</button>
          <button className={language === 'TH' ? 'active' : ''} onClick={() => setLanguage('TH')}>TH</button>
        </div>
      </div>
      <div className="row">
        <span>Actions</span>
        <button className="reset-btn" onClick={resetSettings}>Reset</button>
      </div>
    </div>
  );
};

export default SettingsPanel;