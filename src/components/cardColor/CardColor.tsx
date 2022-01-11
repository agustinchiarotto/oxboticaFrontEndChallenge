import styles from './styles.module.css';

const CardColor = ({ color }: { color: string }) => {
  return <div style={{ backgroundColor: color }} className={styles.cardColor} />;
};

export default CardColor;
