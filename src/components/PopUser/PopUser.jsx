import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function PopUser() {
  const navigate = useNavigate();
  const { logoutUser } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser();
    navigate("/login");
  };

  return (
    <>
        <div className="pop-exit" id="popExit" style={{ display: "block" }}>
          <div className="pop-exit__container">
            <div className="pop-exit__block">
              <div className="pop-exit__ttl">
                <h2>Выйти из аккаунта?</h2>
              </div>
              <form className="pop-exit__form" id="formExit" action="#">
                <div className="pop-exit__form-group">
                  <button type="button"
                onClick={handleLogout} className="pop-exit__exit-yes _hover01" id="exitYes">
                    Да, выйти
                  </button>
                  <Link to="/">
                  <button type="button" className="pop-exit__exit-no _hover03" id="exitNo">
                    Нет, остаться
                  </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  );
}
export default PopUser;