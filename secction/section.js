let div_section = document.querySelector(".section1")

div_section.innerHTML = `
<div class="footer-container">
            <div class="footer-section about">
                <h3>Sobre Nosotros</h3>
                <p>Somos una empresa dedicada a ofrecer los mejores servicios en el mercado.</p>
            </div>
            <div class="footer-section links">
                <h3>Enlaces Rápidos</h3>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Acerca de</a></li>
                </ul>
            </div>
            <div class="footer-section contact">
                <h3>Contacto</h3>
                <p>Email: info@tuempresa.com</p>
                <p>Teléfono: +123 456 7890</p>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2024 TuEmpresa. Todos los derechos reservados.
        </div>`;
