export const profile = {
  name: "Cuong",
  role: "Node.js Backend / Full-stack Developer",
  headline:
    "Fresher developer tập trung xây dựng REST API rõ ràng, backend NestJS có cấu trúc và sản phẩm web có thể chạy thật.",
  email: "your.email@example.com",
  github: "https://github.com/cuongherok4",
  linkedin: "https://www.linkedin.com/in/your-profile",
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
    name: "VPT Ecosystem MVP",
    type: "Backend/System",
    problem:
      "Xây dựng MVP hệ sinh thái với nhiều module nghiệp vụ, cần API rõ ràng và dữ liệu nhất quán.",
    role: "Thiết kế API, tổ chức backend, tích hợp cache và triển khai môi trường chạy bằng Docker.",
    stack: ["Spring Boot", "Next.js", "MySQL", "Redis", "Docker"],
    result:
      "Tập trung vào kiến trúc hệ thống, phân tách module và luồng dữ liệu dễ mở rộng."
  },
  {
    name: "Personal Portfolio API",
    type: "Node.js Full-stack",
    problem:
      "Portfolio cần chứng minh năng lực full-stack bằng frontend gọi API backend riêng.",
    role: "Dựng Next.js App Router, NestJS REST API, contact endpoint và cấu trúc monorepo.",
    stack: ["Next.js", "NestJS", "TypeScript", "REST API"],
    result:
      "Trang portfolio có backend thật, dễ bổ sung database, email service và analytics tải CV."
  },
  {
    name: "Laravel Phone Store Admin Panel",
    type: "Backend Admin",
    problem:
      "Quản lý sản phẩm điện thoại với biến thể, thuộc tính, hình ảnh và quy trình CRUD.",
    role: "Xây dựng luồng quản trị, model dữ liệu và các màn hình thao tác nội bộ.",
    stack: ["Laravel", "MySQL", "Blade", "Bootstrap"],
    result:
      "Nhấn mạnh tư duy backend CRUD, quan hệ dữ liệu và thao tác quản trị thực tế."
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
  },
  {
    name: "Vietnamese NL2SQL + Computer Vision Labs",
    type: "AI / ML",
    problem:
      "Thử nghiệm fine-tuning mô hình tiếng Việt cho NL2SQL và nhận diện ảnh cơ bản.",
    role: "Chuẩn bị dữ liệu, huấn luyện thử nghiệm và đánh giá luồng suy luận.",
    stack: ["QLoRA", "PEFT", "YOLO", "Python"],
    result:
      "Là điểm cộng AI/ML, bổ trợ tư duy xử lý dữ liệu và đánh giá mô hình."
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
