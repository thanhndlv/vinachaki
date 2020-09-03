
var header = `<nav class="navbar navbar-expand-lg">
<div class="container">
    <a class="navbar-logo" href="#"><img src="assets/images/index/logo.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">WHY CHOOSE US?</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">PRODUCTS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">FAQ</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">CONTACT US</a>
            </li>
        </ul>
    </div>
</div>
</nav>`,


footer = `
<div class="container">
    <div class="footerWrap">
        <div class="footer_logo">
            <div class="footer_logoImg">
                <img src="assets/images/index/logo_footer.png" alt="">
            </div>
            <p class="footer_logoDesc">We are charcoal manufacturer, charcoal<br>distributor and charcoal exporter. We are one of<br>leading exporters of wood charcoal in Viet Nam.<br>We supply charcoal for barbecue (BBQ), charcoal<br> for Shisha, charcoal for industrial applications.</p>
        </div>
        <div class="footer_menu">
            <div class="footer_menuItem">
                <ul>
                    <li>
                        <a href="">product</a>
                        <ul>
                            <li><a href="">White charcoal</a></li>
                            <li><a href="">Hardwood charcoal</a></li>
                            <li><a href="">Softwood charcoal</a></li>
                            <li><a href="">Mix wood charcoal</a></li>
                            <li><a href="">Coconut charcoal</a></li>
                            <li><a href="">Sawduct charcoal</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="footer_menuItem">
                <ul>
                    <li>
                        <a href="">help</a>
                        <ul>
                            <li><a href="">Customer support</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="footer_menuItem">
                <ul>
                    <li>
                        <a href="">social</a>
                        <ul>
                            <li><a href="">Gmail</a></li>
                            <li><a href="">Facebook</a></li>
                            <li><a href="">Softwood charcoal</a></li>
                            <li><a href="">Instagram</a></li>
                            <li><a href="">Tik Tok</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="footer_menuItem">
                <ul>
                    <li>
                        <a href="">legal</a>
                        <ul>
                            <li><a href="">Tearms of use</a></li>
                            <li><a href="">Privacy policy</a></li>
                            <li><a href="">Legal notice</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="copyright">VinaChaki 2020 Copyright Reserved ( VINACHAKI CO.,LTD)</div>
</div>`;

$('#layout-header').html(header);

$('#layout-footer').html(footer);