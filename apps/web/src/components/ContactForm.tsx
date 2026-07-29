"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      form.reset();
      setState("success");
      setMessage("Cảm ơn bạn. Tin nhắn đã được gửi tới API portfolio.");
    } catch {
      setState("error");
      setMessage("Chưa gửi được tin nhắn. Kiểm tra backend API hoặc cấu hình NEXT_PUBLIC_API_URL.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="grid gap-2 text-sm font-medium text-ink">
        Tên
        <input
          required
          name="name"
          className="h-12 rounded-md border border-ink/15 bg-white px-4 outline-none transition focus:border-moss focus:ring-4 focus:ring-moss/10"
          placeholder="Tên của bạn"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink">
        Email
        <input
          required
          type="email"
          name="email"
          className="h-12 rounded-md border border-ink/15 bg-white px-4 outline-none transition focus:border-moss focus:ring-4 focus:ring-moss/10"
          placeholder="email@company.com"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink">
        Nội dung
        <textarea
          required
          name="message"
          rows={5}
          className="rounded-md border border-ink/15 bg-white px-4 py-3 outline-none transition focus:border-moss focus:ring-4 focus:ring-moss/10"
          placeholder="Bạn muốn trao đổi về vị trí Node.js/NestJS..."
        />
      </label>
      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-moss px-5 font-semibold text-white transition hover:bg-moss/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send size={18} aria-hidden />
        {state === "loading" ? "Đang gửi..." : "Gửi tin nhắn"}
      </button>
      {message ? (
        <p className={state === "error" ? "text-sm text-red-700" : "text-sm text-moss"}>{message}</p>
      ) : null}
    </form>
  );
}
