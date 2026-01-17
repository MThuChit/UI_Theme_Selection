import { useSettings } from '../context/SettingsContext.jsx';

const SettingsPanel = () => {
  const { theme, setTheme, language, setLanguage, resetSettings } = useSettings();

  return (
    <section className="panel">
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light Mode</option>
        <option value="dark">Dark Mode</option>
      </select>

      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English (EN)</option>
        <option value="th">Thai (TH)</option>
      </select>

      <button onClick={resetSettings}>Reset Settings</button>
    </section>
  );
};

export default SettingsPanel;