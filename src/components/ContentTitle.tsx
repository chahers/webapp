type Props = {
  title: string;
};

export default function ContentTitle({ title }: Props) {
  return (
    <div className="relative pt-16 sm:pt-20">
      <div
        className="
          absolute top-0 h-[150px] w-full bg-primary opacity-40
          sm:h-[150px] lg:h-[300px]
          [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]
        "
      />

      <div className="relative flex justify-center">
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="h-[2px] w-10 bg-secondary opacity-60 sm:h-[3px] sm:w-24" />
          <h1 className="text-2xl font-bold text-secondary sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <div className="h-[2px] w-10 bg-secondary opacity-60 sm:h-[3px] sm:w-24" />
        </div>
      </div>
    </div>
  );
}
