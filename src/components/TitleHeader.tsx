const TitleHeader = ({
  title,
  text,
  number,
}: {
  title: string;
  text: string;
  number: string;
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="">
        <h1 className="gradient-title text-5xl font-semibold md:text-9xl">
          {title}
        </h1>
        <p className="md:mt-5 md:text-3xl">{text}</p>
      </div>
      <div className="hidden items-center gap-7 md:flex">
        <div className="w-36 border border-white-50"></div>
        <p className="gradient-title text-6xl">{number}</p>
      </div>
    </div>
  );
};
export default TitleHeader;
