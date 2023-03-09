import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../constants/action_types/user';
import { getUsersFetch } from '../../reducers/userSlice';

const UserView = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const newUser = useSelector((state) => state.user.userData);

  useEffect(() => {
    dispatch(getUsersFetch());
  }, []);
  const usersAll = newUser ? { ...users, newUser } : users;

  const rows = Object.keys(usersAll).map((key) => {
    return (
      <tr key={usersAll[key].id}>
        <td>{usersAll[key].name}</td>
        <td>{usersAll[key].email}</td>
      </tr>
    );
  });

  return (
      <table className="shadow-lg bg-white border-separate">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
  )
}

export default UserView;
