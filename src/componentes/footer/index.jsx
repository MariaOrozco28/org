import "./footer.css";

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(org/public/img/Footer.png)"}}>
        <div className="redes">
            <a href="https://www.facebook.com/" target="blank">
                <img src="./public/img/facebook.png" alt="Facebook"/>
            </a>
            <a href="https://www.instagram.com/" target="blank">
                <img src="./public/img/instagram.png" alt="Instagram"/>
            </a>
            <a href="https://www.twitter.com/" target="blank">
                <img src="./public/img/twitter.png" alt="Twitter"/>
            </a>
        </div>
        <img src="./public/img/Logo.png" alt="Logo_org"/>
        <strong>Desarrollado por Mafer</strong>
        
    </footer>
}

export default Footer;
