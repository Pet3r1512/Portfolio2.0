import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function StickyMenu() {
  const StickyMenuList = StickyMenuItem.map((item) => {
    return <StickyMenuBox key={item.icon} name={item.name} icon={item.icon} />;
  });
  return (
    <div className="flex flex-col gap-y-5 fixed right-[100px] md:right-5 min-h-screen my-auto items-center justify-center p-0 m-0 z-50">
      {StickyMenuList}
    </div>
  );
}

function StickyMenuBox(props) {
  return (
    <a
      className="p-3 bg-yellow transition duration-150 ease-linear rounded-full hover:text-yellow hover:bg-white text-center w-10 h-10 flex items-center justify-center"
      href={props.name}
    >
      <FontAwesomeIcon className="font-bold text-sm" icon={props.icon} />
    </a>
  );
}

const StickyMenuItem = [
  {
    name: "#home",
    icon: "house",
  },
  {
    name: "#education",
    icon: "school",
  },
  {
    name: "#skills",
    icon: "keyboard",
  },
  {
    name: "#services",
    icon: "list-check",
  },
  {
    name: "#contact",
    icon: "contact-book",
  },
];
