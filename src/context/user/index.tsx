import React, { useState } from 'react';
import UserService from '../../service/user';
import { IUser } from '../../interfaces/user';

import UserContext from './state';

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>();

  const handleGetUser = () => {
    UserService.getUser().then((getUser) => {
      setUser(getUser.data() as IUser);
    });
  };

  const handleUpdateUser = (newUser: IUser) => UserService.updateUser(newUser);

  const uploadImageAsync = async (uri, filename) => new Promise(async (res, rej) => {
    const response = await fetch(filename);
    const file = await response.blob();
    const upload = UserService.uploadImage(uri, file);

    upload.on(
      'state_changed',
      () => {},
      (err) => { rej(err); },
      async () => {
        const url = await upload.snapshot.ref.getDownloadURL();
        res(url);
      },
    );
  });

  const value = {
    user,
    handleGetUser,
    handleUpdateUser,
    uploadImageAsync,
  };

  return (<UserContext.Provider value={value}>{children}</UserContext.Provider>);
};

export default UserProvider;
