import Image from "next/image";
import { ArrowUpRight, Award, Download, ExternalLink, Github, Mail, Phone } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { experience, profile, projects, skills } from "@/data/profile";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="text-base font-bold text-ink">
            {profile.name}
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-ink/70 hover:text-ink">
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={profile.github}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/15 bg-white text-ink hover:border-moss hover:text-moss"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </nav>
      </header>

      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden border-b border-ink/10">
        <Image
          src="/images/backend-workspace.webp"
          alt="Backend developer workspace"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/88 to-paper/20" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl content-center px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-ember">Portfolio cá nhân</p>
            <h1 className="text-4xl font-bold leading-tight text-ink md:text-6xl">{profile.role}</h1>
            <p className="mt-5 text-lg leading-8 text-ink/75 md:text-xl">{profile.headline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-ink px-5 font-semibold text-white transition hover:bg-ink/90"
              >
                Xem dự án
                <ArrowUpRight size={18} />
              </a>
              <a
                href={profile.cvUrl}
                className="inline-flex h-12 items-center gap-2 rounded-md border border-ink/15 bg-white/90 px-5 font-semibold text-ink transition hover:border-moss hover:text-moss"
              >
                <Download size={18} />
                Tải CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="About"
          title="Tập trung vào backend có cấu trúc, API rõ ràng và sản phẩm chạy được."
          description="Mình ưu tiên Node.js/NestJS, REST API, database và cách tổ chức code dễ bảo trì. Ngoài backend chính, mình có kinh nghiệm với Next.js, Spring Boot, Laravel và một số dự án AI/ML."
        />
        <div className="mb-6 inline-flex items-center gap-3 rounded-md border border-ink/10 bg-white px-4 py-3 shadow-soft">
          <Award size={18} className="text-ember" />
          <span className="text-sm font-semibold text-ink">GPA {profile.gpa}</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {["Backend-first", "Full-stack delivery", "AI/ML as a plus"].map((item) => (
            <div key={item} className="rounded-md border border-ink/10 bg-white p-5 shadow-soft">
              <h3 className="text-lg font-bold text-ink">{item}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/65">
                {item === "Backend-first"
                  ? "Thiết kế endpoint, validation, phân tách module và luồng dữ liệu."
                  : item === "Full-stack delivery"
                    ? "Có thể dựng frontend Next.js nối trực tiếp với API backend."
                    : "Biết áp dụng RAG, vector database và computer vision ở mức dự án học thuật."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="border-y border-ink/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <SectionHeading
            eyebrow="Projects"
            title="Dự án cá nhân tự làm, sắp xếp theo mức độ nổi bật."
            description="Các dự án sản phẩm chính được đặt trước, mỗi mục hiển thị rõ ngôn ngữ và phần backend tự làm."
          />
          <div className="grid gap-5">
            {projects.map((project) => (
              <article key={project.name} className="rounded-md border border-ink/10 p-5 transition hover:border-moss">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-ember">{project.type}</p>
                    <h3 className="mt-1 text-2xl font-bold text-ink">{project.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-md bg-paper px-3 py-1 text-xs font-semibold text-ink/75">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <p className="text-sm leading-6 text-ink/70">
                    <span className="font-bold text-ink">Bài toán: </span>
                    {project.problem}
                  </p>
                  <p className="text-sm leading-6 text-ink/70">
                    <span className="font-bold text-ink">Phần tự làm: </span>
                    {project.role}
                  </p>
                  <p className="text-sm leading-6 text-ink/70">
                    <span className="font-bold text-ink">Kết quả: </span>
                    {project.result}
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 items-center gap-2 rounded-md border border-ink/15 px-4 text-sm font-semibold text-ink transition hover:border-moss hover:text-moss"
                    >
                      <Github size={16} />
                      Repository
                    </a>
                  ) : null}
                  {project.article ? (
                    <a
                      href={project.article}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 items-center gap-2 rounded-md border border-ink/15 px-4 text-sm font-semibold text-ink transition hover:border-moss hover:text-moss"
                    >
                      <ExternalLink size={16} />
                      VJAI article
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading eyebrow="Skills" title="Kỹ năng chính đặt đúng trọng tâm tuyển dụng Node.js." />
        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((group) => (
            <div key={group.group} className="rounded-md border border-ink/10 bg-white p-5 shadow-soft">
              <h3 className="text-lg font-bold text-ink">{group.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-md bg-paper px-3 py-2 text-sm font-medium text-ink/75">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-ink/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <SectionHeading eyebrow="Experience" title="Kinh nghiệm thực tế với backend NestJS." />
          {experience.map((item) => (
            <article key={`${item.role}-${item.company}`} className="rounded-md border border-ink/10 p-5">
              {item.period ? <p className="text-sm font-semibold text-ember">{item.period}</p> : null}
              <h3 className="mt-1 text-2xl font-bold text-ink">
                {item.role} · {item.company}
              </h3>
              <p className="mt-3 max-w-3xl leading-7 text-ink/70">{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Sẵn sàng trao đổi về vị trí Node.js/NestJS."
          description="Có thể liên hệ trực tiếp qua Gmail, Zalo, Facebook hoặc GitHub."
        />
        <div className="grid gap-3 rounded-md border border-ink/10 bg-white p-5 shadow-soft md:grid-cols-2">
          <a className="inline-flex items-center gap-3 text-ink/75 hover:text-moss" href={`mailto:${profile.email}`}>
            <Mail size={18} />
            {profile.email}
          </a>
          <a className="inline-flex items-center gap-3 text-ink/75 hover:text-moss" href={`tel:${profile.phone}`}>
            <Phone size={18} />
            Zalo: {profile.zalo}
          </a>
          <a className="inline-flex items-center gap-3 text-ink/75 hover:text-moss" href={profile.github}>
            <Github size={18} />
            GitHub
          </a>
          <a className="inline-flex items-center gap-3 text-ink/75 hover:text-moss" href={profile.facebook}>
            <ExternalLink size={18} />
            Facebook
          </a>
        </div>
      </section>

      <footer className="border-t border-ink/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-ink/60 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js + NestJS.</p>
          <p>Personal portfolio for Node.js backend roles.</p>
        </div>
      </footer>
    </main>
  );
}
