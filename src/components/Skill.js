function Involved(props) {
  return (
    <p className="text-orange">
      {"> "} {props.name} <span className="text-gray">{props.list}</span>
    </p>
  );
}

function Improving(props) {
  return (
    <p className="hover:text-orange transition duration-150">
      {"> "} {props.name}
    </p>
  );
}

export default function Skill() {
  const involvedList = involvedItem.map((item) => {
    return <Involved key={item.name} name={item.name} list={item.list} />;
  });
  const improvingList = improvingItem.map((item) => {
    return <Improving key={item.name} name={item.name} />;
  });
  const learningList = learningItem.map((item) => {
    return <Improving key={item.name} name={item.name} />;
  });
  return (
    <div
      id="skills"
      className="mt-24 md:py-24 sm:px-[25px] md:px-[50px] md:mt-0 md:min-h-screen flex flex-col items-center justify-center min-w-7xl mx-auto"
    >
      <div>
        <h2 className="text-orange text-4xl text-center font-bold mb-[20px]">
          Skills {"&"} Technologies
        </h2>
        <p className="text-gray text-xl font-semibold mb-[50px] text-center">
          This is all I have learned about
        </p>
      </div>
      <div className="min-w-[80vw] md:min-w-[75vw] mx-auto px-[25px] md:px-0">
        <div className="text-start">
          <h3 className="text-yellow text-4xl font-bold">Skills</h3>
          <div className="text-2xl font-semibold text-gray">
            <p>English communication</p>
            <p>Presentation skill</p>
            <p>Teamwork</p>
          </div>
        </div>
        <div className="text-start">
          <h3 className="text-yellow text-4xl font-bold mt-[25px]">
            Technologies
          </h3>
          <div className="text-lg font-semibold">
            <div className="text-gray flex flex-col text-lg gap-y-[15px]">
              <>
                <div className="flex items-center gap-x-[5px] text-2xl text-black">
                  <ion-icon name="battery-charging-outline"></ion-icon> Involved
                </div>
                <div className="flex text-lg md:text-2xl sm:text-4xl gap-x-[5px] mt-[10px]">
                  <i className="devicon-c-plain hover:text-[#014f86]"></i>
                  <i className="devicon-java-plain hover:text-[#ae2012]"></i>
                  <i className="devicon-python-plain hover:text-[#0096c7]"></i>
                  <i className="devicon-html5-plain hover:text-[#fb8500]"></i>
                  <i className="devicon-css3-plain hover:text-[#0096c7]"></i>
                  <i className="devicon-javascript-plain hover:text-[#ffd60a]"></i>
                  <i className="devicon-sass-original hover:text-[#ff5d8f]"></i>
                  <i className="devicon-bootstrap-plain hover:text-[#7b2cbf]"></i>
                  <i className="devicon-tailwindcss-original-wordmark hover:text-[#61a5c2]"></i>
                  <i className="devicon-react-original hover:text-[#4cc9f0]"></i>
                  <i className="devicon-canva-original hover:text-[#390099]"></i>
                  <i className="devicon-figma-plain hover:text-[#55a630]"></i>
                  <i className="devicon-vscode-plain hover:text-[#fe6d73]"></i>
                </div>
                <div className="flex flex-col gap-y-[10px] cursor-pointer mt-[20px]">
                  {involvedList}
                </div>
              </>
              <>
                <div className="flex items-center gap-x-[5px] text-2xl text-black">
                  <ion-icon name="battery-half-outline"></ion-icon> Improving
                </div>
                <div className="flex text-lg md:text-2xl sm:text-4xl gap-x-[5px] mt-[10px]">
                  <i className="devicon-html5-plain hover:text-[#fb8500]"></i>
                  <i className="devicon-css3-plain hover:text-[#0096c7]"></i>
                  <i className="devicon-javascript-plain hover:text-[#ffd60a]"></i>
                  <i className="devicon-react-original hover:text-[#4cc9f0]"></i>
                  <i className="devicon-canva-original hover:text-[#390099]"></i>
                  <i className="devicon-figma-plain hover:text-[#55a630]"></i>
                </div>
                <div className="flex flex-col gap-y-[10px] cursor-pointer mt-[20px]">
                  {improvingList}
                </div>
              </>
              <>
                <div className="flex items-center gap-x-[5px] text-2xl text-black">
                  <ion-icon name="battery-dead-outline"></ion-icon> Learning
                </div>
                <div className="flex text-lg md:text-2xl sm:text-4xl gap-x-[5px] mt-[10px]">
                  <i className="devicon-php-plain hover:text-[#023e7d]"></i>
                  <i className="devicon-python-plain hover:text-[#0096c7]"></i>
                  <i className="devicon-flask-original hover:text-black"></i>
                  <i className="devicon-git-plain hover:text-[#eb5e28]"></i>
                  <i className="devicon-microsoftsqlserver-plain hover:text-[#723c70]"></i>
                  <i className="devicon-photoshop-plain hover:text-[#1565c0]"></i>
                </div>
                <div className="flex flex-col gap-y-[10px] cursor-pointer mt-[20px]">
                  {learningList}
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const involvedItem = [
  {
    name: "Basic programming languages: ",
    list: "C, Java, Python",
  },
  {
    name: "Frontend development: ",
    list: "HTML5, CSS3 (CSS pre-processor: Sass, CSS framework: Bootstrap, Tailwind), JavaScript (JavaScript Library: React Js)",
  },
  {
    name: "Object-oriented programming (OOP): ",
    list: "Java",
  },
  {
    name: "Data structures (Node, Linked list, Stack, Queue, Array,...): ",
    list: "Java",
  },
  {
    name: "Discrete structures (Propositional Logic, Set, Graph,...): ",
    list: "Python",
  },
  {
    name: "Basic Data Analyzing (with CSV): ",
    list: "Python",
  },
  {
    name: "Simple UI designing: ",
    list: "Canva, Figma",
  },
];

const improvingItem = [
  {
    name: "HTML(Canvas, SVG), CSS Grid",
  },
  {
    name: "JavaScript, React Js",
  },
  {
    name: "UI/UX designs",
  },
];

const learningItem = [
  {
    name: "Back-end development: PHP, Python (Flask)",
  },
  {
    name: "Database, Microsoft SQL Sever, Git",
  },
  {
    name: "Adobe Photoshop (for Design and Implementation)",
  },
];
