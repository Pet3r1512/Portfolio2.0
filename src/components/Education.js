import logo from "../images/tdtu.jpg";

export default function Education() {
  const EducationList = EducationInfo.map((item) => {
    return <EducationItem key={item.type} type={item.type} name={item.name} />;
  });
  return (
    <div
      id="education"
      className="mt-24 md:mt-0 md:min-h-screen px-[50px] flex flex-col items-center justify-center min-w-7xl mx-auto"
    >
      <h2 className="text-orange text-4xl text-center font-bold mb-[25px]">
        Education
      </h2>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-x-[100px] sm:gap-x-[25px]">
          <p className="text-3xl md:text-4xl font-semibold mb-[15px]">
            Ton Duc Thang <span className="text-yellow">Univeristy</span>
          </p>
          <p className="text-2xl font-semibold text-gray mb-[50px]">
            October 2020 - Current
          </p>
        </div>
        <div className="flex flex-col-reverse items-center justify-center gap-x-[70px] md:flex-row object-cover">
          <div className="flex flex-col">{EducationList}</div>
          <img
            src={logo}
            alt=""
            className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] rounded-full border-[4px] border-yellow mb-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

function EducationItem(props) {
  return (
    <p className="text-xl font-medium mt-[12px]">
      {props.type}
      <span className="text-yellow">{props.name}</span>
    </p>
  );
}

const EducationInfo = [
  {
    type: "Graduation year: ",
    name: "2024",
  },
  {
    type: "Department: ",
    name: "Information Technology",
  },
  {
    type: "Main major: ",
    name: "Software Engineering",
  },
];
