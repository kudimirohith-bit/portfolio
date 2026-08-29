import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function HeaderFlashBar() {
  const location = useLocation();
  const [flashing, setFlashing] = useState(false);

  useEffect(() => {
    setFlashing(true);
    const timer = setTimeout(() => {
      setFlashing(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      id="tab-flash-bar"
      className={flashing ? 'flashing' : ''}
    />
  );
}
