# Portfolio – Bùi Hải Đăng

React + Vite + Tailwind CSS. Toàn bộ nội dung nằm trong `src/data.js`.

## Chạy trên máy

```bash
npm install
npm run dev      # mở http://localhost:5173
```

## Sửa nội dung

- `src/data.js`: tên, giới thiệu, email, kỹ năng, dự án (tìm chữ `TODO`)
- `public/cv.pdf`: bỏ file CV của bạn vào đây
- `public/projects/`: bỏ ảnh chụp project, rồi điền `image: '/projects/ten-anh.png'`
- `src/index.css`: đổi màu chủ đạo (`--color-accent`)

## Deploy

1. Đẩy code lên GitHub
2. Vào vercel.com → Add New Project → chọn repo → Deploy
3. Vercel → Settings → Domains → thêm `buihaidang.id.vn`, làm theo DNS Vercel chỉ dẫn
