import "./App.css";
import Heading from "./components/homepage/title";
import Menu from "./components/menu/menu";
import AboutNMIMS from "./components/aboutNMIMS/aboutNMIMS";
import TedxNMIMS from "./components/aboutTEDxNMIMS/tedxNMIMS";
import ContactPage from "./components/contactPage/contactPage";
import Speakers from "./components/speakers/speakers";
import { BackTop, Tooltip } from "antd";
import Team from "./components/TEDTeam/TEDTeam";

// Some secret console text to showcase the name of contributors :)

console.log(
    "%cTEDxNMIMS, Indore",
    "font-size: 3vw; font-weight: 900; color: red; background-color: black; padding: 2vw; margin: 1vw; display: flex; justify-content: center"
);

console.log(
    "%cWelcome to TEDxNMIMS official website. \n\nThis website has been made by Mr. Sam Varghese, currently a second year MBATech student at NMIMS, Indore. \nGitHub link for the website: https://github.com/TEDx-NMIMS-Indore/TEDx-NMIMS-Indore-official-website \nProfile Sam Varghese: https://www.linkedin.com/in/sam-varghese-1a7701209/ \nMail ID of Sam Varghese: sam.varg.2003@gmail.com",
    "color: yellow; background-color: black; padding: 1vw;"
);

// Decode it if you can :)

console.log(
    `%c- .- .-.. . -. -     .... .. - ...     .-     - .- .-. --. . -     -. ---     --- -. .     . .-.. ... .     -.-. .- -.     .... .. - -·-·-·     --. . -. .. ..- ...     .... .. - ...     .-     - .- .-. --. . -     -. ---     --- -. .     . .-.. ... .     -.-. .- -.     ... . . ·-·-·- -.-. --- -. --. .-. .- - ..- .-.. .- - .. --- -. ...     --- -.     -.. . -.-. --- -.. .. -. --.     - .... .     ... . -.-. .-. . -     -.-. --- -.. . ·-·-·-     -.-- --- ..- ·----· .-. .     .- .-- . ... --- -- . -·-·--`,"color: cyan; background-color: black"
);

const App = () => {
    return (
        <div className="headingPage">
            <Tooltip placement="topLeft" title="Back to top" color="grey">
                <BackTop />
            </Tooltip>
            <Menu />
            <Heading />
            <AboutNMIMS id="about" name="about" />
            <TedxNMIMS />
            <Team />
            <Speakers />
            <ContactPage />
        </div>
    );
};

export default App;

//$ Morse