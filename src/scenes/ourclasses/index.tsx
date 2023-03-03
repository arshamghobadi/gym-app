import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import { HiArrowLongRight } from 'react-icons/hi2';
import { ClassType, SelectedPage } from '../../shared/types';
import { motion } from 'framer-motion';
import HText from '../../shared/HText';
import Class from './Class';
type Props = { setSelectedPage: (value: SelectedPage) => void };

const classes: Array<ClassType> = [
  {
    name: 'weight Training Classes',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit Praesentium nulla, recusandae cum autem est rem consequatur alias excepturi fuga quaerat, quas magni ex vel mollitia? Omnis autem',
    image: image1,
  },
  {
    name: 'weight Training Classes',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit Praesentium nulla, recusandae cum autem est rem consequatur alias excepturi fuga quaerat, quas magni ex vel mollitia? Omnis autem',
    image: image2,
  },
  {
    name: 'weight Training Classes',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit Praesentium nulla, recusandae cum autem est rem consequatur alias excepturi fuga quaerat, quas magni ex vel mollitia? Omnis autem',
    image: image3,
  },
  {
    name: 'weight Training Classes',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit Praesentium nulla, recusandae cum autem est rem consequatur alias excepturi fuga quaerat, quas magni ex vel mollitia? Omnis autem',
    image: image4,
  },
  {
    name: 'weight Training Classes',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit Praesentium nulla, recusandae cum autem est rem consequatur alias excepturi fuga quaerat, quas magni ex vel mollitia? Omnis autem',
    image: image5,
  },
  {
    name: 'weight Training Classes',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit Praesentium nulla, recusandae cum autem est rem consequatur alias excepturi fuga quaerat, quas magni ex vel mollitia? Omnis autem',
    image: image6,
  },
];

function OurClasses({ setSelectedPage }: Props) {
  return (
    <section id="ourclasses" className="w-full">
      <motion.div
        className=""
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto p-5 max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className=" space-y-4">
            <HText>Our Classes</HText>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium nulla, recusandae cum autem est rem consequatur alias
              excepturi fuga quaerat, quas magni ex vel mollitia? Omnis autem
              ipsum distinctio facilis.
            </p>
          </div>
        </motion.div>
        <motion.div>
          <p className="flex flex-col items-center p-4 font-bold text-gray-500">
            <HiArrowLongRight />
            scroll right
          </p>
          <ul className="flex overflow-x-scroll overflow-y-hidden">
            {classes.map((item, i) => (
              <Class key={`${item.name}-${i}`} data={item} />
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default OurClasses;
