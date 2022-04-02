import { useNavigate } from "react-router-dom";
import { paths } from "../../routes/paths";


export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="base-wrapper flex justify-between align-center">
        <button>logo</button>
        <div className="nav-pages">
          <div className="page-item" onClick={ () => navigate(paths.main)}>page1</div>
          <div className="page-item" onClick={ () => navigate(paths.auth)}>page2</div>
        </div>
      </div>
    </div>
  );
}