import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
const Navbar = () => {
    return (
        <nav className=" mb-6 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center mx-2 text-2xl">
                {/* <img src={logo} alt="logo" /> */}
                Mr
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/md-rayhan-a7325a315/" target="blank">
                <FaLinkedin/>
                </a>
                <a href="https://github.com/rayhanbeg" target="blank">
                <FaGithub/>
                </a>
                <a href="https://www.instagram.com/n.h._rafi" target="blank">
                <FaInstagram/>
                </a>
                <FaSquareXTwitter/>
            </div>
        </nav>
    );
};

export default Navbar;