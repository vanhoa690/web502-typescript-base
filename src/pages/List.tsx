import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

type Movie = {
  id: number;
  title: string;
  poster: string;
  duration: number;
  category: string;
};

function ListPage() {
  const [movies, setMoives] = useState<Movie[]>([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/movies");
        setMoives(data);
      } catch (error) {
        toast.error("Loi roi");
      }
    };
    getAll();
  }, []);

  const handleDetele = async (id: number) => {
    try {
      if (confirm("Co muon xoa khong")) {
        await axios.delete(`http://localhost:3000/movies/${id}`);
        setMoives(movies.filter((item) => item.id !== id));
        toast.success("Xoa dc roi");
      }
    } catch (error) {
      toast.error("Loi roi");
    }
  };
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
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {movies.map((item) => (
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{item.id}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.title}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  Description
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <button onClick={() => handleDetele(item.id)}>Delelte</button>
                  <button className="mx-2">
                    <a href={`/edit/${item.id}`}>Edit</a>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;
