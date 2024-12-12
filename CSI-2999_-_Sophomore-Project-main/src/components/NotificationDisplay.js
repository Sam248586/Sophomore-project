import React from 'react';
import { useNotification } from '../components/NotificationContext';

function NotificationDisplay() {
  const { notifications } = useNotification();

  return (
    <div className="notification-container">
      {notifications.map((message, index) => (
        <div key={index} className="notification">
          {message}
        </div>
      ))}
    </div>
  );
}

export default NotificationDisplay;
