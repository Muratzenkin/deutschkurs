import CourseCard from "./CourseCard";
import CourseCard2 from "./CourseCard2";
import CourseCard3 from "./CourseCard3";

function Courses() {
  return (
    <>
      <section className="py-12 md:py-24">
        <div className="container">
          {/*Title */}
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold">
              Wir haben diese Herausforderungen ebenfalls gemeistert.
            </p>
          </div>
          {/* Card  */}
          <div>
            <CourseCard />
            <CourseCard2 />
            <CourseCard3 />
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
