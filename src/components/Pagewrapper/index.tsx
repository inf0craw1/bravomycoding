import { PagewrapperPropsInterface } from "./it";

export default function Pagewrapper({ children }: PagewrapperPropsInterface){
  return (
    <div className="page-wrapper">
      { children }
    </div>
  );
}