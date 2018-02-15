let products = [];
function Product(fabric, name, price, desc, pic) {
    this.pFabric = fabric;
    this.pName = name;
    this.pPrice = price;
    this.pDesc = desc;
    this.pPic = pic;
}

products.push({pFabric:"Bauer", pName:"Vapor 1X Lite Griptac", pPrice:235, pDesc:"Light and extremely powerful hockeystick, give yourself the best chance to score a ton of goals", pPic:"../images/Products/bauerStick.jpg"});

products.push({pFabric:"Bauer", pName:"Supreme 1s", pPrice:169, pDesc:"Tight and light fit, feel every dangle you make with this thin leather glove", pPic:"../images/Products/bauerGloves.jpg"});

products.push({pFabric:"Bauer", pName:"Re-Akt 200", pPrice:239, pDesc:"Sick of concussions? This helmet gives you the extra protection you need", pPic:"../images/Products/bauerHelmet.jpg"});

products.push({pFabric:"CCM", pName:"RibCor Trigger2 PMT Grip", pPrice:229, pDesc:"Low-kick for a quick release and hard wrist shots, perfect for the sniper", pPic:"../images/Products/ccmStick.jpg"});

products.push({pFabric:"CCM", pName:"Super Tacks", pPrice:159, pDesc:"Comfortable glove with a perfect fit", pPic:"../images/Products/ccmGloves.jpg"});

products.push({pFabric:"CCM", pName:"Fitlite 3DS", pPrice:178, pDesc:"Quality helmet, adjustable fit and removeable paddings for your comfort", pPic:"../images/Products/ccmStick.jpg"});

products.push({pFabric:"Warrior", pName:"Covert QRL SE Grip", pPrice:229, pDesc:"High-kick for the hardest slapshot you've ever seen.", pPic:"../images/Products/warriorStick.jpg"});

products.push({pFabric:"Warrior", pName:"Alpha QX", pPrice:155, pDesc:"Kick ass gloves, easy to drop, perfect for a fighter", pPic:"../images/Products/warriorGloves.jpg"});

products.push({pFabric:"Warrior", pName:"Covert PX+", pPrice:159, pDesc:"Dont worry about getting a hit to the head, this helmet will protect you, well most of the times", pPic:"../images/Products/warriorHelmet.png"});


console.log(products);

let panelBody = document.querySelectorAll('.panel-body');
let panelFooter = document.querySelectorAll('.panel-footer');

console.log(panelBody);
console.log(panelFooter);
/*let displayItems = function DisplayOfferItems(){
    for (i = 0; i => 4; i++) {

        panelbody pic / product (pPic(src))
        panelbody h4 / product (pFabric + pName) appendchild
        panelbody em / product (pDesc)
        panelfooter p / product (pPrice);
    }
};


--fullscreen mode--
let y = window.innerHeight;
let x = window.innerWidth;

body.height = y;
body.width = x;


--Spara function till variabel--
let x = function(){
    console.log("log");
};
setTimeout(x, 5000);*/