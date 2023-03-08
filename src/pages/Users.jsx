import React from 'react';
import { UserAdd, UserView } from '../components';

const Users = () => {
  return (
    <div>
        <div><UserAdd /></div>
        <div className="p-10"><UserView /></div>
    </div>
  )
}

export default Users;
