"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import RaceLogo from "@/assets/TypeRacer_logo.svg.png";
import Play from "@/assets/play.webp";
import Rank from "@/assets/rank.webp";
import About from "@/assets/about.webp";
import Link from "next/link";
import { useUser } from "../../context/testContext";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { logout, user } = useUser();
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <Link href="/" className="flex items-center gap-2 cursor-pointer">
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="flex flex-shrink-0 items-center">
                    <Image
                      src={RaceLogo}
                      alt="type-racer"
                      className="h-10 w-auto"
                    />
                  </div>
                  <h2 className=" px-1 text-sm text-gray-900 font-bold">
                    Race
                  </h2>
                </div>
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  href="/time-limited-mode"
                  className="flex gap-1 items-center cursor-pointer"
                >
                  <div className="flex gap-1 items-center cursor-pointer">
                    <Image src={Play} alt="Play" className="h-6 w-6" />

                    <p className=" px-1 text-sm text-gray-900 font-bold">
                      Тоглох
                    </p>
                  </div>
                </Link>
                <Link
                  href="/rank"
                  className="flex gap-1 items-center cursor-pointer"
                >
                  <div className="flex gap-1 items-center cursor-pointer">
                    <Image src={Rank} alt="Play" className="h-6 w-6" />

                    <p className=" px-1 text-sm text-gray-900 font-bold">
                      Ранк
                    </p>
                  </div>
                </Link>

                <div className="flex gap-1 items-center cursor-pointer">
                  <Image src={About} alt="Play" className="h-6 w-6" />

                  <p className=" px-1 text-sm text-gray-900 font-bold">
                    Тоглоомын тухай
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                {user === null ? (
                  <div className="ml-10">
                    <Link href="/login">
                      <button className="mt-3 border-2 border-white/20 text-white bg-[#3364C3] font-semibold  w-fit   flex flex-row items-center gap-2 cursor-pointer rounded-xl  md:py-[0.6rem] md:px-[1rem] md:text-[1rem] py-[0.5rem] px-[0.5rem] text-[0.5rem] hover:bg-opacity-90">
                        <p className="text-white font-bold md:text-[1rem] text-[0.8rem]">
                          Нэвтрэх
                        </p>
                        <div className="text-2xl"></div>
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3 lg:px-8">
                      <div>
                        <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </MenuButton>
                      </div>
                      <Transition
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <MenuItem>
                            {({ focus }) => (
                              <a
                                href="#"
                                className={classNames(
                                  focus ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </MenuItem>

                          <MenuItem>
                            {({ focus }) => (
                              <a
                                href="#"
                                className={classNames(
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                                onClick={() => {
                                  logout();
                                }}
                              >
                                Гарах
                              </a>
                            )}
                          </MenuItem>
                        </MenuItems>
                      </Transition>
                    </Menu>
                  </div>
                )}
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <DisclosureButton
                as="a"
                href="/time-limited-mode"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                <div className="flex gap-1 items-center cursor-pointer">
                  <Image src={Play} alt="Play" className="h-6 w-6" />

                  <p className=" px-1 text-sm text-gray-900 font-bold">
                    Тоглох
                  </p>
                </div>
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/rank"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                <div className="flex gap-1 items-center cursor-pointer">
                  <Image src={Rank} alt="Play" className="h-6 w-6" />

                  <p className=" px-1 text-sm text-gray-900 font-bold">Ранк</p>
                </div>
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/about"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                <div className="flex gap-1 items-center cursor-pointer">
                  <Image src={About} alt="Play" className="h-6 w-6" />

                  <p className=" px-1 text-sm text-gray-900 font-bold">
                    Тоглоомын тухай
                  </p>
                </div>
              </DisclosureButton>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
