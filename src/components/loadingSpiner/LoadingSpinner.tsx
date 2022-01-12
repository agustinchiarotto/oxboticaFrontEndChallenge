import Loader from 'react-loader-spinner';
import styles from './styles.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.center}>
      <h1 className={styles.title}>Loading...</h1>
      <Loader type="Puff" color="#2bbdbf" height={100} width={100} />
    </div>
  );
};

export default LoadingSpinner;
