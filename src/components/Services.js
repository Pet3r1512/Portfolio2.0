import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services() {
  const ServicesList = serviesItem.map((item) => {
    return (
      <ServicesBox
        key={item.name}
        name={item.name}
        icon={item.icon}
        desc={item.desc}
      />
    );
  });
  return (
    <div
      id="services"
      className="services md:min-h-screen flex flex-col justify-center items-center mt-24 md:py-24 px-[20px] sm:px-[25px] min-w-7xl mx-auto"
    >
      <h2 className="text-orange text-4xl text-center font-bold mb-[20px]">
        Services
      </h2>
      <p className="text-gray text-xl font-semibold mb-[50px] text-center">
        What can I do for your company?
      </p>
      <div className="flex flex-col xl:flex-row justify-center gap-2 md:min-h-[150px]">
        {ServicesList}
      </div>
    </div>
  );
}

const serviesItem = [
  {
    name: "Implementation",
    icon: "code",
    desc: "Turn your designs on Figma or Photoshop to real websites.",
  },
  {
    name: "UI/UX designs",
    icon: "object-group",
    desc: "Create a stunning and easy-to-access interfaces.",
  },
  {
    name: "Responsive websites",
    icon: "laptop-code",
    desc: "Ensure your websites run successfully on multiple devices.",
  },
  {
    name: "OOP",
    icon: "diagram-project",
    desc: "Defining an Object as a data field has unique attributes and behaviors.",
  },
];

function ServicesBox(props) {
  return (
    <div className="border-[3.5px] border-white hover:border-orange transition duration-[0.25s] h-[180px] md:w-[500px] lg:w-[400px] xl:w-[350px] px-3 py-2 rounded-2xl sm:w-auto">
      <FontAwesomeIcon icon={props.icon} className="md:text-2xl text-orange" />
      <h3 className="text-xl font-extrabold text-yellow mt-3 mb-2">
        {props.name}
      </h3>
      <p className="text-lg font-semibold text-gray">{props.desc}</p>
    </div>
  );
}
