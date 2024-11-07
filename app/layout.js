import "../styles/globals.css";

import "./css/font.css";

import "./css/font-awesome.min.css";

import "./css/style.css"; // Importing the stylesheets

// a context provider that enables a theme "dark" or "light" to be accessible throughout the component tree
import { ThemeProvider } from "./context/ThemeContext";

// RootLayout is being used to wrap other parts of the application with a common layout structure
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* enables any component within RootLayout to access the theme context  */}
        <ThemeProvider> {children}</ThemeProvider>
      </body>
    </html>
  );
}
