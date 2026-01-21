import { useState, useRef, useEffect } from 'react';
type ProjectDetails = {
  problem: string;
  work: string[];
  outcomedesc: string;
  outcome: string[];
};

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  details: ProjectDetails;
};

export default function ProjectCard({ image, title, description, details }: ProjectCardProps) {

  const [open, setOpen] = useState(false);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  // Scroll when details open
  useEffect(() => {
    if (open && detailsRef.current) {
      detailsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [open]);

  return (
    <>
      <div className=" w-full max-w-sm mx-auto flex flex-col bg-white rounded-2xl shadow-md transition-all duration-300 ease-out md:hover:-translate-y-3 md:hover:shadow-2xl md:hover:cursor-pointer sm:rounded-xl" onClick={()=> setOpen(!open)}>
        <img src={image} alt={title} className="h-56 sm:h-64 md:h-72 object-cover rounded-t-2xl sm:rounded-t-xl" />
        <h3 className="text-lg sm:text-xl text-secondary font-medium p-6 sm:p-8">
          {title}
        </h3>
        <p className="text-base sm:text-lg text-gray-600 px-6 pb-6 sm:px-8 sm:pb-8">
          {description}
        </p>
      </div>
      {/* further description */}
      { open && (
        <div ref={detailsRef} className='bg-white w-full mt-8 sm:mt-8 md:mt-16 rounded-2xl'>
          <section>
            <h1 className='text-gray-800 text-2xl font-medium p-8'>Problem</h1>
            <p className='text-gray-600 text-l px-8'>
              {details.problem}
            </p>
          </section>
          <div className='justify-self-center w-11/12 h-[1px] bg-gray-300 my-8'/>
          <section>
            <h1 className='text-gray-800 text-2xl font-medium p-8 pt-0'>Work Performed</h1>
            <ul className="list-disc text-gray-600 px-12 space-y-2">
              {details.work.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
          <div className='justify-self-center w-11/12 h-[1px] bg-gray-300 my-8'/>
          <section>
            <h1 className='text-gray-800 text-2xl font-medium p-8 pt-0'>Outcome</h1>
            <p className="text-gray-600 px-8 mb-4">
              {details.outcomedesc}
            </p>
            <ul className="list-disc text-gray-600 px-12 space-y-2 pb-8">
              {details.outcome.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </>
  );
}
