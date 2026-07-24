# BÀI KIỂM TRA THỰC HÀNH (30 PHÚT)

---

# Mục tiêu

Xây dựng ứng dụng **Quản lý danh sách phim (Movie List)** sử dụng:

---

# Dữ liệu db.json

```json
[
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
```

---

# Yêu cầu

## Câu 1 (2 điểm)

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
- Lọc trên dữ liệu đã có.

---

## Câu 5 (1 điểm)

Hiển thị tổng số phim.

---

## Câu 6 (1 điểm)

Thêm nút Delete để xóa phim, có confirm trước khi xóa, và hiển thị thông báo.

---

## Câu 7 (1 điểm)

Hiển thị Loading trong lúc gọi API.

Sau khi có dữ liệu thì ẩn Loading.

---

## Câu 8 (1 điểm)

Nếu API lỗi thì hiển thị lỗi `Không thể tải dữ liệu`

---

# Câu hỏi lý thuyết (2 điểm)

---

## Câu 2

Lệnh **tsx, tsc** file **tsconfig.json** có tác dụng gì?

---

## Câu 4

Kể tên 5 kiểu dữ liệu cơ bản trong TypeScript.

---

## Câu 5

Viết hàm nhận vào tên và tuổi rồi in ra:

```text
Xin chào Hòa, 20 tuổi
```

Ví dụ:

```ts
function hello(name: string, age: number): void {
  console.log(`Xin chào ${name}, ${age} tuổi`);
}
```

---

## Câu 6

Interface dùng để làm gì?

**Trả lời:**

Interface dùng để định nghĩa cấu trúc của một đối tượng, giúp kiểm tra kiểu dữ liệu khi lập trình.

Ví dụ:

```ts
interface Movie {
  id: number;
  title: string;
}
```

---

## Câu 7

`type` khác `interface` ở điểm nào?

**Trả lời:**

- `interface` chủ yếu dùng để mô tả cấu trúc object và có thể mở rộng (`extends`).
- `type` linh hoạt hơn, có thể định nghĩa object, union (`|`), intersection (`&`), tuple hoặc alias cho các kiểu dữ liệu khác.

---

## Câu 8

Class trong TypeScript dùng để làm gì?
