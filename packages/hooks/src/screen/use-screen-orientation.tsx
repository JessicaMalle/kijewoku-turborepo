import { useState, useEffect } from 'react';

function useScreenOrientation(): 'portrait' | 'landscape' {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    window.innerWidth < window.innerHeight ? 'portrait' : 'landscape'
  );

  const adjustOrientation = () => {
    setOrientation(window.innerWidth < window.innerHeight ? 'portrait' : 'landscape');
  };

  useEffect(() => {
    window.addEventListener('resize', adjustOrientation);
    return () => {
      window.removeEventListener('resize', adjustOrientation);
    };
  }, []);

  return orientation;
}

export default useScreenOrientation;
