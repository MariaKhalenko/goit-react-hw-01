import css from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="80" />
      <p className={css.nameFriends}>{name}</p>
      {isOnline ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </div>
  );
};
export default FriendListItem;
