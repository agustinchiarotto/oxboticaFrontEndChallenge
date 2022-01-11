import styles from './styles.module.css';

const Card = ({ title, data, img }: { title: string; data: any; img: string }) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <img src={img} className={styles.icon} />
        <p className={styles.data}>{data}</p>
      </div>
    </div>
  );
};

export default Card;
