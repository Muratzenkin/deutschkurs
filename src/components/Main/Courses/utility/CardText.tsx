type CourseData = {
  subtitle: string;
  title: string;
  description: string;
  benefits: string[];
  link: string;
};

type CardTextProps = {
  courseData: CourseData;
};

function CardText({ courseData }: CardTextProps) {
  return (
    <section className="py-12">
      <div className="space-y-4">
        <p className="text-sm uppercase bg-white text-black rounded-md inline-block px-3 py-1 font-semibold">
          {courseData.subtitle}
        </p>
        <p className="text-2xl md:text-3xl font-bold uppercase">
          {courseData.title}
        </p>
        <p className="text-xs">{courseData.description}</p>
        <div>
          <ul className="space-y-2 text-xs list-disc list-inside">
            {courseData.benefits.map((benefit) => (
              <li>{benefit}</li>
            ))}
          </ul>
        </div>
        <button className="bg-white text-black rounded-full px-8 py-2 font-bold">
          {" "}
          GEH REELS
        </button>
      </div>
    </section>
  );
}

export default CardText;
