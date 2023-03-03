import { SelectedPage } from '../../shared/types';
import ActionButton from '../../shared/ActionButton';

import HomePageGraphic from '../../assets/HomePageGraphic.png';
import HomePageText from '../../assets/HomePageText.png';
import SponsorForbes from '../../assets/SponsorForbes.png';
import SponsorFortune from '../../assets/SponsorFortune.png';
import SponsorRedBull from '../../assets/SponsorRedBull.png';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Home({ setSelectedPage }: Props) {
  return (
    <section className=" h-[860px] bg-gray-200" id="home">
      <div className="md:flex md:h-4/5 max-w-6xl md:flex-row md:mx-auto md:space-x-2 lg:space-x-8">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="p-5 space-y-3 md:w-2/4 md:space-y-10 lg:space-y-20 pt-16 "
        >
          <div>
            <img src={HomePageText} alt="gym name" />
          </div>
          <p className="font-semibold lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            asperiores maxime tempore, repellat possimus suscipit ipsa sunt
            quasi cupiditate, deleniti nisi cum, rerum quaerat officiis
            aspernatur mollitia obcaecati nemo fugit?
          </p>
          <div className=" space-x-3 lg:text-lg">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <button className=" font-semibold">LearnMore</button>
          </div>
        </motion.div>
        <div className=" w-3/4  items-center mx-auto">
          <img
            className="h-[450px] sm:pt-10"
            src={HomePageGraphic}
            alt="personal trainer"
          ></img>
        </div>
      </div>
      <div className=" bg-red-100 hidden md:inline-flex md:w-full mt-14 ">
        <div className="hidden md:inline-flex  md:items-center md:h-28 space-x-28 md:max-w-4xl md:mx-auto">
          <img className=" ml-16" src={SponsorForbes} alt="Forbes" />
          <img src={SponsorFortune} alt="Fortune" />
          <img src={SponsorRedBull} alt="RedBull" />
        </div>
      </div>
    </section>
  );
}
