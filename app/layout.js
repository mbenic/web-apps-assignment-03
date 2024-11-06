import "../styles/globals.css";

import "./css/font.css";

import "./css/font-awesome.min.css";

import "./css/style.css"; // Importing the stylesheets
import { ThemeProvider } from "./context/ThemeContext";

// RootLayout is being used to wrap other parts of the application with a common layout structure
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider> {children}</ThemeProvider>
      </body>
    </html>
  );
}
