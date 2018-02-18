let staff = [{sName:"Marcus Finnberg", title:"Owner", phone:"+46 (0)770131301", pic:"../images/blank.png", email:"marcus.finnberg@contendersports.com"},
    {sName:"Caroline Kuokkanen Da Silva", title:"CFO", phone:"+46 (0)770131302", pic:"../images/blank.png", email:"caroline.dasilva@contendersports.com"},
    {sName:"Sten Finnberg", title:"Sales Director", phone:"+46 (0)770131303", pic:"../images/blank.png", email:"sten.finnberg@contendersports.com"},
    {sName:"Lloyd Dyson", title:"Shipping & Receiving", phone:"+46 (0)770131304", pic:"../images/blank.png", email:"lloyd.dyson@contendersports.com"},
    {sName:"Josef Da Silva Finnberg", title:"CHRO", phone:"+46 (0)770131305", pic:"../images/blank.png", email:"josef.finnberg@contendersports.com"},
    {sName:"Daniel Nerhagen", title:"CQO", phone:"+46 (0)770131306", pic:"../images/blank.png", email:"daniel.nerhagen@contendersports.com"}];

let productRow = document.getElementById("staff");
let displayStaff = function DisplayMan(){
    for (let i = 0; i < staff.length; i++){
        let col = document.createElement("DIV");
        let panelBody = document.createElement("DIV");
        let img = document.createElement("IMG");
        let h5 = document.createElement("H5");
        let em = document.createElement("EM");
        let pp = document.createElement("P");
        let pe = document.createElement("P");

        h5.appendChild(document.createTextNode(staff[i].sName));
        em.appendChild(document.createTextNode(staff[i].title));
        pe.appendChild(document.createTextNode("E-mail: " + staff[i].email));
        pp.appendChild(document.createTextNode("Phone: " + staff[i].phone))

        panelBody.appendChild(img);
        panelBody.appendChild(h5);
        panelBody.appendChild(em);
        panelBody.appendChild(pe);
        panelBody.appendChild(pp);
        col.appendChild(panelBody);
        productRow.appendChild(col);

        col.setAttribute("class", "col-sm-6");
        panelBody.setAttribute("class", "panel-body card");
        img.src=staff[i].pic;
        img.setAttribute("class", "img-responsive");
    }
};
window.addEventListener("load", displayStaff);

/*<div class="col-xs-6">
    <img src="" class="img-responsive" alt="">
    <h3>Management</h3>
    <h5>Name</h5>
    <em>title</em>
    <p>Email: </p>
    <p>Phone: </p>
</div>*/