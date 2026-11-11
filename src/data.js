// =====================================================
// CHỈ CẦN SỬA FILE NÀY LÀ ĐỔI ĐƯỢC NỘI DUNG TRANG WEB
// =====================================================

export const profile = {
  name: 'Bùi Hải Đăng',
  role: 'Fullstack Node.js Developer',
  tagline:
    'Sinh viên Kỹ thuật phần mềm tại FPT University. Mình thích xây dựng ứng dụng web từ backend đến frontend.',
  about: [
    'Mình là sinh viên Kỹ thuật phần mềm tại FPT University, đang theo hướng fullstack với Node.js.',
    'Mình đang tìm cơ hội thực tập (OJT) để học hỏi và đóng góp trong môi trường làm sản phẩm thật.', // TODO: sửa lại theo ý bạn
  ],
  email: 'hello@buihaidang.id.vn', // TODO: đổi thành email thật (hoặc Gmail tạm thời)
  github: 'https://github.com/NOXELUM',
  linkedin: '', // TODO: dán link LinkedIn, để trống thì sẽ ẩn
  cv: '/cv.pdf', // TODO: bỏ file CV vào thư mục public/ và đặt tên cv.pdf
}

export const skills = [
  { group: 'Backend', items: ['Node.js', 'Express', 'REST API', 'JWT Auth'] },
  { group: 'Frontend', items: ['React', 'JavaScript', 'Tailwind CSS'] },
  { group: 'Database', items: ['PostgreSQL', 'SQL'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Linux'] },
]
// Mẹo: chỉ ghi những gì bạn thật sự dùng được, nhà tuyển dụng sẽ hỏi.

export const projects = [
  {
    title: 'SupportHub AI',
    summary:
      'Hệ thống helpdesk/ticketing có hỗ trợ AI. Dự án cá nhân dùng để luyện thiết kế hệ thống và làm sản phẩm từ đầu.', // TODO: sửa cho đúng thực tế
    stack: ['Spring Boot', 'React', 'PostgreSQL'],
    demo: '', // TODO: link demo, để trống thì ẩn nút
    repo: '', // TODO: link GitHub
    image: '', // TODO: ví dụ '/projects/supporthub.png' (bỏ ảnh vào public/projects/)
  },
  {
    title: 'Sports Center Management',
    summary:
      'Dự án nhóm quản lý trung tâm thể thao: đặt sân, lớp học, hội viên và báo cáo. Mình phụ trách phần backend.', // TODO: ghi rõ phần bạn làm
    stack: ['Node.js', 'React', 'SQL'], // TODO: sửa theo stack thật
    demo: '',
    repo: '',
    image: '',
  },
  {
    title: 'Focus Quest',
    summary:
      'Web app học tập có game hóa (XP, level, streak, phần thưởng) giúp giảm xao nhãng khi học.',
    stack: ['React', 'TanStack'],
    demo: '',
    repo: '',
    image: '',
  },
]
