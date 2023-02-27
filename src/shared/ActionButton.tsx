import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from './types';

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      href={`#${SelectedPage.ContactUs}`}
      className=" rounded-full bg-yellow-300 px-6 py-2"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    >
      {children}{' '}
    </AnchorLink>
  );
};

export default ActionButton;
