import React from "react";
import JobForm from "../../../components/pages/admin/jobs/JobForm";

const AddJob = () => {
  const handleSubmit = (newJob) => {
    console.log("Lowongan Ditambahkan:", newJob);
    alert("Lowongan berhasil ditambahkan!");
  };

  return (
    <div className="container mx-auto p-6">
      <JobForm
        initialData={{
          title: "",
          description: "",
          requirements: "",
          location: "",
          salaryRange: "",
          employmentType: "Full-Time",
          experienceLevel: "Entry",
          department: "",
          status: "open",
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddJob;