export const profile = {
  name: "Hoang Manh Cuong",
  role: "Node.js Backend / Full-stack Developer",
  headline:
    "Fresher developer tập trung xây dựng REST API rõ ràng, backend NestJS có cấu trúc và sản phẩm web có thể chạy thật.",
  email: "your.email@example.com",
  phone: "0336388758",
  zalo: "0336388758",
  github: "https://github.com/cuongherok4",
  facebook: "https://www.facebook.com/hoang.manh.cuong.953981/",
  linkedin: "",
  gpa: "3.63",
  cvUrl: "/cv.pdf"
};

export const skills = [
  {
    group: "Node.js / Backend",
    items: [
      "Node.js",
      "NestJS",
      "REST API",
      "Authentication",
      "Authorization",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Docker"
    ]
  },
  {
    group: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    group: "Backend khác",
    items: ["Spring Boot", "Laravel", "CRUD design", "MVC"]
  },
  {
    group: "AI / ML",
    items: ["RAG", "LangChain", "ChromaDB", "Embeddings", "Ollama", "QLoRA", "YOLO"]
  }
];

export const projects = [
  {
    name: "VPT Code Arena",
    type: "Full-stack / Coding Platform",
    problem:
      "Xây dựng nền tảng luyện tập/làm bài lập trình, cần tổ chức dữ liệu bài toán, người dùng và luồng nộp bài rõ ràng.",
    role: "Thiết kế cấu trúc ứng dụng, phát triển các luồng backend và giao diện phục vụ trải nghiệm luyện code.",
    stack: ["Next.js", "Node.js", "REST API", "Database"],
    result:
      "Dự án thể hiện khả năng triển khai sản phẩm full-stack có bài toán nghiệp vụ cụ thể.",
    repo: "https://github.com/cuongherok4/vpt-code-arena"
  },
  {
    name: "Personal Portfolio API",
    type: "Node.js Full-stack",
    problem:
      "Portfolio cần chứng minh năng lực full-stack bằng frontend gọi API backend riêng.",
    role: "Dựng Next.js App Router, NestJS REST API, contact endpoint và cấu trúc monorepo.",
    stack: ["Next.js", "NestJS", "TypeScript", "REST API"],
    result:
      "Trang portfolio có backend thật, dễ bổ sung database, email service và analytics tải CV.",
    repo: "https://github.com/cuongherok4/portfolio"
  },
  {
    name: "Phone Store",
    type: "Backend Admin",
    problem:
      "Quản lý sản phẩm điện thoại với biến thể, thuộc tính, hình ảnh và quy trình CRUD.",
    role: "Xây dựng luồng quản trị, model dữ liệu và các màn hình thao tác nội bộ.",
    stack: ["Laravel", "MySQL", "Blade", "Bootstrap"],
    result:
      "Nhấn mạnh tư duy backend CRUD, quan hệ dữ liệu và thao tác quản trị thực tế.",
    repo: "https://github.com/cuongherok4/phone-store"
  },
  {
    name: "AI Scam Call Detection Backend",
    type: "Node.js / AI Backend",
    problem:
      "Phát hiện cuộc gọi lừa đảo bằng AI, cần backend tiếp nhận dữ liệu và phục vụ luồng xử lý/phân tích.",
    role: "Phát triển backend cho ứng dụng AI scam detection, tập trung API và luồng tích hợp mô hình.",
    stack: ["Node.js", "Backend API", "AI Integration"],
    result:
      "Dự án kết nối trực tiếp năng lực backend Node.js với bài toán AI có tính ứng dụng.",
    repo: "https://github.com/cuongherok4/ai-scam-call-detection-backend",
    article: "https://vjai.org.vn/vn/vjai/article/view/21/190"
  },
  {
    name: "Blockchain Copyright Registration",
    type: "Blockchain / Backend",
    problem:
      "Ứng dụng blockchain vào đăng ký bản quyền, cần quản lý dữ liệu và minh chứng sở hữu minh bạch.",
    role: "Xây dựng luồng đăng ký, lưu trữ thông tin bản quyền và tích hợp logic blockchain.",
    stack: ["Blockchain", "Smart Contract", "Backend"],
    result:
      "Thể hiện khả năng tìm hiểu công nghệ mới và áp dụng vào bài toán xác thực dữ liệu.",
    repo: "https://github.com/cuongherok4/Using-blockchain-to-register-copyright"
  },
  {
    name: "RAG Laptop Advisory Chatbot",
    type: "AI / Graduation Project",
    problem:
      "Hỗ trợ tư vấn laptop dựa trên tri thức sản phẩm và phản hồi có kiểm soát.",
    role: "Thiết kế pipeline RAG, vector store, prompt flow và vòng human-in-the-loop.",
    stack: ["LangChain", "ChromaDB", "Ollama", "Llama3.2:3b"],
    result:
      "Thể hiện khả năng kết hợp backend workflow với AI tooling trong bài toán có ngữ cảnh."
  }
];

export const experience = [
  {
    role: "Backend Developer",
    company: "HTS Company",
    period: "Cập nhật thời gian làm việc",
    details:
      "Tham gia phát triển backend với NestJS, làm việc với API, validation và các luồng nghiệp vụ phía server."
  }
];
