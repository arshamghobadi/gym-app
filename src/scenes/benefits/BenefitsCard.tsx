type Props = {
  data: {
    icon: JSX.Element;
    title: string;
    description: string;
  };
};

export default function BenefitsCard({ data }: Props) {
  return (
    <div className="flex flex-col p-5 items-center space-y-5 mt-5 border-2 border-gray-300 rounded-lg font-semibold">
      <div className="flex border-2 border-stone-400 bg-red-300 p-4 rounded-full ">
        {data.icon}
      </div>
      <div>{data.title}</div>
      <div>{data.description}</div>
    </div>
  );
}
