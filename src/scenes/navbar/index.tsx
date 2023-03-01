import { HiBars3 } from 'react-icons/hi2';
import { useState } from 'react';
import Logo from '../../assets/Logo.png';
import { HiXMark } from 'react-icons/hi2';
import { SelectedPage } from '../../shared/types';
import ActionButton from '../../shared/ActionButton';
import Link from './Link';
import { Transition } from '@headlessui/react';
type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Navbar({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const navbarBackGruond = isTopOfPage ? '' : 'bg-pink-300';
  const flexBetween = 'flex items-center justify-between';
  return (
    <nav className={`${navbarBackGruond} `}>
      <div>
        <div>
          <div className="flex items-center justify-between p-5">
            <img alt="logo" src={Logo} />
            <div>
              <div className="hidden md:inline-flex gap-5 mr-5">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />

                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />

                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />

                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexBetween} gap-8  hidden md:inline-flex `}>
                <p>sign in</p>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Become a member
                </ActionButton>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className=" rounded-full bg-yellow-500 p-2 md:hidden"
              >
                <HiBars3 className="h-6 w-6 text-white" />
              </button>
              <div>
                <Transition
                  className={`${
                    isOpen &&
                    'fixed right-0 bottom-0 z-40 h-full w-[300px] bg-gray-400 drop-shadow-xl '
                  }`}
                  show={isOpen}
                  enter="transition-opacity duration-500 "
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed top-0 left-0 w-full h-full ">
                    <Transition.Child
                      enter="transition ease-in-out duration-500 transform"
                      enterFrom="-translate-y-full"
                      enterTo="translate-y-0"
                      leave="hidden"
                      leaveFrom="translate-y-0"
                      leaveTo="-translate-y-full"
                    >
                      <div className="w-full  h-screen rounded-lg p-8">
                        <div className="flex justify-end">
                          <button onClick={() => setIsOpen(!isOpen)}>
                            <HiXMark className="h-8 w-8 text-yellow-500" />
                          </button>
                        </div>
                        <div className="flex flex-col items-center mt-10 space-y-5">
                          <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                          />

                          <Link
                            page="Benefits"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                          />

                          <Link
                            page="Our Classes"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                          />

                          <Link
                            page="Contact Us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                          />
                        </div>
                      </div>
                    </Transition.Child>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
