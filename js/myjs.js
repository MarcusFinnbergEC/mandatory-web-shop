let products = [{fabric:"Bauer Vapor 1X Lite Griptac", price:"235", desc:"Light and extremely powerful hockeystick, give yourself the best chance to score a ton of goals", pic:"../images/Products/bauerStick.jpg"},
    {fabric:"Bauer Supreme 1s", price:"169", desc:"Tight and light fit, feel every dangle you make with this thin leather glove", pic:"../images/Products/bauerGloves.jpg"},
    {fabric:"Bauer Re-Akt 200", price:"239", desc:"Sick of concussions? This helmet gives you the extra protection you need", pic:"../images/Products/bauerHelmet.jpg"},
    {fabric:"CCM RibCor Trigger2 PMT Grip", price:"229", desc:"Low-kick for a quick release and hard wrist shots, perfect for the sniper", pic:"../images/Products/ccmStick.jpg"},
    {fabric:"CCM Super Tacks", price:"159", desc:"Comfortable glove with a perfect fit", pic:"../images/Products/ccmGloves.jpg"},
    {fabric:"CCM Fitlite 3DS", price:"178", desc:"Quality helmet, adjustable fit and removeable paddings for your comfort", pic:"../images/Products/ccmHelmet.jpg"},
    {fabric:"Warrior Covert QRL SE Grip", price:"229", desc:"High-kick for the hardest slapshot you've ever seen.", pic:"../images/Products/warriorStick.jpg"},
    {fabric:"Warrior Alpha QX", price:"155", desc:"Kick ass gloves, easy to drop, perfect for a fighter", pic:"../images/Products/warriorGloves.jpg"},
    {fabric:"Warrior Covert PX+", price:"159", desc:"Dont worry about getting a hit to the head, this helmet will protect you, well most of the times", pic:"../images/Products/warriorHelmet.png"}];
/*for (let i = 0; i < products.length; i++) {
    console.log(products[i].fabric);
}*/

let productRow = document.getElementById("productRow");
let displayItems = function DisplayOfferItems(){
        for (let i = 0; i < products.length; i++){
            let col = document.createElement("DIV");
            let card = document.createElement("DIV");
            let panelBody = document.createElement("DIV");
            let img = document.createElement("IMG");
            let h4 = document.createElement("H4");
            let em = document.createElement("EM");
            let panelFooter = document.createElement("DIV");
            let p = document.createElement("P");
            let button = document.createElement("BUTTON");
            let buttontext = (document.createTextNode("Add to cart"));
            let clear = document.createElement("DIV");

            h4.appendChild(document.createTextNode(products[i].fabric));
            button.appendChild(buttontext);
            em.appendChild(document.createTextNode(products[i].desc));
            p.appendChild(document.createTextNode("$ " + products[i].price));

            panelBody.appendChild(img);
            panelBody.appendChild(h4);
            panelBody.appendChild(em);
            panelFooter.appendChild(p);
            panelFooter.appendChild(button);
            panelFooter.appendChild(clear);
            card.appendChild(panelBody);
            card.appendChild(panelFooter);
            col.appendChild(card);
            productRow.appendChild(col);


            card.setAttribute("class", "productCard");
            panelBody.setAttribute("class", "panel-body");
            col.setAttribute("class", "col-sm-3");
            panelFooter.setAttribute("class", "panel-footer");
            button.setAttribute("class", "btn btn-danger");
            clear.setAttribute("class", "clearfix");
            img.src=products[i].pic;
            img.setAttribute("class", "img-responsive");
        }
};
window.addEventListener("load", displayItems);

/*--fullscreen mode--
let y = window.innerHeight;
let x = window.innerWidth;

body.height = y;
body.width = x;


--Spara function till variabel--
let x = function(){
    console.log("log");
};
setTimeout(x, 5000);*/

//--Skapa element och sätta i värden i dem--
/*let header = document.createElement("h1");
        let textHeader = document.createTextNode("A header!!!");
        header.appendChild(textHeader);
        let pg = document.createElement("p");
        let text = document.createTextNode("This is my paragraph that sucks!!");
        pg.appendChild(text);
        let img = document.createElement("IMG");
        img.setAttribute("src", "pic1.png");
        let div = document.createElement("div");
        div.appendChild(header);
        div.appendChild(pg);
        div.appendChild(img);

        let existingElement = document.getElementsByTagName("body")[0];
        existingElement.appendChild(div);*/

//--
/*function Product(fabric, fabric, price, desc, pic) {
    this.fabric = fabric;
    this.fabric = fabric;
    this.price = price;
    this.desc = desc;
    this.pic = pic;
}*/

/*products.push({fabric:"Bauer", fabric:"Vapor 1X Lite Griptac", price:235, desc:"Light and extremely powerful hockeystick, give yourself the best chance to score a ton of goals", pic:"../images/Products/bauerStick.jpg"});

products.push({fabric:"Bauer", fabric:"Supreme 1s", price:169, desc:"Tight and light fit, feel every dangle you make with this thin leather glove", pic:"../images/Products/bauerGloves.jpg"});

products.push({fabric:"Bauer", fabric:"Re-Akt 200", price:239, desc:"Sick of concussions? This helmet gives you the extra protection you need", pic:"../images/Products/bauerHelmet.jpg"});

products.push({fabric:"CCM", fabric:"RibCor Trigger2 PMT Grip", price:229, desc:"Low-kick for a quick release and hard wrist shots, perfect for the sniper", pic:"../images/Products/ccmStick.jpg"});

products.push({fabric:"CCM", fabric:"Super Tacks", price:159, desc:"Comfortable glove with a perfect fit", pic:"../images/Products/ccmGloves.jpg"});

products.push({fabric:"CCM", fabric:"Fitlite 3DS", price:178, desc:"Quality helmet, adjustable fit and removeable paddings for your comfort", pic:"../images/Products/ccmStick.jpg"});

products.push({fabric:"Warrior", fabric:"Covert QRL SE Grip", price:229, desc:"High-kick for the hardest slapshot you've ever seen.", pic:"../images/Products/warriorStick.jpg"});

products.push({fabric:"Warrior", fabric:"Alpha QX", price:155, desc:"Kick ass gloves, easy to drop, perfect for a fighter", pic:"../images/Products/warriorGloves.jpg"});

products.push({fabric:"Warrior", fabric:"Covert PX+", price:159, desc:"Dont worry about getting a hit to the head, this helmet will protect you, well most of the times", pic:"../images/Products/warriorHelmet.png"});*/


//console.log(products);

/*let panelBody = document.querySelectorAll('.panel-body');
let panelFooter = document.querySelectorAll('.panel-footer');

console.log(panelBody);
console.log(panelFooter);*/
/*let img = document.querySelectorAll('img');
let h4 = document.querySelectorAll('h4');
let p = document.querySelectorAll('p');
let em = document.querySelectorAll('em');*/