import { NavLink } from 'react-router';

export default function Nav() {
    return (
        <nav>
            <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/search'>Search Games</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    )
}