var locationHref = location.href,
locationOrigin = location.origin,
folderName = 'vinachaki-html',
locationPage = locationHref.replace(locationOrigin,''),
locationPageFolder = folderName != '' ? locationPage.replace('/'+folderName+'/','') : locationPage;
arrayHref = locationPageFolder == '' ? 0 : locationPageFolder.split('/'),
linkHref = '';

for(var i = 0; i < arrayHref.length - 1 ; i++){
    linkHref = linkHref + '../';
}

var header = `
<nav class="navbar navbar-expand-lg">
    <div class="container">
        <a class="navbar-logo" href="#"><img src="`+linkHref+`assets/images/index/logo.png" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="`+linkHref+`index.html">HOME <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="`+linkHref+`why-choose-us.html">WHY CHOOSE US?</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="`+linkHref+`products/our-product.html">PRODUCTS</a>
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
                        <a href="`+linkHref+`products/our-product.html">product</a>
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
                            <li><a href="`+linkHref+`contact.html">Contact</a></li>
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

var contact = `
<div class="container">
    <div class="sectionGen_contactWrap">
        <div class="sectionGen_contactForm">
            <h2 class="sectionGen_contactFormTitle">Contact us</h2>
            <p class="sectionGen_contactFormDesc">Feel free to contact us any time. We will get back to you as<br>soon as we can!</p>
            <form id="contact">
                <div class="d-flex">
                    <div class="form-group">
                        <input type="text" class="form-control" id="contactName">
                        <span class="form-group-txt-hover">Name</span>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="contactPhone">
                        <span class="form-group-txt-hover">Phone</span>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="contactEmail">
                        <span class="form-group-txt-hover">Email address</span>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="form-group">
                        <textarea maxlength="120" id="textarea" rows="3" id="contactMessage"></textarea>
                        <span class="form-group-txt-hover">Message</span>
                    </div>
                    <button type="submit" class="btn btn-block btn-orange">SENT NOW</button>
                </div>
              </form>
        </div>
        <div class="sectionGen_contactIntroduce">
            <h2 class="sectionGen_contactIntroduceTitle">VinaChaki Co., LTD</h2>
            <div class="sectionGen_contactIntroduceItem">
                <div class="sectionGen_contactIntroduceItemIcon">
                    <img src="`+linkHref+`assets/images/index/ic_location.png" alt="">
                </div>
                <p>111/13 Tran Huu Trang, Ward 10,<br>Phu Nhuan Dist., Ho Chi Minh City, Viet Nam</p>
            </div>
            <div class="sectionGen_contactIntroduceItem">
                <div class="sectionGen_contactIntroduceItemIcon">
                    <a href="tel:+84868601809"><img src="`+linkHref+`assets/images/index/ic_phone.png" alt=""></a>
                </div>
                <p><a href="tel:+84868601809">(+84) 86 860 1809</a></p>
            </div>
            <div class="sectionGen_contactIntroduceItem">
                <div class="sectionGen_contactIntroduceItemIcon">
                    <a href="mailto:vinachaki@gmail.com"><img src="`+linkHref+`assets/images/index/ic_mail.png" alt=""></a>
                </div>
                <p><a href="mailto:vinachaki@gmail.com">vinachaki@gmail.com</a></p>
            </div>
            <div class="sectionGen_contactIntroduceItem">
                <div class="sectionGen_contactIntroduceItemIcon">
                    <a href="www.facebook.com/vinachaki"><img src="`+linkHref+`assets/images/index/ic_fb.png" alt=""></a>
                </div>
                <p><a href="www.facebook.com/vinachaki">www.facebook.com/vinachaki</a></p>
            </div>
            <div class="sectionGen_contactIntroduceItem">
                <div class="sectionGen_contactIntroduceItemIcon">
                    <a href="www.instagram/vinachaki"><img src="`+linkHref+`assets/images/index/ic_instagram.png" alt=""></a>
                </div>
                <p><a href="www.instagram/vinachaki">www.instagram/vinachaki</a></p>
            </div>
        </div>
    </div>
</div>`;

var ourProduct = `
<div class="container"> 
    <h2>Our charcoal products </h2>
    <div class="row">
        <div class="col-4 boxInfo">
            <div class="boxImg">
                <a href="product/hardwood-charcoal.html"><img src="assets/images/contact/product1.jpg" alt=""></a>
                
            </div>
            <div class="boxText">
                <a href="product/hardwood-charcoal.html"><h4>Hardwood Charcoal</h4></a>
            </div>
        </div>
        <div class="col-4 boxInfo">
            <div class="boxImg">
                <a href="product/softwood-charcoal.html"><img src="assets/images/contact/product2.jpg" alt=""></a>
            </div>
            <div class="boxText">
                <a href="product/softwood-charcoal.html"><h4>Softwood Charcoal</h4></a>
            </div>
        </div>
        <div class="col-4 boxInfo">
            <div class="boxImg">
                <a href="product/mixed-wood-harcoal.html"><img src="assets/images/contact/product3.jpg" alt=""></a>
            </div>
            <div class="boxText">
                <a href="product/mixed-wood-harcoal.html"><h4>Mixed wood Charcoal</h4></a>
            </div>
        </div>
    </div>
</div>
`;

if($('#layout-header').length > 0){
    $('#layout-header').html(header);
}

if($('#layout-contact').length > 0){
    $('#layout-contact').html(contact);
}

if($('#layout-footer').length > 0){
    $('#layout-footer').html(footer);
}

if($('#layout-ourProduct').length > 0){
    $('#layout-ourProduct').html(ourProduct);
}

