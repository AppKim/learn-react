import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>tmp search bar</div>
      {children}
    </div>
  );
}
