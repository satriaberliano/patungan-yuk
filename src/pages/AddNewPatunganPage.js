import React from "react";
import AddNewPatungan from "../components/AddNewPatungan";
import {db} from '../firebase-config';
import { addDoc, collection } from "firebase/firestore"

function AddNewPatunganPage() {

  const patunganCollectionRef = collection(db, "patungan")

  function onAddPatunganHandler(patungan) {
    const title = patungan.title;
    const Members = patungan.Members;
    const Activity = patungan.Activity;

    const createPatungan = async () => {
      await addDoc(patunganCollectionRef, {title: title, Members: Members, Activity: Activity})
    }

    createPatungan();
  }

  return (
    <AddNewPatungan newPatungan={onAddPatunganHandler} />
  );
};

export default AddNewPatunganPage;