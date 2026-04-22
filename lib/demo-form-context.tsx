"use client";

import { createContext, useContext, ReactNode } from "react";
import { useRouter } from "next/navigation";

const DemoFormContext = createContext<{ open: () => void }>({ open: () => {} });

export function DemoFormProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <DemoFormContext.Provider value={{ open: () => router.push("/demo") }}>
      {children}
    </DemoFormContext.Provider>
  );
}

export const useDemoForm = () => useContext(DemoFormContext);
