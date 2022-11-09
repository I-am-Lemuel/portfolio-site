import Link from "next/link";
import { FunctionComponent } from "react";

export const BottomBar: FunctionComponent = () => {
  return (
    <div className="bg-green h-8 text-[1.4rem]">
      <span>Links to my Github and Socials: </span>
      <Link
        className="focus:border-4 outline-none hover:border-4"
        href="https://github.com/I-am-Lemuel"
      >
        [Github]
      </Link>
      <Link
        className="focus:border-4 outline-none hover:border-4"
        href="https://www.linkedin.com/in/lemuel-bakker"
      >
        [LinkedIn]
      </Link>
    </div>
  );
};
