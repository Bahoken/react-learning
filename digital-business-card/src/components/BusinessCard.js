import Info from "./Info";
import Main from "./Main";
import Footer from "./Footer";
import './BusinessCard.css';

function BusinessCard() {
    return(
        <div className="business-card">
            <Info />
            <Main />
            <Footer /> 
        </div>
    );
}

export default BusinessCard;