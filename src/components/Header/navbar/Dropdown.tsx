import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { House, TableOfContents } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Menu>
      <MenuButton>
        {" "}
        <TableOfContents />
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className="rounded-full space-y-4 py-2 px-4 text-lg shadow-lg hover:bg-blue-600 transition duration-200 pt-[50px]"
      >
        <MenuItem>
          <NavLink to="/" className="flex  data-[focus]:bg-blue-100 rounded-lg">
            <House />
            Home
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="/privacy"
            className="block data-[focus]:bg-blue-100 rounded-lg"
          >
            Datenschutz
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="/blog"
            className="block data-[focus]:bg-blue-100 rounded-lg"
          >
            Blog
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="/news"
            className="block data-[focus]:bg-blue-100 rounded-lg"
          >
            News
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="/contact"
            className="block data-[focus]:bg-blue-100 rounded-lg"
          >
            Contact
          </NavLink>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}

export default Navbar;
