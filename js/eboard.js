var e_list = [
    {
        "position": "President",
        "name": "Nanda Bhushan",
        "pronouns": "she/her",
        "year": "2019",
        "image": "img/president.jpg",
        "email": "nbhushan@brynmawr.edu"
    },
    {
        "position": "Vice President",
        "name": "Delia Landers",
        "pronouns": "she/her",
        "year": "2019",
        "image": "img/vicepresident.jpg",
        "email": "dlanders@brynmawr.edu"
    },
    {
        "position": "Secretary",
        "name": "Shannan Stafford",
        "pronouns": "she/her",
        "year": "2019",
        "image": "img/secretary.jpg",
        "email": "systafford@brynmawr.edu"
    },
    {
        "position": "Treasurer",
        "name": "Morine Kimani",
        "pronouns": "she/her",
        "year": "2020",
        "image": "img/treasurer.jpg",
        "email": "mkimani@brynmawr.edu"
    },
    {
        "position": "Head of Honor Board",
        "name": "Sofia Colosimo",
        "pronouns": "she/her",
        "year": "2019",
        "image": "img/honorboard.jpg",
        "email": "scolosimo@brynmawr.edu"
    },
    {
        "position": "Chair of Social Justice & Equity",
        "name": "Anu Atte",
        "pronouns": "she/her",
        "year": "2019",
        "image": "img/socialjustice.jpg",
        "email": "aatte@brynmawr.edu"
    }
];


var eboard = document.getElementById("eboard");
for (var i = 0; i < e_list.length; i += 1) {
//    if (i % 2 == 0) {
//        var border_div = document.createElement("div");
//        border_div.className = "col-sm-1";
//        eboard.appendChild(border_div);
//    }




    var col = document.createElement("div");
    col.className = "col-sm-6";
    eboard.appendChild(col);

    var card = document.createElement("div");
    card.className = "card";
    card.style.border = "0";
    col.appendChild(card);


    var card_body = document.createElement("div");
    card_body.className = "card-body mx-5";
    card.appendChild(card_body);

    var container = document.createElement("div");
    container.className = "container";
    card_body.appendChild(container);

    var row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);

    var col_sm_1 = document.createElement("div");
    col_sm_1.className = "col-sm";
    row.appendChild(col_sm_1);

    var img = document.createElement("img");
    img.className = "img-fluid square mb-3";
    img.src = e_list[i]["image"];
    switch(i) {
        case 0: 
            img.alt = "image of president Nanda Bhushan";
            break;
        case 1: 
            img.alt = "image of vice president Delia Landers";
            break;
         case 2: 
            img.alt = "image of secretary Shannan Stafford";
            break;
         case 3: 
            img.alt = "image of treasurer MOrine Kimani";
            break;
         case 4: 
            img.alt = "image of head of honor board Sofia Colosimo Bhushan";
            break;
         case 5: 
            img.alt = "image of chair of social justice and equity Anu Atte";
            break;
        default:
            img.alt = "image of one of the executive board members";
            break;
    }
    col_sm_1.append(img);

    var col_sm_2 = document.createElement("div");
    col_sm_2.className = "col-sm";
    row.appendChild(col_sm_2);

    var h5 = document.createElement("h5");
    var h5_text = document.createTextNode(e_list[i]["position"]);
    h5.className = "card-title";
    h5.appendChild(h5_text);
    col_sm_2.appendChild(h5);

    var p_name = document.createElement("p");
    var p_name_text = document.createTextNode("Name: " + e_list[i]["name"]);
    p_name.classList = "font-weight_light mb-0";
    p_name.appendChild(p_name_text);
    col_sm_2.appendChild(p_name);

    var p_pronouns = document.createElement("p");
    var p_pronouns_text = document.createTextNode("Pronouns: " + e_list[i]["pronouns"]);
    p_pronouns.classList = "font-weight_light mb-0";
    p_pronouns.appendChild(p_pronouns_text);
    col_sm_2.appendChild(p_pronouns);

    var p_year = document.createElement("p");
    var p_year_text = document.createTextNode("Year: " + e_list[i]["year"]);
    p_year.classList = "font-weight_light mb-0";
    p_year.appendChild(p_year_text);
    col_sm_2.appendChild(p_year);
    
    var p_email = document.createElement("p");
    var p_email_text = document.createTextNode("Email: " + e_list[i]["email"]);
    p_email.classList = "font-weight_light mb-0";
    p_email.appendChild(p_email_text);
    col_sm_2.appendChild(p_email);

//    if (i % 2 != 0) {
//        var border_div2 = document.createElement("div");
//        border_div2.className = "col-sm-1";
//        eboard.appendChild(border_div2);
//    }
    


}



//pleasework
//<div class="card" style="width: 18rem;">
//  <img class="card-img-top" src="..." alt="Card image cap">
//  <div class="card-body">
//    <h5 class="card-title">Card title</h5>
//    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//    <a href="#" class="btn btn-primary">Go somewhere</a>
//  </div>
//</div>
//
//<div class="col-sm-6">
//            <div class="card" style="border:0">
//                <div class="card-body">
//                    <div class="container">
//                        <div class="row">
//                            <div class="col-sm">
//                                <img class="img-fluid square mb-3" src="img/president.jpg" alt="">
//                            </div>
//                            <div class="col-sm">
//                                <h5>Position: President</h5>
//                                <p class="font-weight-light mb-0">Name: Nanda Bhushan</p>
//                                <p class="font-weight-light mb-0">Pronouns: she/her</p>
//                                <p class="font-weight-light mb-0">Year: 2019</p>
//                            </div>
//                        </div>
//                    </div>
//                </div>
//            </div>
//        </div>
//        <div class="col-sm-6">
//            <div class="card" style="border:0">
//                <div class="card-body">
//                    <div class="container">
//                        <div class="row">
//                            <div class="col-sm">
//                                <img class="img-fluid square mb-3" src="img/president.jpg" alt="">
//                            </div>
//                            <div class="col-sm">
//                                <h5>Position: President</h5>
//                                <p class="font-weight-light mb-0">Name: Nanda Bhushan</p>
//                                <p class="font-weight-light mb-0">Pronouns: she/her</p>
//                                <p class="font-weight-light mb-0">Year: 2019</p>
//                            </div>
//                        </div>
//                    </div>
//                </div>
//            </div>
//        </div>