import { Link, NavLink, Route, Routes } from "react-router-dom"
import "./Header.scss"

export const Header = () => {
  return (
    <header className="header" id="header">
      <div className="container">
        <nav className="header__nav">
          <NavLink to="/" className="header__link">Главная страница</NavLink>
          <NavLink to="/add" className="header__link">Добавление задачи</NavLink>
        </nav>
      </div>
    </header>
  )
}