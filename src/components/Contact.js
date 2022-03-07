export default function Contact() {
  const contactList = contactItem.map((item) => {
    return (
      <ContactBox
        key={item.name}
        name={item.name}
        icon={item.icon}
        desc={item.desc}
      />
    );
  });
  const othersList = othersItem.map((item) => {
    return (
      <OthersList
        key={item.name}
        href={item.href}
        name={item.name}
        icon={item.icon}
        desc={item.desc}
      />
    );
  });
  return (
    <div
      id="contact"
      className="min-h-screen mt-[100px] md:min-h-screen bg-orange text-white flex flex-col justify-center items-center gap-y-[15px] py-12"
    >
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="text-xl font-semibold">Get in touch with me</p>
      <div className="flex flex-col md:flex-row gap-[20px]">
        <div className="suggest bg-white mx-auto w-[320px] lg:w-[500px] px-[10px] py-[15px] md:p-[50px] rounded-2xl text-black">
          <h2 className="font-bold text-orange md:text-2xl mb-2 md:mb-4">
            Recommended
          </h2>
          <div>{contactList}</div>
        </div>
        <div className="suggest bg-white mx-auto w-[320px] lg:w-[500px] px-[10px] py-[15px] md:p-[50px] rounded-2xl text-black">
          <h2 className="font-bold text-orange md:text-2xl mb-2 md:mb-4">
            Others (Click to open)
          </h2>
          <div>{othersList}</div>
        </div>
      </div>
    </div>
  );
}

function ContactBox(props) {
  return (
    <p className="md:text-xl font-medium">
      <span className="text-yellow text-lg relative top-[2px] mr-2">
        <ion-icon name={props.icon}></ion-icon>
      </span>
      {props.desc}
    </p>
  );
}

function OthersList(props) {
  return (
    <div>
      <a className="md:text-xl font-medium" href={props.href} target="_blank">
        <span className="text-yellow text-lg relative top-[2px] mr-2">
          <ion-icon name={props.icon}></ion-icon>
        </span>
        {props.desc}
      </a>
    </div>
  );
}

const contactItem = [
  {
    name: "call",
    icon: "call",
    desc: "+84768058382 (Zalo)",
  },
  {
    name: "email",
    icon: "mail",
    desc: "peter1512.dev@gmail.com",
  },
  {
    name: "location",
    icon: "location",
    desc: "Go Vap, Ho Chi Minh City, Vietnam",
  },
];

const othersItem = [
  {
    name: "github",
    icon: "logo-github",
    desc: "Github",
    href: "https://github.com/Pet3r1512",
  },
  {
    name: "linkedin",
    icon: "logo-linkedin",
    desc: "Linkedin",
    href: "https://www.linkedin.com/in/peter-pham-6b02a2229/",
  },
];
