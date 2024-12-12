import React from 'react';
import { useNotification } from '../components/NotificationContext';

function SettingsPage({ theme, setTheme }) {
  const { notificationsEnabled, setNotificationsEnabled, addNotification } = useNotification();

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    addNotification(`Theme changed to ${event.target.value}`);
    localStorage.setItem('theme', event.target.value);
  };

  const handleNotificationToggle = () => {
    setNotificationsEnabled((prevState) => !prevState);
    addNotification(`Notifications ${!notificationsEnabled ? 'enabled' : 'disabled'}.`);
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>

      {/* Theme Selection */}
      <div className="settings-option">
        <label htmlFor="themeSelect">Select Theme:</label>
        <select id="themeSelect" value={theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      {/* Notifications Toggle */}
      <div className="settings-option">
        <label htmlFor="notifications">Enable Notifications:</label>
        <input
          type="checkbox"
          id="notifications"
          checked={notificationsEnabled}
          onChange={handleNotificationToggle}
        />
      </div>

      {/* Save Button */}
      <button className="save-button">Save Settings</button>
    </div>
  );
}

export default SettingsPage;
