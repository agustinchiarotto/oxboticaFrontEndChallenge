import { ChevronLeftIcon } from '@heroicons/react/solid';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';

interface Props {
  title: string;
  showBackButton?: boolean;
}

const Header = ({ title, showBackButton = false }: Props) => {
  const history = useHistory();

  const onClickGobackHandler = () => {
    history.goBack();
  };

  return (
    <div className={styles.headerContainer}>
      {showBackButton && (
        <div className={styles.flexRow} onClick={onClickGobackHandler}>
          <ChevronLeftIcon className={styles.goBackButton} />
          <h4>Back</h4>
        </div>
      )}
      <h1 className={`${styles.title} ${!showBackButton && styles.marginTop}`}>{title}</h1>
    </div>
  );
};

export default Header;
