import styles from './style.module.css';

export const NotFoundError = () => {
  return (
    <div className={styles.error}>
      <p className={styles.message}>Sorry this page is not available</p>
      <img
        src="https://static.vecteezy.com/system/resources/previews/019/518/507/non_2x/404-error-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg"
        alt="error 404 page not found"
      />
    </div>
  );
};
