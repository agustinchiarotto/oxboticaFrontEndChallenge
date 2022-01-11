import styles from './styles.module.css';

const Header = ({ title }: { title: string }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

export default Header;
