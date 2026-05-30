import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 换成最稳的 Inter 字体
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "懂你说 - 情侣沟通 AI 翻译器",
  description: "让沟通更温情",
}; // 必须叫 metadata，Next.js 才能识别

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}