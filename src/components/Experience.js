export default function Experience() {
    const experience_list = experience_info.map(item => {
        return <Experience_item key={item.id} company={item.company} position={item.position} time={item.time} type={item.type} />
    })
    return (
        <div className="experience mt-24 md:mt-0 md:min-h-screen flex flex-col justify-center items-center px-[20px] sm:px-24" id="experience">
            <h2 className="text-orange text-4xl text-center font-bold mb-[10px]">
                Experience
            </h2>
            <p className="text-gray text-xl font-semibold mb-[50px]">
                Where I have worked at?
            </p>
            <div className="min-w-[80vw] md:min-w-[75vw] mx-auto px-[25px] md:px-0 flex flex-col gap-y-2">
                {experience_list}
            </div>
        </div>
    )
}

const experience_info = [
    {
        id: 1,
        company: "CareerLink/VietCV.io",
        position: "Front-end Developer",
        type: "Intern",
        time: "Jult 2022 - Oct 2022",
        detail: {
            job_desc: {
                1: "Creating CV templates based on Designer's models",
                2: "Publicing the templates to {vietcv_io_link}",
                3: "Improving UI/UX by using ReactJS",
            },
            skills_enhance: {
                1: "HTML5 (HAML), CSS3 (CSS pre-processor: Sass, Scss, CSS framework: Bootstrap)",
                2: "ReactJS",
                3: "UI/UX Designing",
            },
            skills_learning: {
                1: "Database Query: GraphQL",
                2: "TypeScript, Ruby"
            }
        }
    },
    {
        id: 2,
        company: "Aureole IT",
        position: "Software Engineer",
        type: "Intern",
        time: "Nov - Dec 2022",
        detail: {
            job_desc: {
                1: "Build websites based on AGILE protocol",
                2: "Working in a professional environment"
            },
            skills_enhance: {
                1: "ReactJS Framework (NextJS)",
                2: "Database: Firebase",
                3: "UI/UX Designing: Figma"
            },
            skills_learning: {
                1: "Redux"
            },
        }
    },
    {
        id: 3,
        company: "Balan Coffee & Roastery",
        position: "Web Developer",
        type: "Freelancer",
        time: "Jun 2023 - Now",
        detail: {
            job_desc: {
                1: "Build an official website from scratch",
                2: "Take responsibility for enhancing online segment",
                3: "Division of work among other members"
            },
            skills_enhance: {
                1: "ReactJS Framework (NextJS)",
                2: "Database: Postgres, Prisma, Supabase(Images storage)",
                3: "UI: Tailwind, Tailwind Material"
            },
            skills_learning: {
                1: "Postgres",
                2: "NextJS"
            },
        }
    }
]

const vietcv_io_link = <a className="text-orange underline" href="https://vietcv.io/templates" target="_blank">Vietcv.io</a>

function Experience_item(props) {
    return (
        <div className="flex flex-col gap-y-2">
            <div>
                <span className="text-yellow text-3xl font-bold">{props.position}</span>{"     "}
                <span className="text-xl font-semibold text-gray">{props.type}</span>
            </div>
            <div className="flex justify-between max-w-7xl">
                <h3 className="text-2xl font-semibold">
                    <ion-icon name="business"></ion-icon>
                    {"     "}
                    {props.company}</h3>
                <p className="text-xl text-gray">{props.time}</p>
            </div>
        </div>
    )
}
