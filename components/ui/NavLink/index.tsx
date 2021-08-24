import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "@common/classnames";

interface NavLinkProps {
  name?: string;
  href?: string;
  icon?: any;
}

const NavLink = ({ name, href, icon }: NavLinkProps) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <Link href={href} locale={locale}>
      <a
        className={classNames(
          "group flex items-center px-3 py-2 text-sm font-medium rounded-md",
          href == router.pathname
            ? "bg-gray-200 text-gray-900"
            : "text-gray-600 hover:bg-gray-100"
        )}
        aria-current="page"
      >
        <div
          className={classNames(
            "flex-shrink-0 -ml-1 mr-3 h-6 w-6",
            href == router.pathname
              ? "text-gray-500"
              : "text-gray-400 group-hover:text-gray-500"
          )}
          aria-hidden="true"
        >
          {icon}
        </div>
        {name}
      </a>
    </Link>
  );
};

export default NavLink;
