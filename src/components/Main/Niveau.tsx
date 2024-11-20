import Niveu from "../../../public/image/niveu.png";

function Niveau() {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-200 h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96">
        <img src={Niveu} alt="niveu" className="w-full h-full object-fill" />
      </div>
    </>
  );
}

export default Niveau;
