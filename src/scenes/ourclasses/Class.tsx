import { ClassType } from '../../shared/types';
import { motion } from 'framer-motion';
type Props = { data: ClassType };

function Class({ data }: Props) {
  return (
    <li className=" relative w-screen flex-shrink-0 p-8 flex flex-col space-y-5 items-center justify-center">
      <motion.div className=" relative">
        <img className="hover:blur-0" src={data.image} alt={data.name} />
        <motion.div className=" absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100  transition-opacity duration-300">
          <motion.p>{data.name}</motion.p>

          <motion.p>{data.description}</motion.p>
        </motion.div>
      </motion.div>
    </li>
  );
}

export default Class;
