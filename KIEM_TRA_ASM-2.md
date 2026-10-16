# BÀI KIỂM TRA ASM 2 – QUẢN LÝ THÔNG TIN TUYỂN DỤNG

## React + TypeScript + Axios + JSON Server

**Thời gian:** 60 phút  
**Tổng điểm:** 10 điểm  
**Hình thức:** Thực hành cá nhân

## I. Đề bài

Xây dựng ứng dụng **Job Management – Quản lý thông tin tuyển dụng** sử dụng React, TypeScript, Axios và JSON Server.

### 2. API sử dụng

- Danh sách tin tuyển dụng: `http://localhost:3000/jobs`
- Tài khoản: `http://localhost:3000/users`

### 3. Dữ liệu mẫu

Tạo file `db.json` với nội dung:

```json
{
  "users": [],
  "jobs": [
    {
      "id": "1",
      "title": "Frontend Developer",
      "company": "FPT Software",
      "location": "Hà Nội",
      "salary": 15000000,
      "employmentType": "Full-time",
      "description": "Phát triển giao diện web bằng React."
    },
    {
      "id": "2",
      "title": "Backend Developer",
      "company": "CMC Global",
      "location": "Hà Nội",
      "salary": 18000000,
      "employmentType": "Full-time",
      "description": "Phát triển API bằng Node.js."
    },
    {
      "id": "3",
      "title": "UI/UX Designer",
      "company": "VNG Corporation",
      "location": "TP. Hồ Chí Minh",
      "salary": 12000000,
      "employmentType": "Part-time",
      "description": "Thiết kế giao diện và trải nghiệm người dùng."
    },
    {
      "id": "4",
      "title": "Intern React Developer",
      "company": "Tech Company",
      "location": "Đà Nẵng",
      "salary": 5000000,
      "employmentType": "Internship",
      "description": "Hỗ trợ xây dựng ứng dụng React."
    },
    {
      "id": "5",
      "title": "Tester",
      "company": "ABC Technology",
      "location": "Hà Nội",
      "salary": 10000000,
      "employmentType": "Full-time",
      "description": "Kiểm thử chức năng của ứng dụng web."
    }
  ]
}
```

---

## II. Nội dung kiểm tra

## Câu 1 – Hiển thị danh sách tin tuyển dụng (2,0 điểm)

Sử dụng Axios và `useEffect` để lấy danh sách tin tuyển dụng từ API:

```http
GET /jobs
```

Hiển thị dữ liệu dưới dạng bảng với các cột:

- STT.
- Tên công việc.
- Công ty tuyển dụng.
- Địa điểm.
- Mức lương.
- Hình thức làm việc.
- Chức năng.

### Yêu cầu

1. Khai báo interface `Job` bằng TypeScript.
2. Sử dụng `useState` để lưu danh sách tin tuyển dụng.
3. Sử dụng `useEffect` để gọi API khi component được khởi tạo.
4. Hiển thị đầy đủ dữ liệu lấy từ API.
5. Có thông báo phù hợp khi danh sách trống.
6. Xử lý lỗi khi gọi API thất bại.

## Câu 2 – Thêm tin tuyển dụng mới (2,0 điểm)

Xây dựng form thêm tin tuyển dụng với các trường:

- Tên công việc.
- Tên công ty.
- Địa điểm.
- Mức lương.
- Hình thức làm việc.
- Mô tả công việc.

Hình thức làm việc được chọn từ danh sách:

- Full-time.
- Part-time.
- Internship.

Khi nhấn nút **Thêm tin tuyển dụng**, gửi request:

```http
POST /jobs
```

### Yêu cầu

1. Kiểm tra các trường bắt buộc không được để trống.
2. Mức lương phải là số hợp lệ lớn hơn 0.
3. Hình thức làm việc phải được chọn từ danh sách cho phép.
4. Sau khi thêm thành công, cập nhật danh sách trên giao diện.
5. Xóa dữ liệu form sau khi thêm thành công.
6. Hiển thị thông báo khi thêm thành công hoặc thất bại.

## Câu 3 – Sửa và xóa tin tuyển dụng (2,0 điểm)

### a. Sửa tin tuyển dụng (1,0 điểm)

Mỗi tin tuyển dụng có nút **Sửa**.

Khi nhấn nút Sửa:

- Hiển thị thông tin hiện tại lên form.
- Cho phép chỉnh sửa các trường thông tin.
- Khi nhấn nút Cập nhật, gửi request:

```http
PUT /jobs/:id
```

**Yêu cầu:**

1. Form hiển thị đúng dữ liệu của tin tuyển dụng được chọn.
2. Kiểm tra dữ liệu trước khi cập nhật.
3. Sau khi cập nhật thành công, danh sách hiển thị dữ liệu mới.
4. Không tạo thêm bản ghi mới khi cập nhật.

