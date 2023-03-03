import { SelectedPage } from '../../shared/types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';

type Props = { setSelectedPage: (value: SelectedPage) => void };
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
function ContactUs({ setSelectedPage }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData: Inputs) =>
    console.log(formData);
  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      id="contactus"
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact us
      </h3>
      <div className="flex flex-col space-y-6 w-80 sm:space-y-10 sm:w-2/4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          // w-fit mx-auto add this class for class name
          className="flex flex-col space-y-4  "
        >
          <input
            {...register('name')}
            placeholder="Name"
            className="contactInput p-2 placeholder:text-gray-200"
            type="text"
          />
          <input
            {...register('email')}
            placeholder="Email"
            className="contactInput p-2 placeholder:text-gray-200"
            type="email"
          />

          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput p-2 placeholder:text-gray-200"
            type="text"
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput p-2 placeholder:text-gray-200"
          />
          <button
            type="submit"
            className=" bg-red-300 py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactUs;
