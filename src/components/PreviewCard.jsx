import { useSettings } from '../context/SettingsContext';

const PreviewCard = () => {
  const { theme, language } = useSettings();
  const t = {
    EN: "This is your preference preview.",
    TH: "นี่คือหน้าตัวอย่างการตั้งค่า"
  };

  return (
    <div className="card">
      <h3>Preview</h3>
      <div className="row">
        <span>Current Theme:</span>
        <strong>{theme}</strong>
      </div>
      <div className="row">
        <span>Current Language:</span>
        <strong>{language}</strong>
      </div>
      <p className="preview-text">{t[language]}</p>
    </div>
  );
};

export default PreviewCard;