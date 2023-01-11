import Image from "next/image";
import WFLKLogo from "../../../../public/wflk.png";
import DefaultUserImage from "../../../../public/user.png";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
//import useUserStore from "../../store/store";
import NavLink from "./NavLink";
import SearchBar from "./SearchBar";
//import "../../../styles/globals.css";

import { signIn, signOut, useSession } from "next-auth/react";

const Header: React.FC = () => {
  //const user: User | null = useUserStore((state) => state.user);

  const { data: sessionData } = useSession();
  console.log(sessionData);
  return (
    <Disclosure as="nav" className="shadow bg-green-dark">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <Link href="/subjects">
                  <Image
                    className="block w-auto h-9 lg:hidden"
                    src={WFLKLogo}
                    alt="WFLK"
                  />
                  <Image
                    className="hidden w-auto h-9 lg:block"
                    src={WFLKLogo}
                    alt="WFLK"
                  />
                </Link>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    <NavLink href="subjects">subjects</NavLink>
                    <NavLink href="flashcards">flashcards</NavLink>
                    <NavLink href="games">games</NavLink>
                    <NavLink href="#">homeworks</NavLink>
                  </div>
                </div>
              </div>
              <SearchBar />
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-green-light hover:bg-green-light hover:text-green-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-light">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-8 h-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-8 h-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:block">
                <div className="flex items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative flex-shrink-0 ml-4">
                    <div>
                      <Menu.Button className="flex text-sm text-white bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-green-light focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        {sessionData?.user?.image ? (
                          <img
                            className="w-8 h-8 rounded-full"
                            src={`${sessionData?.user?.image}`}
                            alt=""
                          />
                        ) : (
                          <Image
                            className="w-8 h-8 rounded-full"
                            src={DefaultUserImage}
                            alt="WFLK"
                          />
                        )}
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 flex flex-col w-48 py-1 mt-2 origin-top-right rounded-md shadow-lg bg-green-dark ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {sessionData?.user?.name !== null && (
                          <Menu.Item>
                            <NavLink href="settings">
                              {sessionData?.user?.name}
                            </NavLink>
                          </Menu.Item>
                        )}
                        <Menu.Item>
                          <NavLink href="admin">admin</NavLink>
                        </Menu.Item>
                        <Menu.Item>
                          <NavLink
                            href="/"
                            onClick={
                              sessionData ? () => signOut() : () => signIn()
                            }
                          >
                            {sessionData ? "Log out" : "Log in"}
                          </NavLink>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="flex flex-col px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button as={NavLink} href="subjects">
                subjects
              </Disclosure.Button>
              <Disclosure.Button as={NavLink} href="flashcards">
                flashcards
              </Disclosure.Button>
              <Disclosure.Button as={NavLink} href="#">
                games
              </Disclosure.Button>
              <Disclosure.Button as={NavLink} href="#">
                homeworks
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center justify-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={`http://localhost:5000/${sessionData?.user?.image}`}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-4xl font-medium text-gold-500">
                    {sessionData?.user?.name}
                  </div>
                  {/* <div className="text-lg font-medium text-gray-400">
                    {user?.position}
                  </div> */}
                </div>
              </div>
              <div className="flex flex-col px-2 mt-3 space-y-1">
                <Disclosure.Button as={NavLink} href="settings">
                  {sessionData?.user?.name}
                </Disclosure.Button>
                <Disclosure.Button as={NavLink} href="admin">
                  admin
                </Disclosure.Button>
                <Disclosure.Button
                  as={NavLink}
                  href="#"
                  onClick={sessionData ? () => signOut() : () => signIn()}
                >
                  {sessionData ? "Log out" : "Log in"}
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
