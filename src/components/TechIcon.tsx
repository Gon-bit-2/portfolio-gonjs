const TechIcon = ({ icon }: Record<string, any>) => {
  return (
    <div className="flex-center gradient-border marquee-item h-20 w-20 flex-none bg-black-300 transition-all duration-700 hover:-translate-y-3 md:h-32 md:w-32">
      <img src={icon.image} alt={icon.image} className="size-10 md:size-16" />
    </div>
  );
};
export default TechIcon;
