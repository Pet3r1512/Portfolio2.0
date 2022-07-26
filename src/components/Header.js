import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const menuList = menuItem.map((item) => {
    return <Menu key={item.name} name={item.name} title={item.title} />;
  });
  return (
    <div
      className="header flex justify-between items-center max-w-7xl mx-auto py-10 px-8 lg:px-20"
      id="header"
    >
      <h2 className="font-extrabold text-2xl md:text-3xl cursor-pointer">
        PETER<span className="text-orange">PHAM</span>
      </h2>
      <div className="menu hidden lg:block">
        <ul className="flex items-center justify-center gap-x-4 md:gap-x-8 xl:gap-x-12">
          {menuList}
        </ul>
      </div>
      <div className="flex gap-x-3 items-center justify-center">
        <a href="#projects">
          <button className="w-[105px] h-[40px] bg-orange font-medium rounded-xl hover:bg-white hover:border-orange hover:border-[3px] hover:text-orange transition duration-150 ease-linear text-white">
            Projects
          </button>
        </a>
        <FontAwesomeIcon
          icon="fa-solid fa-bars"
          className="lg:hidden text-2xl"
        />
      </div>
    </div>
  );
}

function Menu(props) {
  return (
    <li>
      <a
        className="transition duration-150 ease-linear hover:text-orange font-medium"
        href={props.name}
      >
        {props.title}
      </a>
    </li>
  );
}

const menuItem = [
  {
    name: "#home",
    title: "Home",
  },
  {
    name: "#about",
    title: "About me",
  },
  {
    name: "#experience",
    title: "Experiences"
  },
  {
    name: "#education",
    title: "Education",
  },
  {
    name: "#skills",
    title: "Skills",
  },
  {
    name: "#services",
    title: "Services",
  },
];
