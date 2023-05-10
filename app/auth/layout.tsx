export const metadata = {
  title: "AuthPage",
  description: "This is Auth Page",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
