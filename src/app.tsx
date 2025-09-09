import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { HomePage } from "./routes/home-page";
import { FeaturesPage } from "./routes/features-page";
import { DocsPage } from "./routes/docs-page";
import { ContactPage } from "./routes/contact-page";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout showLeftSidebar showFooter>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/features"
          element={
            <Layout showLeftSidebar showRightSidebar showFooter>
              <FeaturesPage />
            </Layout>
          }
        />
        <Route
          path="/docs"
          element={
            <Layout showLeftSidebar>
              <DocsPage />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout showRightSidebar showFooter>
              <ContactPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
