var locationHref = location.href,
locationOrigin = location.origin,
folderName = 'vinachaki-html',
locationPage = locationHref.replace(locationOrigin,''),
locationPageFolder = folderName != '' ? locationPage.replace('/'+folderName+'/','') : '';
arrayHref = locationPageFolder == '' ? 0 : locationPageFolder.split('/'),
linkHref = '';
for(var i = 0; i < arrayHref.length - 1 ; i++){
    linkHref = linkHref + '../';
}

var header = `<nav class="navbar navbar-expand-lg">
<div class="container">
    <a class="navbar-logo" href="#"><img src="`+linkHref+`assets/images/index/logo.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="`+linkHref+`">HOME <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="`+linkHref+`">WHY CHOOSE US?</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="`+linkHref+`products/">PRODUCTS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="`+linkHref+`faq.html">FAQ</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="`+linkHref+`contact.html">CONTACT US</a>
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
                <img src="`+linkHref+`assets/images/index/logo_footer.png" alt="">
            </div>
            <p class="footer_logoDesc">We are charcoal manufacturer, charcoal<br>distributor and charcoal exporter. We are one of<br>leading exporters of wood charcoal in Viet Nam.<br>We supply charcoal for barbecue (BBQ), charcoal<br> for Shisha, charcoal for industrial applications.</p>
        </div>
        <div class="footer_menu">
            <div class="footer_menuItem">
                <ul>
                    <li>
                        <a href="`+linkHref+`products/">product</a>
                        <ul>
                            <li><a href="`+linkHref+`products/white-charcoal.html">White charcoal</a></li>
                            <li><a href="`+linkHref+`">Hardwood charcoal</a></li>
                            <li><a href="`+linkHref+`">Softwood charcoal</a></li>
                            <li><a href="`+linkHref+`">Mix wood charcoal</a></li>
                            <li><a href="`+linkHref+`">Coconut charcoal</a></li>
                            <li><a href="`+linkHref+`">Sawduct charcoal</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="footer_menuItem">
                <ul>
                    <li>
                        <a href="`+linkHref+`">help</a>
                        <ul>
                            <li><a href="`+linkHref+`">Customer support</a></li>
                            <li><a href="`+linkHref+`">Contact</a></li>
                            <li><a href="`+linkHref+`faq.html">FAQ</a></li>
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
                            <li><a href="`+linkHref+`">Tearms of use</a></li>
                            <li><a href="`+linkHref+`">Privacy policy</a></li>
                            <li><a href="`+linkHref+`">Legal notice</a></li>
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
