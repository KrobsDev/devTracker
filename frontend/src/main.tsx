import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import Dashboard from "./features/dashboard";
import { TooltipProvider } from "./components/ui/tooltip";
import Tasks from "./features/tasks";
import AppLayout from "./layouts/AppLayout";
import Projects from "./features/projects";
import ReactQueryProvider from "./providers/react-query-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <ThemeProvider>
        <TooltipProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="projects" element={<Projects />} />
                <Route path="tasks" element={<Tasks />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  </StrictMode>
);
