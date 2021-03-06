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
        <div className="min-w-[80vw] md:min-w-[75vw] mx-auto px-[25px] md:px-0">
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
        time: "July 2022 - Now",
    },
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
            <div>
                <h3 className="text-lg font-bold">Job description: </h3>
                <div className="text-md font-normal text-gray">
                    <p>- Creating CV templates base on Designer's models</p>
                    <p>- Publicing the templates to {vietcv_io_link}</p>
                    <p>- Improving UI/UX by using ReactJS</p>
                </div>
            </div>
            <div>
                <h3 className="text-lg font-bold">Skills enhancing: </h3>
                <div className="text-gray">
                    <p>- {"HTML5 (HAML), CSS3 (CSS pre-processor: Sass, Scss, CSS framework: Bootstrap)"}</p>
                    <p>- ReactJS</p>
                    <p>- UI/UX Designing</p>
                </div>
            </div>
            <div>
                <h3 className="text-lg font-bold">Skills learning: </h3>
                <div className="text-gray">
                    <p>- Database Query: GraphQL</p>
                    <p>- TypeScript, Ruby</p>
                </div>
            </div>
        </div>
    )
}