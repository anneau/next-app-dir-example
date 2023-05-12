import Link from "next/link";
import { routes } from "../routes";

export const Header = () => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <a href="#" className="-m-1.5 p-1.5 text-gray-900">
            <span>Chat</span>
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <Link href={routes.signIn()}>
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
