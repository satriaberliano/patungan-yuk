import React from "react";
import AddNewPatungan from "../components/AddNewPatungan";
import {db} from '../config/firebase-config';
import { addDoc, collection } from "firebase/firestore"

function AddNewPatunganPage() {
  const patunganCollectionRef = collection(db, "patungan")

  function onAddPatunganHandler(patungan) {
    const idUser = patungan.idUser;
    const idShare = patungan.idShare;
    const title = patungan.title;
    const Members = patungan.Members;
    const Activity = patungan.Activity;

    const createPatungan = async () => {
      await addDoc(patunganCollectionRef, {idUser: idUser, idShare: String(idShare), title: title, Members: Members, Activity: Activity})
    }

    createPatungan();
  }

  return (
    <AddNewPatungan newPatungan={onAddPatunganHandler} />
  );
};

export default AddNewPatunganPage;