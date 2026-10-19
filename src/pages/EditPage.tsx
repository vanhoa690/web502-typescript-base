import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

interface JobData {
  title: string;
  company: string;
}
function EditPage() {
  const nav = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3000/jobs/${id}`).then((res) => {
      reset(res.data);
    });
  }, [id]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<JobData>();

  function addJob(data: JobData) {
    axios.put(`http://localhost:3000/jobs/${id}`, data).then(() => {
      alert("thanh cong");
      nav("/");
    });
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <form className="space-y-6" onSubmit={handleSubmit(addJob)}>
        {/* Text input */}
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Title
          </label>
          <input
            {...register("title", { required: "Nhap title" })}
            type="text"
            id="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors?.title && <span>{errors?.title.message}</span>}
        </div>
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            company
          </label>
          <input
            {...register("company", { required: "Nhap company" })}
            type="text"
            id="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Select */}
        <div>
          <label htmlFor="selectOption" className="block font-medium mb-1">
            Select - option
          </label>
          <select
            id="selectOption"
            className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditPage;
