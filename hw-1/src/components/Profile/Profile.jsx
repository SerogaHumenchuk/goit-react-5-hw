import React from 'react';
import s from './Profile.module.css';

const Profile = ({ user }) => (
  <div className={s.profile}>
    <div className={s.description}>
      <img src={user.avatar} alt="user avatar" className={s.avatar} />
      <p className={s.name}>{user.name}</p>
      <p className={s.tag}>{user.tag}</p>
      <p className={s.location}>{user.location}</p>
    </div>

    <ul className={s.stats}>
      {user.stats &&
        Object.entries(user.stats).map(el => (
          <li className={s.item} key={el[0]}>
            <span className={s.label}>{el[0]}</span>
            <span className={s.quantity}>{el[1]}</span>
          </li>
        ))}
    </ul>
  </div>
);

export default Profile;
