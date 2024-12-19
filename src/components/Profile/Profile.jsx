import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profileContainer}>
      <div>
        <img className={styles.profileImg} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.statsList}>
        <li className={styles.statsItem}>
          <span>Followers</span>
          <span className={styles.fontWeightBold}>{stats.followers}</span>
        </li>

        <li className={styles.statsItem}>
          <span>Views</span>
          <span className={styles.fontWeightBold}>{stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span>Likes</span>
          <span className={styles.fontWeightBold}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
