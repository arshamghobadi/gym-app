import { SelectedPage } from '../../shared/types';
import { motion } from 'framer-motion';
import HText from '../../shared/HText';
import BenefitsCard from './BenefitsCard';
import BenefitsPageGraphic from '../../assets/BenefitsPageGraphic.png';
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
        <div className="flex flex-col p-2 space-y-4 sm:max-w-xl sm:mx-auto md:flex md:flex-row md:items-center md:space-x-10 md:max-w-6xl">
          {benefitsdata.map((item) => (
            <BenefitsCard key={item.title} data={item} />
          ))}
        </div>
      </motion.div>
      <div>
        <img
          className="flex mx-auto"
          src={BenefitsPageGraphic}
          alt="benefitsPicture"
        />
      </div>
      <div className="p-5 max-w-6xl">
        <HText>
          MILLIONS OF HAPPY MEMBERS GETTING{' '}
          <span className=" text-red-400">FIT.</span>
        </HText>
      </div>
      <div className=" font-semibold space-y-3 p-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil totam
          deleniti ad dolore iure maiores corporis reiciendis? Voluptatum
          voluptate cumque rerum veritatis. Pariatur sit, odit cupiditate ea
          iusto hic perferendis! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Illum molestiae minima veritatis atque pariatur ex
          deserunt, enim laudantium libero! Harum aliquid voluptatum
          reprehenderit numquam quam esse cumque beatae eate{' '}
        </p>
        <p>
          magnam, nostrum voluptatibus corrupti fugit vero assumenda commodi
          velit. Architecto incidunt a libero repellendus nam praesentium itaque
          excepturi sapiente consequatur dolore dolorem corporis quo, sunt
          facilis. Obcaecati, tempora. Distinctio illum dicta aliquid, dolorem
          cupiditate doloribus vitae sunt aliquam a, aperiam fugit maiores, et
          quaerat corrupti. Eaque delectus libero animi, id ipsam explicabo
          dicta. Enim, blanditiis. Voluptatibus sunt amet eos esse sed?
          Similique, voluptas cumque voluptates laborum dolorem soluta quisquam
          dolor reprehenderit.
        </p>
      </div>
    </section>
  );
}

export default Benefits;
