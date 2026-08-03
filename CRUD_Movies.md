# BÀI KIỂM TRA THỰC HÀNH

## Mục tiêu

Xây dựng ứng dụng **Quản lý danh sách phim (Movie Manager)** sử dụng
**React + TypeScript + JSON Server + Tailwind CSS**.

---

# Dữ liệu `db.json`

```json
{
  "movies": [
    {
      "id": 1,
      "title": "Avengers: Endgame",
      "year": 2019,
      "genre": "Action",
      "director": "Anthony Russo",
      "rating": 8.4,
      "available": true
    },
    {
      "id": 2,
      "title": "Spider-Man: No Way Home",
      "year": 2021,
      "genre": "Action",
      "director": "Jon Watts",
      "rating": 8.2,
      "available": true
    },
    {
      "id": 3,
      "title": "Frozen II",
      "year": 2019,
      "genre": "Animation",
      "director": "Chris Buck",
      "rating": 6.8,
      "available": false
    }
  ]
}
```

## Yêu cầu

### Câu 1 (1 điểm)

Tạo interface `Movie`.

### Câu 2 (2 điểm)

Dùng `useState` và `useEffect` để gọi API và hiển thị danh sách phim.

### Câu 3 (2 điểm)

Hiển thị dữ liệu dạng bảng bằng Tailwind CSS.

Các cột: - ID - Tên phim - Năm - Thể loại - Đạo diễn - Đánh giá - Trạng
thái - Action (Edit, Delete)

### Câu 4 (2 điểm)

Thêm phim mới.

Validate:

- Không để trống.
- Năm \>= 1900.
- Rating từ 0 đến 10.

### Câu 5 (1 điểm)

Cập nhật thông tin phim.

### Câu 6 (1 điểm)

Xóa phim.

- Có confirm trước khi xóa.
- Thông báo thành công.

### Câu 7 (1 điểm)

Tìm kiếm theo tên phim (không gọi lại API).

### Câu 8 (1 điểm)

Hiển thị Loading khi tải dữ liệu.

Nếu lỗi API hiển thị: `Không thể tải dữ liệu.`

# Câu hỏi lý thuyết (2 điểm)

## Câu 1

- Phân biệt `tsc` và `tsx`.
- `tsconfig.json` dùng để làm gì?
- Tạo `tsconfig.json` bằng cách nào?

## Câu 2

- Interface dùng để làm gì?
- Class dùng để làm gì?
- Phân biệt Interface và Class.

# Thang điểm

Nội dung Điểm

---

Interface 1
Gọi API 2
Hiển thị Table 2
Thêm 2
Sửa 1
Xóa 1
Tìm kiếm 1
Loading & Error 1
Lý thuyết 2
