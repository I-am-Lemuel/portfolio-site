import { FunctionComponent } from "react";

export const TitleBarBtns: FunctionComponent = () => {
  return (
    <div className="absolute top-0 right-0 h-8 w-18">
      <span className="h-6 w-6 inline-block bg-yellow rounded-full my-4 mx-2"></span>
      <span className="h-6 w-6 inline-block bg-green rounded-full my-4 mx-2"></span>
      <span className="h-6 w-6 inline-block bg-red rounded-full my-4 mx-2 mr-4"></span>
    </div>
  );
};
