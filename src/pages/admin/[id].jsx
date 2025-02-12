import React from "react";
import { useParams } from "react-router-dom";

const ApplicantDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Detail Pelamar</h1>
      <p>Menampilkan detail pelamar dengan ID: {id}</p>
    </div>
  );
};

export default ApplicantDetail;
