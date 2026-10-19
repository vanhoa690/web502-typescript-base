import { useEffect, useState } from "react";
import axios from "axios";

interface Job {
  id: string;
  title: string;
  company: string;
}

function ListPage() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/jobs").then((res) => {
      setJobs(res.data);
    });
  }, []);

  function deleteJob(id: string) {
    if (confirm("Xoa hay ko")) {
      // confirm trc xoa
      axios.delete(`http://localhost:3000/jobs/${id}`).then(() => {
        alert("Xoa thanh cong");
        setJobs(jobs.filter((item: Job) => item.id != id)); // cap nhat UI
      });
    }
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Description
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Company
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Actions
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((item: Job) => {
              return (
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">
                    {item.id}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {item.title}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    Description
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {item.company}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <a href={`/edit/${item.id}`}>Edit</a>
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <button onClick={() => deleteJob(item.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;
