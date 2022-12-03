import React from 'react';
import { addDoc, collection } from 'firebase/firestore';
import AddNewPatungan from '../components/AddNewPatungan';
import { db } from '../globals/firebase-config';

function AddNewPatunganPage() {
  const patunganCollectionRef = collection(db, 'patungan');

  function onAddPatunganHandler(patungan) {
    const {
      idUser, idShare, title, Members, Activity,
    } = patungan;

    const createPatungan = async () => {
      await addDoc(patunganCollectionRef, {
        idUser, idShare: String(idShare), title, Members, Activity,
      });
    };

    createPatungan();
  }

  return (
    <AddNewPatungan newPatungan={onAddPatunganHandler} />
  );
}

export default AddNewPatunganPage;
