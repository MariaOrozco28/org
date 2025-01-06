import "./footer.css";

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(org/build/img/Footer.png)"}}>
        <div className="redes">
            <a href="https://www.facebook.com/" target="_blank">
                <img src="./img/facebook.png" alt="Facebook"/>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
                <img src="./img/instagram.png" alt="Instagram"/>
            </a>
            <a href="https://www.twitter.com/" target="_blank">
                <img src="./img/twitter.png" alt="Twitter"/>
            </a>
        </div>
        <img src="./img/logo.png" alt="Logo_org"/>
        <strong>Desarrollado por Mafer</strong>
        
    </footer>
}

export default Footer;
