"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { DemoFormModal } from "@/components/DemoFormModal";

const DemoFormContext = createContext<{ open: () => void }>({ open: () => {} });

export function DemoFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DemoFormContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      {isOpen && <DemoFormModal onClose={() => setIsOpen(false)} />}
    </DemoFormContext.Provider>
  );
}

export const useDemoForm = () => useContext(DemoFormContext);
