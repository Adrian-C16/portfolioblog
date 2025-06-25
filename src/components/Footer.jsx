import '../index.css';

function Footer () {
    return(
        <footer className='footer'>
            <div className='footer-container'>
                <p>&copy; {new Date().getFullYear()} Portfolio Adrián Cimadevila. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;