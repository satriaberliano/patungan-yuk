import React from "react";
import AddNewPatungan from "../components/AddNewPatungan";

function AddNewPatunganPage() {
  function onAddPatunganHandler(patungan) {
    // belum dimasukkan ke database
    console.log(patungan);
  }

  return (
    <AddNewPatungan newPatungan={onAddPatunganHandler} />
  );
};

export default AddNewPatunganPage;