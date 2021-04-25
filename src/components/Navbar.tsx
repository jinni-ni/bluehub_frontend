import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  BookOpenIcon,
  HomeIcon,
  XIcon,
} from "@heroicons/react/outline";
import LogoImage from "../assets/logo.png";
import smallLogoImage from "../assets/small_logo.png";

export default function Navbar() {
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex flex-start lg:w-0 lg:flex-1">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a href="/">
                      <img
                        className="h-10 w-auto sm:h-10"
                        src={LogoImage}
                        alt="logo"
                      />
                    </a>
                  </div>

                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <Popover.Group
                        as="nav"
                        className="hidden md:flex space-x-10"
                      >
                        <a
                          href="/"
                          className="text-base font-medium text-gray-500 hover:text-blue-600"
                        >
                          홈
                        </a>
                        <a
                          href="/"
                          className="text-base font-medium text-gray-500 hover:text-blue-600"
                        >
                          블로그
                        </a>
                      </Popover.Group>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon
                    className="h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>

              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <div className="mx-20">
                  <a
                    href="/"
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-blue-600"
                  >
                    로그인
                  </a>
                  <a
                    href="/"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    회원가입
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={smallLogoImage}
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2 align-right">
                      <Popover.Button className="bg-white rounded-md p-2 flex items-center justify-center text-gray-500 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      <a
                        href="test"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <HomeIcon
                          className="flex-shrink-0 h-6 w-6 text-blue-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 items-center text-base font-medium text-gray-900">
                          홈
                        </span>
                      </a>
                      <a
                        href="test"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <BookOpenIcon
                          className="flex-shrink-0 h-6 w-6 text-blue-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base item-center font-medium text-gray-900">
                          블로그
                        </span>
                      </a>
                    </nav>
                  </div>
                </div>

                <div className="py-6 px-5 space-y-6">
                  <div>
                    <a
                      href="/"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      회 원 가 입
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      로그인 하시겠습니까?{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-500">
                        로그인
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}