# Ôn Tập Kiến Thức Cơ Bản Nhất Về TypeScript Và React + TypeScript

---

# I. TypeScript Cơ Bản

## 1. Kiểu dữ liệu cơ bản

```ts
let id: number = 1;
let title: string = "React Course";
let isPublished: boolean = true;
let tags: string[] = ["react", "ts"];
```

---

## 2. Định nghĩa Object Type

### Dùng interface (phổ biến trong React)

```ts
export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  createdAt: string;
}
```

---

## 3. Optional Field

```ts
interface Course {
  id: number;
  title: string;
  description?: string;
}
```

---

## 4. Union Type

```ts
type CourseStatus = "draft" | "published";
```

---

## 5. Generic Type

```ts
interface ApiResponse<T> {
  data: T;
  message: string;
}
```

Ví dụ:

```ts
ApiResponse<Course[]>;
ApiResponse<Course>;
```

---

# II. React + TypeScript Cơ Bản Khi CRUD

## 1. Typing useState

```ts
const [courses, setCourses] = useState<Course[]>([]);
const [loading, setLoading] = useState<boolean>(false);
```

---

## 2. Typing Props Component

```ts
interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return <div>{course.title}</div>;
};
```

---

## 3. Fetch API Với TypeScript

```ts
const fetchCourses = async () => {
  const { data } = await axios.get("http://localhost:3000/courses");
  return data;
};
```

---

## 4. React Hook Form

```ts
const { register, handleSubmit } = useForm();
```

---

## 5. Create / Update / Delete Cơ Bản

### Create

```ts
await axios.post("http://localhost:3000/courses", values);
```

### Update

```ts
await axios.put(`http://localhost:3000/courses/${id}`, values);
```

### Delete

```ts
await axios.delete(`http://localhost:3000/courses/${id}`);
```

---

# III. Các Utility Types Quan Trọng

## Omit

```ts
Omit<Course, "id">;
```

## Pick

```ts
Pick<Course, "title" | "price">;
```

## Partial

```ts
Partial<Course>;
```

---

# IV. Lỗi Thường Gặp

## 1. String không gán được cho number

```ts
price: Number(e.target.value);
```

## 2. Object possibly undefined

```ts
course?.title;
```

---

# V. CRUD Course

```ts
const course = {
  id: 1,
  title: "ReactJS Cơ Bản",
  price: 100000,
  category: "Javascript",
  year: 2026,
};
```
