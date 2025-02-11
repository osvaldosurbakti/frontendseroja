import { Link } from "react-router-dom";

const JobDetail = ({ job }) => {
  if (!job) {
    return <p>Lowongan tidak ditemukan.</p>;
  }

  return (
    <div className="job-detail">
      <h2 className="text-2xl font-bold mb-4">{job.title}</h2>
      <p className="mb-2">{job.description}</p>
      <p className="mb-2">Lokasi: {job.location}</p>
      <p className="mb-4">Gaji: {job.salaryRange || "Negosiasi"}</p>
      <h3 className="font-bold">Persyaratan:</h3>
      <ul className="list-disc ml-5 mb-4">
        {job.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
      <Link
        to={`/karir/apply/${job._id}`}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Lamar Pekerjaan
      </Link>
    </div>
  );
};

export default JobDetail;
