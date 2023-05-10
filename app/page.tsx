import Link from "next/link";
import { routes } from "./routes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="text-2xl mb-6">Hi, Guest!</h2>
      <div>This is Chat Application</div>
      <div>Please login before using chat</div>
      <Link href={routes.login()}>
        Log in <span aria-hidden="true">&rarr;</span>
      </Link>
    </main>
  );
}
