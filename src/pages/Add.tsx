import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import z from "zod";

const validate = z.object({
  title: z.string().min(1),
  poster: z.string().min(1),
  duration: z.number().min(1),
  category: z.string().min(1),
});

function AddPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validate),
    defaultValues: {
      duration: 0,
    },
  });
  const { id } = useParams();

  useEffect(() => {
    const getDetail = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/movies/" + id);
        reset(data);
      } catch (error) {
        toast.error("Loi roi");
      }
    };
    if (id) {
      getDetail();
    }
  }, [id]);

  const onSubmit = async (values: any) => {
    try {
      if (id) {
        await axios.put("http://localhost:3000/movies/" + id, values);
      } else {
        await axios.post("http://localhost:3000/movies", values);
      }

      toast.success("vui qua, xong add roi");
    } catch (error) {
      toast.error("Loi roi");
    }
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Text input */}
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Title
          </label>
          <input
            {...register("title")}
            type="text"
            id="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span>{errors?.title?.message}</span>
        </div>
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Poster
          </label>
          <input
            {...register("poster")}
            type="text"
            id="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span>{errors?.poster?.message}</span>
        </div>

        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Duration
          </label>
          <input
            {...register("duration", { valueAsNumber: true })}
            type="number"
            id="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span>{errors?.duration?.message}</span>
        </div>
        {/* Select */}
        <div>
          <label htmlFor="selectOption" className="block font-medium mb-1">
            Select - option
          </label>
          <select
            {...register("category")}
            id="selectOption"
            className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Hành động">Hành động</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <span>{errors?.category?.message}</span>
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

export default AddPage;
