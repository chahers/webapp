type props = {
    title: string;
};

export default function ContentTitle( {title} : props ) {
    return (
    <div className="relative pt-20">
      <div className="absolute top-0 w-full h-[300px] bg-primary opacity-40
        [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]" />

      <div className="relative flex items-center justify-center pt-28">
        <div className="flex items-center gap-6">
          <div className="h-[3px] w-24 bg-secondary opacity-60" />
          <h1 className="text-5xl font-bold text-secondary">
            {title}
          </h1>
          <div className="h-[3px] w-24 bg-secondary opacity-60" />
        </div>
      </div>
    </div>
  );
}