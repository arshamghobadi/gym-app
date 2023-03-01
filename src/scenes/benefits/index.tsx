import { SelectedPage } from '../../shared/types';
import { motion } from 'framer-motion';
import HText from '../../shared/HText';
import BenefitsCard from './BenefitsCard';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  benefitsdata: Array<{
    icon: JSX.Element;
    title: string;
    description: string;
  }>;
};

function Benefits({ setSelectedPage, benefitsdata }: Props) {
  return (
    <section className=" mx-auto min-h-screen max-w-6xl" id="benefits">
      <motion.div className="mx-auto p-5">
        <div className=" space-y-3">
          <HText>MORE THAN JUST GYM</HText>
          <p className="text-sm font-semibold">
            we provide world classs fitness equipment, trianners and Classes get
            you to your ultimate fitness goals with ease. we provide true care
            into each and every member.
          </p>
        </div>
        <div>
          {benefitsdata.map((item) => (
            <BenefitsCard key={item.title} data={item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
