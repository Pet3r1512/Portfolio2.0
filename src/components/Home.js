import ava from "../images/avatar.jpg";

export default function Home() {
  return (
    <div
      className="home md:min-h-screen flex flex-col-reverse md:flex-row-reverse items-center justify-center md:gap-x-6 lg:gap-x-32 gap-y-16 mt-24 md:mt-0"
      id="home"
    >
      <div className="information">
        <h2 className="text-3xl md:text-5xl font-semibold mb-1 lg:mb-3">
          Hi! I Am
        </h2>
        <h1 className="text-3xl text-yellow lg:text-5xl md:text-[30px] font-bold mb-3">
          Peter Pham
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Go Vap, Ho Chi Minh City, Vietnam
        </p>
        <p className="mt-3 text-lg md:text-xl lg:text-2xl font-semibold text-yellow">
          peter1512.dev@gmail.com
        </p>
        <div className="icon mt-10 text-4xl lg:text-5xl flex gap-x-2">
          <a
            href="https://github.com/Pet3r1512"
            target={"_blank"}
            rel="noreferrer"
            className="hover:text-yellow transition duration-[0.25s]"
          >
            <ion-icon className="" name="logo-github"></ion-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/peter-pham-6b02a2229/"
            target={"_blank"}
            rel="noreferrer"
            className="hover:text-yellow transition duration-[0.25s]"
          >
            <ion-icon className="" name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
      <div className="img w-[300px] md:w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
        <img
          src={ava}
          alt=""
          className="rounded-full border-[8px] border-yellow"
        />
      </div>
    </div>
  );
}
