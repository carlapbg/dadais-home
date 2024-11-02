import { CustomLink } from "../utils/custom-link";

export const Header = () => { 
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <CustomLink to="/">Home</CustomLink>
                    </li>
                    <li>
                        <CustomLink to="/about">About</CustomLink>
                    </li>
                    <li>
                        <CustomLink to="/contact">Contact</CustomLink>
                    </li>
                </ul>
            </nav>
            <hr />
        </div>
    );
}