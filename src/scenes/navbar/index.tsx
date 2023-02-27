import { HiBars3, HiBarsArrowDown } from 'react-icons/hi2';
import { useState } from 'react';
import Logo from '../../assets/Logo.png';

import { SelectedPage } from '../../shared/types';
import ActionButton from '../../shared/ActionButton';
import Link from './Link';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Navbar({ selectedPage, setSelectedPage }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const flexBetween = 'flex items-center justify-between';
  return (
    <nav>
      <div>
        <div>
          <div className="flex items-center justify-between p-5">
            <img alt="logo" src={Logo} />
            <div>
              <div className="hidden md:inline-flex gap-6 mr-5">
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
                {isOpen ? (
                  <div>
                    <HiBarsArrowDown
                      className="h-6 w-6 text-white "
                      aria-hidden="true"
                    />
                  </div>
                ) : (
                  <HiBars3 className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
