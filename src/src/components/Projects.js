export default function Projects() {
  const projectsList = projectsItem.map((item) => {
    return (
      <ProjectsBox
        key={item.name}
        time={item.time}
        name={item.name}
        link={item.link}
        desc={item.desc}
        used={item.used}
      />
    );
  });
  return (
    <div
      id="projects"
      className="min-h-screen mt-[100px] md:min-h-screen flex flex-col justify-center items-center gap-y-[15px] py-12 max-w-7xl mx-auto px-8 lg:px-14"
    >
      <h1 className="text-4xl font-bold text-orange">Projects</h1>
      <p className="text-xl font-semibold text-gray">
        Here is what I have done!
      </p>
      <div className="flex flex-col gap-y-[20px]">{projectsList}</div>
    </div>
  );
}
function ProjectsBox(props) {
  return (
    <div className="">
      <h2 className="text-3xl font-extrabold text-yellow">{props.time}</h2>
      <a
        className="text-xl font-bold hover:text-gray"
        href={props.link}
        rel="noreferrer"
        target="blank"
      >
        {props.name}
      </a>
      <p className="text-lg font-semibold text-gray">{props.desc}</p>
      <p className="">
        <span className="text-lg font-bold text-yellow">
          Technologies used:
        </span>{" "}
        {props.used}
      </p>
    </div>
  );
}
const projectsItem = [
  {
    time: "Dec 2021",
    name: "Personal Portfolio",
    link: "https://pet3r1512.github.io/Portfolio/",
    desc: "After learning about HTML, CSS, and Sass; I decided to create a personal portfolio as my first project, which contains all information about me such as personality, education, skills... During this project, I faced some problems. However, my skills have been improved by solving these difficulties.",
    used: "HTML5, Sass",
  },
  {
    time: "Mar 2022",
    name: "Nike Homepage",
    link: "https://pet3r1512.github.io/NikeHomePage/",
    desc: "This is my homework on Web and Application Programming at University. This project is a website that contains 5 web pages. In addition, my teacher only needs his students to be accustomed to CSS but I want to challenge myself to turn this simple homework into a stunning website based on Nike's homepage and a design on Dribbble.com",
    used: "HTML5, Sass, Figma",
  },
];
