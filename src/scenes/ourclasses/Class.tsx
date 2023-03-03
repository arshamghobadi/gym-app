import { ClassType } from '../../shared/types';
import { motion } from 'framer-motion';
type Props = { data: ClassType };

function Class({ data }: Props) {
  return (
    <li className=" relative w-screen max-h-96  flex-shrink-0 p-5 flex flex-col space-y-5 items-center justify-center">
      <motion.div className=" relative max-w-lg">
        <img className="hover:blur-0" src={data.image} alt={data.name} />
        <motion.div className=" p-14 space-y-3 font-semibold absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100  transition-opacity duration-300">
          <motion.p>{data.name}</motion.p>

          <motion.p>{data.description}</motion.p>
        </motion.div>
      </motion.div>
    </li>
  );
}

export default Class;
