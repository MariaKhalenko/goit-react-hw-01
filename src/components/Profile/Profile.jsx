import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div>
        <img className={css.avatar} src={image} alt="User avatar" width="200" />
        <p className={css.userName}>{name}</p>
        <p className={css.userText}>@{tag}</p>
        <p className={css.userText}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.statsName}>Followers</span>
          <span className={css.statsAmount}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsName}>Views</span>
          <span className={css.statsAmount}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsName}>Likes</span>
          <span className={css.statsAmount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