### b. Xóa tin tuyển dụng (1,0 điểm)

Mỗi tin tuyển dụng có nút **Xóa**.

Khi nhấn nút Xóa, gửi request:

```http
DELETE /jobs/:id
```

**Yêu cầu:**

1. Có xác nhận trước khi xóa.
2. Sau khi xóa thành công, loại bỏ tin tuyển dụng khỏi danh sách.
3. Không cần tải lại trang để thấy kết quả.
4. Hiển thị thông báo phù hợp khi thao tác thất bại.

## Câu 4 – Đăng ký và đăng nhập tài khoản (2,0 điểm)

Xây dựng hai trang **Register** và **Login**.

### a. Đăng ký tài khoản (1,0 điểm)

Trang đăng ký gồm các trường:

- Username.
- Email.
- Password.
- Confirm Password.

Khi nhấn nút Đăng ký, thực hiện kiểm tra dữ liệu và gửi request:

```http
POST /register
```

**Yêu cầu:**

1. Username không được để trống.
2. Email phải đúng định dạng cơ bản.
3. Password tối thiểu 6 ký tự.
4. Confirm Password phải trùng với Password.
5. Không cho phép đăng ký username đã tồn tại.
6. Đăng ký thành công thì thông báo và điều hướng đến trang Login.

### b. Đăng nhập (1,0 điểm)

Trang đăng nhập gồm:

- Username.
- Password.

Sử dụng Axios để kiểm tra thông tin tài khoản thông qua API JSON Server.

```http
POST /login
```

**Yêu cầu:**

1. Kiểm tra username và password không được để trống.
2. Đăng nhập đúng thì lưu thông tin phiên đăng nhập vào `localStorage`.
3. Đăng nhập thành công thì điều hướng đến trang `/`.
4. Đăng nhập sai thì hiển thị thông báo lỗi.
5. Người dùng đã đăng nhập có thể đăng xuất bằng nút Logout.
6. Khi đăng xuất, xóa thông tin phiên đăng nhập và điều hướng về trang Login.

## Câu 5 – Bảo vệ route và kiểm soát truy cập (2,0 điểm)

Sử dụng React Router DOM để xây dựng cơ chế bảo vệ route.

### Các route yêu cầu

| Route       | Chức năng            | Quyền truy cập |
| ----------- | -------------------- | -------------- |
| `/login`    | Đăng nhập            | Công khai      |
| `/register` | Đăng ký              | Công khai      |
| `/`         | Danh sách tuyển dụng | Phải đăng nhập |
| `/add`      | Thêm tin tuyển dụng  | Phải đăng nhập |
| `/edit/:id` | Sửa tin tuyển dụng   | Phải đăng nhập |

### Yêu cầu

1. Xây dựng component `PrivateRoute` hoặc `ProtectedRoute`.
2. Kiểm tra trạng thái đăng nhập trước khi cho phép truy cập route được bảo vệ.
3. Nếu chưa đăng nhập mà truy cập `/`, `/add` hoặc `/edit/:id`, điều hướng về `/login`.
4. Sau khi đăng nhập thành công, người dùng được truy cập các trang quản lý.
5. Khi tải lại trang, trạng thái đăng nhập được khôi phục từ `localStorage`.
6. Khi nhấn Logout, người dùng không còn truy cập được các trang được bảo vệ nếu chưa đăng nhập lại.

---

## III. Yêu cầu giao diện và kỹ thuật

- Giao diện rõ ràng, dễ sử dụng.
- Có điều hướng giữa Login, Register và trang quản lý tuyển dụng.
- Các thao tác CRUD phải gọi API thông qua Axios.
- Khai báo kiểu dữ liệu bằng TypeScript.

---

## IV. Tổng kết thang điểm

| Nội dung                              |     Điểm |
| ------------------------------------- | -------: |
| Câu 1 – Hiển thị danh sách tuyển dụng |      2,0 |
| Câu 2 – Thêm tin tuyển dụng           |      2,0 |
| Câu 3 – Sửa và xóa tin tuyển dụng     |      2,0 |
| Câu 4 – Đăng ký và đăng nhập          |      2,0 |
| Câu 5 – Bảo vệ route                  |      2,0 |
| **Tổng cộng**                         | **10,0** |

## V. Tiêu chí đánh giá

- **Hoàn thành tốt:** Các chức năng hoạt động đúng, gọi API chính xác, validate dữ liệu và bảo vệ route đầy đủ.
- **Hoàn thành:** Các chức năng chính hoạt động nhưng còn thiếu một số kiểm tra dữ liệu hoặc xử lý lỗi.
- **Chưa hoàn thành:** Giao diện có nhưng chưa kết nối API đúng, thao tác CRUD không hoạt động hoặc route chưa được bảo vệ.
