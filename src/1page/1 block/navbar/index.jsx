import "./navbar.css";
// jshint ignore:start

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/logo" className="logo">
        Proton
      </a>
      <div className="links1">
        <a href="/about" className="a1">
          Шаблоны
        </a>
        <a href="/action" className="a1">
          Категории
        </a>
        <a href="/comm" className="a1">
          Цены
        </a>
      </div>
      <div className="links2">
        <a href="/login" className="login">
          Войти
        </a>
        <a className="button" href="/registration">
          Регистрация
        </a>
      </div>
    </div>
  );
};
// jshint ignore:end

export default Navbar;
