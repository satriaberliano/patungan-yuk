import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase-config';

export const getAccessToken = () => localStorage.getItem('accessToken');

export const putAccessToken = (accessToken) => localStorage.setItem('accessToken', accessToken);

export const getUserLogged = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid } = user;
      const name = user.displayName;
      const { email } = user;
      const data = { uid, name, email };
      return data;
    }
    const data = null;
    return data;
  });
};

export const getUserName = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const name = user.displayName;
      setCurrentUser(name);
    } else {
      const name = 'Pengguna';
      setCurrentUser(name);
    }
  });
};

export const getUserID = (setCurrentUserID) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const idUser = user.uid;
      setCurrentUserID(idUser);
    } else {
      const idUser = 'Pengguna';
      setCurrentUserID(idUser);
    }
  });
};
