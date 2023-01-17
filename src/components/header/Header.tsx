import Image from "next/image";
import WFLKLogo from "../../../public/wflk2.png";
import DefaultUserImage from "../../../public/user.png";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import NavLink from "./NavLink";
import SearchBar from "./SearchBar";

import { signIn, signOut, useSession } from "next-auth/react";

const Header: React.FC = () => {
  const { data: sessionData } = useSession();
  return (
    <Disclosure as="nav" className="font-face-gm bg-green-dark shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2 lg:px-0">
                <Link href="/subjects">
                  <Image
                    className="block h-9 w-auto lg:hidden"
                    src={WFLKLogo}
                    alt="WFLK"
                  />
                  <Image
                    className="hidden h-9 w-auto lg:block"
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
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-green-light hover:bg-green-light hover:text-green-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-light">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:block">
                <div className="flex items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-4 flex-shrink-0">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-light focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        {sessionData?.user?.image ? (
                          <img
                            className="h-8 w-8 rounded-full"
                            src={`${sessionData?.user?.image}`}
                            alt=""
                          />
                        ) : (
                          <Image
                            className="h-8 w-8 rounded-full"
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 flex w-48 origin-top-right flex-col rounded-md bg-green-dark py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
            <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
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
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center justify-center px-5">
                <div className="flex-shrink-0">
                  {sessionData?.user?.image ? (
                    <img
                      className="h-8 w-8 rounded-full"
                      src={`${sessionData?.user?.image}`}
                      alt=""
                    />
                  ) : (
                    <Image
                      className="h-8 w-8 rounded-full"
                      src={DefaultUserImage}
                      alt="WFLK"
                    />
                  )}
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
              <div className="mt-3 flex flex-col space-y-1 px-2">
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
