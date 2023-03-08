import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../constants/action_types/user';
import { getUsersFetch } from '../../reducers/userSlice';

const UserView = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);


  return (
      <table className="shadow-lg bg-white border-separate">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          { users.forEach((user) =>
              <tr key={user.idd}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
          )}
        </tbody>
      </table>
  )
}

export default UserView;
