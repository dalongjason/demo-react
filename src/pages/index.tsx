import React from 'react';
import { Link } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <div>
        <Link to="/about">goto about</Link>
      </div>
      <div>
        <Link to="/useFetch">UseFetch</Link>
      </div>
    </div>
  );
}
