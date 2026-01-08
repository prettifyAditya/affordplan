import { Poppins } from "next/font/google";
import MainTemplate from "@/components/template/MainTemplate";
import "./global.css";

export const metadata = {
  title: "Affordplan",
  description: "Made by prettify",
};

const poppins = Poppins({
  subsets: ["Poppins"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], 
  variable: "Poppins"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <MainTemplate>
          {children}
        </MainTemplate>
      </body>
    </html>
  );
}
