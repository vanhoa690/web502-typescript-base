import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface JobData {
  email: string;
  password: string;
}
function Register() {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobData>();

  function addJob(data: JobData) {
    axios.post("http://localhost:3000/register", data).then(() => {
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
            email
          </label>
          <input
            {...register("email", { required: "Nhap email" })}
            type="text"
            id="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors?.email && <span>{errors?.email.message}</span>}
        </div>
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            password
          </label>
          <input
            {...register("password", { required: "Nhap password" })}
            type="text"
            id="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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

export default Register;
