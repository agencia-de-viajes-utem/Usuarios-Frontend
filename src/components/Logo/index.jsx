import { Link } from "wouter";
const Logo = () => {
    return (
        <Link href="/">
            <div className="logo">
                <img src="/logo.png" alt="Logo" />
            </div>
        </Link>
    );
};
export default Logo;
