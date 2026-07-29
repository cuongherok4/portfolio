export type Project = {
  name: string;
  type: string;
  problem: string;
  role: string;
  stack: string[];
  result: string;
  repo?: string;
  article?: string;
};

export const profile = {
  name: "Hoang Manh Cuong",
  role: "Node.js Backend / Full-stack Developer",
  headline:
    "Fresher developer tập trung xây dựng REST API rõ ràng, backend NestJS có cấu trúc và sản phẩm web có thể chạy thật.",
  email: "cuongherok4@gmail.com",
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

export const projects: Project[] = [
  {
    name: "VPT Code Arena NPT",
    type: "Java + Node.js / Full-stack Coding Platform",
    problem:
      "Xây dựng nền tảng luyện tập/làm bài lập trình, cần tổ chức dữ liệu bài toán, người dùng và luồng nộp bài rõ ràng.",
    role: "Tự thiết kế cấu trúc ứng dụng, phát triển các luồng backend và giao diện phục vụ trải nghiệm luyện code.",
    stack: ["Java", "Node.js", "Next.js", "REST API", "Database"],
    result:
      "Dự án cá nhân thể hiện khả năng triển khai sản phẩm full-stack có bài toán nghiệp vụ cụ thể.",
    repo: "https://github.com/cuongherok4/vpt-code-arena"
  },
  {
    name: "Blockchain Copyright Registration",
    type: "Node.js + Solidity / Blockchain Backend",
    problem:
      "Ứng dụng blockchain vào đăng ký bản quyền, cần quản lý dữ liệu và minh chứng sở hữu minh bạch.",
    role: "Tự xây dựng luồng đăng ký, lưu trữ thông tin bản quyền và tích hợp logic blockchain.",
    stack: ["Node.js", "Solidity", "Smart Contract", "Backend"],
    result:
      "Dự án cá nhân thể hiện khả năng dùng Node.js ở lớp backend khi tích hợp với smart contract.",
    repo: "https://github.com/cuongherok4/Using-blockchain-to-register-copyright"
  },
  {
    name: "Phone Store",
    type: "PHP Laravel / Backend Admin",
    problem:
      "Quản lý sản phẩm điện thoại với biến thể, thuộc tính, hình ảnh và quy trình CRUD.",
    role: "Tự xây dựng luồng quản trị, model dữ liệu và các màn hình thao tác nội bộ.",
    stack: ["PHP", "Laravel", "MySQL", "Blade", "Bootstrap"],
    result:
      "Dự án cá nhân nhấn mạnh tư duy backend CRUD, quan hệ dữ liệu và thao tác quản trị thực tế.",
    repo: "https://github.com/cuongherok4/phone-store"
  },
  {
    name: "AI Scam Call Detection Backend",
    type: "Node.js / AI Backend",
    problem:
      "Phát hiện cuộc gọi lừa đảo bằng AI, cần backend tiếp nhận dữ liệu và phục vụ luồng xử lý/phân tích.",
    role: "Tự phát triển backend cho ứng dụng AI scam detection, tập trung API và luồng tích hợp mô hình.",
    stack: ["Node.js", "REST API", "AI Integration", "Backend"],
    result:
      "Dự án cá nhân kết hợp đúng định hướng Node.js backend với bài toán AI có tính ứng dụng.",
    repo: "https://github.com/cuongherok4/ai-scam-call-detection-backend",
    article: "https://vjai.org.vn/vn/vjai/article/view/21/190"
  },
  {
    name: "VPT AI Product Advisor",
    type: "Node.js / AI Product Advisory",
    problem:
      "Xây dựng trợ lý tư vấn sản phẩm dựa trên nhu cầu người dùng, cần kết hợp dữ liệu sản phẩm với luồng hội thoại dễ hiểu.",
    role: "Tự thiết kế luồng tư vấn, tổ chức dữ liệu sản phẩm và phát triển phần tích hợp AI cho trải nghiệm gợi ý.",
    stack: ["Node.js", "RAG", "Product Data", "Backend API"],
    result:
      "Dự án cá nhân thể hiện khả năng đưa AI vào bài toán tư vấn sản phẩm thực tế.",
    repo: "https://github.com/cuongherok4/vpt-ai-product-advisor"
  },
  {
    name: "RAG Laptop Advisory Chatbot",
    type: "Python / AI Graduation Project",
    problem:
      "Hỗ trợ tư vấn laptop dựa trên tri thức sản phẩm và phản hồi có kiểm soát.",
    role: "Tự thiết kế pipeline RAG, vector store, prompt flow và vòng human-in-the-loop.",
    stack: ["Python", "LangChain", "ChromaDB", "Ollama", "Llama3.2:3b"],
    result:
      "Dự án cá nhân/đồ án thể hiện khả năng kết hợp backend workflow với AI tooling trong bài toán có ngữ cảnh."
  },
  {
    name: "Personal Portfolio API",
    type: "NestJS / Next.js Full-stack",
    problem:
      "Portfolio cần chứng minh năng lực full-stack bằng frontend gọi API backend riêng.",
    role: "Tự dựng Next.js App Router, NestJS REST API, health endpoint và cấu trúc monorepo.",
    stack: ["NestJS", "Node.js", "Next.js", "TypeScript", "REST API"],
    result:
      "Dự án cá nhân phục vụ tuyển dụng, dùng trực tiếp stack Node.js/NestJS mà mình đang ứng tuyển.",
    repo: "https://github.com/cuongherok4/portfolio"
  }
];

export const experience = [
  {
    role: "Backend Developer",
    company: "HTS Company",
    period: "",
    details:
      "Tham gia phát triển backend với NestJS, làm việc với API, validation và các luồng nghiệp vụ phía server."
  }
];
