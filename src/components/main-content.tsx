import { type ReactNode } from "react";
import { elementIds, testIds } from "../constants";

interface MainContentProps {
  children: ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  return (
    <main id={elementIds.main} data-testid={testIds.main} className="flex-1 p-8">
      <div className="max-w-4xl">{children}</div>
    </main>
  );
}
