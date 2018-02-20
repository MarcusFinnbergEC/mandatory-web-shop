let products = [{fabric:"Bauer Vapor 1X Lite Griptac", price:"235", desc:"Light and extremely powerful hockeystick, give yourself the best chance to score a ton of goals", pic:"../images/Products/bauerStick.jpg", link:"checkoutbs.html"},
    {fabric:"Bauer Supreme 1s", price:"169", desc:"Tight and light fit, feel every dangle you make with this thin leather glove", pic:"../images/Products/bauerGloves.jpg", link:"checkoutbg.html"},
    {fabric:"Bauer Re-Akt 200", price:"239", desc:"Sick of concussions? This helmet gives you the extra protection you need", pic:"../images/Products/bauerHelmet.jpg", link:"checkoutbh.html"},
    {fabric:"CCM RibCor Trigger2 PMT Grip", price:"229", desc:"Low-kick for a quick release and hard wrist shots, perfect for the sniper", pic:"../images/Products/ccmStick.jpg", link:"checkoutcs.html"},
    {fabric:"CCM Super Tacks", price:"159", desc:"Comfortable glove with a perfect fit", pic:"../images/Products/ccmGloves.jpg", link:"checkoutcg.html"},
    {fabric:"CCM Fitlite 3DS", price:"178", desc:"Quality helmet, adjustable fit and removeable paddings for your comfort", pic:"../images/Products/ccmHelmet.jpg", link:"checkoutch.html"},
    {fabric:"Warrior Covert QRL SE Grip", price:"229", desc:"High-kick for the hardest slapshot you've ever seen.", pic:"../images/Products/warriorStick.jpg", link:"checkoutws.html"},
    {fabric:"Warrior Alpha QX", price:"155", desc:"Kick ass gloves, easy to drop, perfect for a fighter", pic:"../images/Products/warriorGloves.jpg", link:"checkoutwg.html"},
    {fabric:"Warrior Covert PX+", price:"159", desc:"Dont worry about getting a hit to the head, this helmet will protect you, well most of the times", pic:"../images/Products/warriorHelmet.png", link:"checkoutwh.html"}];

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
            let buttontext = (document.createTextNode("Buy now"));
            let clear = document.createElement("DIV");
            //let a = document.createElement("A");

            h4.appendChild(document.createTextNode(products[i].fabric));
            button.appendChild(buttontext);
            em.appendChild(document.createTextNode(products[i].desc));
            p.appendChild(document.createTextNode("$ " + products[i].price));

            //a.appendChild(button);
            panelBody.appendChild(img);
            panelBody.appendChild(h4);
            panelBody.appendChild(em);
            panelFooter.appendChild(p);
            panelFooter.appendChild(a);
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
            a.setAttribute("href", products[i].link);
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
/*function Product(sName, sName, title, phone, pic) {
    this.sName = sName;
    this.sName = sName;
    this.title = title;
    this.phone = phone;
    this.pic = pic;
}*/

/*staff.push({sName:"Bauer", sName:"Vapor 1X Lite Griptac", title:235, phone:"Light and extremely powerful hockeystick, give yourself the best chance to score a ton of goals", pic:"../images/Products/bauerStick.jpg"});

staff.push({sName:"Bauer", sName:"Supreme 1s", title:169, phone:"Tight and light fit, feel every dangle you make with this thin leather glove", pic:"../images/Products/bauerGloves.jpg"});

staff.push({sName:"Bauer", sName:"Re-Akt 200", title:239, phone:"Sick of concussions? This helmet gives you the extra protection you need", pic:"../images/Products/bauerHelmet.jpg"});

staff.push({sName:"CCM", sName:"RibCor Trigger2 PMT Grip", title:229, phone:"Low-kick for a quick release and hard wrist shots, perfect for the sniper", pic:"../images/Products/ccmStick.jpg"});

staff.push({sName:"CCM", sName:"Super Tacks", title:159, phone:"Comfortable glove with a perfect fit", pic:"../images/Products/ccmGloves.jpg"});

staff.push({sName:"CCM", sName:"Fitlite 3DS", title:178, phone:"Quality helmet, adjustable fit and removeable paddings for your comfort", pic:"../images/Products/ccmStick.jpg"});

staff.push({sName:"Warrior", sName:"Covert QRL SE Grip", title:229, phone:"High-kick for the hardest slapshot you've ever seen.", pic:"../images/Products/warriorStick.jpg"});

staff.push({sName:"Warrior", sName:"Alpha QX", title:155, phone:"Kick ass gloves, easy to drop, perfect for a fighter", pic:"../images/Products/warriorGloves.jpg"});

staff.push({sName:"Warrior", sName:"Covert PX+", title:159, phone:"Dont worry about getting a hit to the head, this helmet will protect you, well most of the times", pic:"../images/Products/warriorHelmet.png"});*/


//console.log(staff);

/*let panelBody = document.querySelectorAll('.panel-body');
let panelFooter = document.querySelectorAll('.panel-footer');

console.log(panelBody);
console.log(panelFooter);*/
/*let img = document.querySelectorAll('img');
let h4 = document.querySelectorAll('h4');
let p = document.querySelectorAll('p');
let em = document.querySelectorAll('em');*/