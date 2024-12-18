
import "./globals.css";
import { ThemeProvider } from "@/customcomps/theme-provider";
import Navigation from '@/customcomps/navigation'
import Navbar from "@/customcomps/Navbar";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-4">
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation  />
            <Navbar />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
