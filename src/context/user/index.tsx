import React, { useState } from 'react';
import UserService from '../../service/user';
import { IUser } from '../../interfaces/user';

import UserContext from './state';

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>();

  const handleGetUser = () => {
    UserService.getUser().then((getUser) => {
      const fetchUser = {
        id: getUser.id,
        ...getUser.data() as IUser,
      };
      setUser(fetchUser);
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

  const handleChangeMode = () => {
    const newUser = { ...user, mode: !user?.mode };
    setUser(newUser as IUser);
  };

  const value = {
    user,
    handleGetUser,
    handleUpdateUser,
    uploadImageAsync,
    handleChangeMode,
  };

  return (<UserContext.Provider value={value}>{children}</UserContext.Provider>);
};

export default UserProvider;
