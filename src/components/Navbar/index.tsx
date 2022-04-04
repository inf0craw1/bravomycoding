import { useNavigate } from "react-router-dom";
import { paths } from "../../routes/paths";


export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="base-wrapper flex justify-between align-center">
        <button className="logo cursor-pointer">logo</button>
        <div className="nav-pages">
          <div className="page-item cursor-pointer" onClick={ () => navigate(paths.main)}>page1</div>
          <div className="page-item cursor-pointer" onClick={ () => navigate(paths.auth)}>page2</div>
        </div>
      </div>
    </div>
  );
}