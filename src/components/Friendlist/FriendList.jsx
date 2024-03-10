import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={css.friendItem} key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
