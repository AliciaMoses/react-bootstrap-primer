const importModuleCode = `
import React from 'react';
import styles from './styles.module.css';

const MyComponent = () => {
  return (
    <div className={styles.myClass}>
      Hello World!
    </div>
  );
};

export default MyComponent;
`;

export default importModuleCode;
