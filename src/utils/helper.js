import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../globals/firebase-config';

export const getAccessToken = () => localStorage.getItem('accessToken');

export const putAccessToken = (accessToken) => localStorage.setItem('accessToken', accessToken);

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
