import { Header } from "./header";

export const metadata = {
  title: "ChatPage",
  description: "This is Chat Page",
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
