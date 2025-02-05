import { useEffect } from 'react';

const Even = () => {
  // 3. unmount
  useEffect(() => {
    return () => {
      console.log('unmounted');
    };
  }, []);

  return <div>偶数です。</div>;
};

export default Even;
