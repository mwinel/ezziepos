import { FC } from "react";
import { useRouter } from "next/router";
import { Menu } from "@headlessui/react";
import classNames from "../../../common/classnames";

interface DropdownLinkProps {
  children?: any;
  active?: string;
  href?: string;
}

const DropdownLink: FC<DropdownLinkProps> = ({ children, active, href }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={classNames(
            active ? "bg-gray-100" : "",
            "block px-4 py-2 text-sm text-gray-700"
          )}
          onClick={handleClick}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  );
};

export default DropdownLink;
