# BÀI KIỂM TRA THỰC HÀNH (30 PHÚT)

---

# Mục tiêu

Xây dựng ứng dụng **Quản lý danh sách phim (Movie List)** sử dụng:

---

# Dữ liệu db.json

```json
{
  "movies": [
    {
      "id": 1,
      "title": "Avengers: Endgame",
      "year": 2019,
      "genre": "Action"
    },
    {
      "id": 2,
      "title": "Spider-Man",
      "year": 2021,
      "genre": "Action"
    },
    {
      "id": 3,
      "title": "Frozen",
      "year": 2019,
      "genre": "Animation"
    }
  ]
}
```

---

# Yêu cầu

## Câu 1 (1 điểm)

Tạo Interface cho Movie.

---

## Câu 2 (2 điểm)

Sử dụng:

- useState
- useEffect

để gọi API và hiển thị danh sách phim.

---

## Câu 3 (2 điểm)

Hiển thị dữ liệu dưới dạng **Table**.

Ví dụ:

| ID  | Tên phim | Năm  | Thể loại | Action |
| --- | -------- | ---- | -------- | ------ |
| 1   | Avengers | 2019 | Action   | Delete |

Sử dụng Tailwind CSS để tạo giao diện đẹp.

---

## Câu 4 (1 điểm)

Thêm ô tìm kiếm.

Yêu cầu:

- Tìm theo tên phim.
- Không cần gọi lại API.
- Tìm kiếm trên dữ liệu đã có.

---

## Câu 6 (1 điểm)

Thêm nút Delete để xóa phim.

Confirm trước khi xóa.

Hiển thị thông báo xóa thành công.

---

## Câu 7 (1 điểm)

Hiển thị Loading trong lúc gọi API.

Sau khi có dữ liệu thì ẩn Loading.

Nếu API lỗi thì hiển thị lỗi `Không thể tải dữ liệu`

# Câu hỏi lý thuyết (2 điểm)

## Câu 1

Lệnh **tsx, tsc** để làm gì ?

File **tsconfig.json** có tác dụng gì? tạo ra bằng cách nào ?

---

## Câu 2

Interface dùng để làm gì?

Class trong TypeScript dùng để làm gì?
