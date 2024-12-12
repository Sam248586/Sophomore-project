import React, { createContext, useState, useContext, useEffect } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // Request permission on mount
  useEffect(() => {
    if (Notification.permission === 'default') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
        } else if (permission === 'denied') {
          console.log('Notification permission denied.');
        }
      });
    }
  }, []);

  const addNotification = (message) => {
    if (notificationsEnabled) {
      setNotifications((prev) => [...prev, message]);
      setTimeout(() => {
        setNotifications((prev) => prev.filter((noti) => noti !== message));
      }, 3000); // Auto-remove after 3 seconds

      // Browser notification
      if (Notification.permission === 'granted') {
        new Notification('FitTrax', {
          body: message,
          icon: '/logo192.png', // Update this path if your logo is different
        });
      } else {
        console.log('Browser notifications are not permitted.');
      }
    } else {
      console.log('Notifications are disabled.');
    }
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, notificationsEnabled, setNotificationsEnabled }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
