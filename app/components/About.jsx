import Button from "../components/Button";
import { forwardRef } from "react";

const AboutME = forwardRef(({ innerRef, toggleAbout }, ref) => {
  return (
    <div
      ref={innerRef}
      className="modal absolute top-0 bottom-0 left-0 h-sceen right-0 bg-transparent
                hidden place-items-center z-40 backdrop-blur"
    >
      <div
        className="bg-white rounded-md md:rounded-lg h-fit w-[37%] md:w-[96%]
                       flex flex-col items-top justify-left p-5 "
      >
        <div className="text-3xl font-black md:text-2xl">About ME!</div>
        <div className="">
          <img
            src={"/profile.jpg"}
            alt=""
            width={100}
            height={90}
            className="rounded-xl m-2 float-left"
          />
          <p className="my-1 text-md leading-snug font-mono">
            I'm a computer science student at the{" "}
            <strong>University of Aberdeen</strong> who loves coding in my spare
            time. I'm fascinated by how computers work and I enjoy creating
            challenging software programs. When I'm not coding, I love to dance
            because it's a great way to stay active and express my creativity. I
            find that dancing helps me relax and gives me energy for my
            programming assignments. Overall, I'm a curious and driven
            individual with a unique set of interests.
          </p>
        </div>
        <div className="text-2xl font-black md:text-xl">Follow ME</div>
        <div className="flex justify-left items-center py-2">
          <a href="">
            <img src={"/github-sign.png"} width={30} height={30} />
          </a>
          <a href="" className="mx-5">
            <img src={"/twitter.png"} width={30} height={30} />
          </a>
          <a href="">
            <img src={"/instagram.png"} width={30} height={30} />
          </a>
        </div>

        <div>
          <Button
            content={"close"}
            clickEvent={(event) => toggleAbout(event, innerRef)}
          />
        </div>
      </div>
    </div>
  );
});

export default AboutME;
