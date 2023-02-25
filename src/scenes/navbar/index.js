import { HiBars3 } from 'react-icons/hi2';
import { useState } from 'react';
import Logo from '../../assets/Logo.png';

type Props = {};

export default function Navbar({}: Props) {
  const flexBetween = 'flex items-center justify-between';
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}></div>
    </nav>
  );
}
