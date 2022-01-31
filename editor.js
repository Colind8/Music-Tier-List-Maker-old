document.getElementById("data_edit_title").style.visibility = "hidden";
document.getElementById("data_edit_author").style.visibility = "hidden";
document.getElementById("data_edit_desc").style.visibility = "hidden";
document.getElementById("tier_add").style.visibility = "hidden";
document.getElementById("tier_edit").style.visibility = "hidden";
document.getElementById("tier_edit_name").style.visibility = "hidden";

var obj = {
    "data": {
        "title": "Title",
        "desc": "Description",
        "author": "Author",
        "version": 1,
        "showrankings": "false"
    },
    "tiers": [
        {
            "tiername": "S",
            "tiercolor": "#37370a",
            "tierdata": [
                {
                "name": "Sample",
                "link": "https://www.youtube.com/watch?v=R5YOY8Jtgnc",
                "desc": "Remove this if you want",
                "image": "https://ih0.redbubble.net/image.377239350.9528/flat,800x800,075,f.u1.jpg"
                }
            ]
        },
        {
            "tiername": "A",
            "tiercolor": "#18380a",
            "tierdata": [
            ]
        },
        {
            "tiername": "B",
            "tiercolor": "#0a382a",
            "tierdata": [
            ]
        },
        {
            "tiername": "C",
            "tiercolor": "#0a1a38",
            "tierdata": [
            ]
        },
        {
            "tiername": "D",
            "tiercolor": "#2c0a38",
            "tierdata": [
            ]
        },
        {
            "tiername": "F",
            "tiercolor": "#380a0a",
            "tierdata": [
            ]
        }
        
    ]
};

build1();
console.log(obj);

/*
function build() {

if (obj.data.showrankings == "true") {
    document.getElementById("rankings").innerHTML = "Disable Rankings";
} else {
    document.getElementById("rankings").innerHTML = "Enable Rankings";
}

document.getElementById("title").innerHTML = obj.data.title;
document.getElementById("author").innerHTML = obj.data.author;
document.getElementById("description").innerHTML = obj.data.desc;
    
rank = 0;
table = `<tr class="stier"><th id="tiername">S</th>`
for (i = 0; i < obj.tiers.S.length; i++) {
    rank++;
    //CREATE CONTAINER
    table += `<td><div class="container">`;
    //ADD LINK
    table += `<a href="` + obj.tiers.S[i].link + `" target="_blank">` 
    //CREATE IMAGE
    table += `<img src="` + obj.tiers.S[i].image + `" alt="` + obj.tiers.S[i].name + `"></a>`
    //CREATE OVERLAY
    table += `<span class="tooltipedit">`
    //ADD METADATA
    table += `<h4>` + obj.tiers.S[i].name + `</h4>`
    if (obj.data.showrankings == "true") {
        table += `#` + rank   
    }
    table += `<p class="songdesc">` +obj.tiers.S[i].desc + `</p>`

    //EDITOR FUNCTIONS
    table += `<button onclick="move_item_left('S',` + i + `)"><<</button>`;
    table += `<button onclick="move_item_right('S',` + i + `)">>></button>`;
    table += `<button onclick="delete_item('S',` + i + `)">X</button>`;
    
    //CLOSE CONTAINER
    table += `</span></div></td>`
}
table += `</tr><tr class="atier"><th id="tiername">A</th>`
for (i = 0; i < obj.tiers.A.length; i++) {
    rank++;
    //CREATE CONTAINER
    table += `<td><div class="container">`;
    //ADD LINK
    table += `<a href="` + obj.tiers.A[i].link + `" target="_blank">` 
    //CREATE IMAGE
    table += `<img src="` + obj.tiers.A[i].image + `" alt="` + obj.tiers.A[i].name + `"></a>`
    //CREATE OVERLAY
    table += `<span class="tooltipedit">`
    //ADD METADATA
    table += `<h4>` + obj.tiers.A[i].name + `</h4>`
    if (obj.data.showrankings == "true") {
        table += `#` + rank   
    }
    table += `<p class="songdesc">` +obj.tiers.A[i].desc + `</p>`

    //EDITOR FUNCTIONS
    table += `<button onclick="move_item_left('A',` + i + `)"><<</button>`;
    table += `<button onclick="move_item_right('A',` + i + `)">>></button>`;
    table += `<button onclick="delete_item('A',` + i + `)">X</button>`;
    
    //CLOSE CONTAINER
    table += `</span></div></td>`
        }
table += `</tr><tr class="btier"><th id="tiername">B</th>`
for (i = 0; i < obj.tiers.B.length; i++) {
    rank++;
    //CREATE CONTAINER
    table += `<td><div class="container">`;
    //ADD LINK
    table += `<a href="` + obj.tiers.B[i].link + `" target="_blank">` 
    //CREATE IMAGE
    table += `<img src="` + obj.tiers.B[i].image + `" alt="` + obj.tiers.B[i].name + `"></a>`
    //CREATE OVERLAY
    table += `<span class="tooltipedit">`
    //ADD METADATA
    table += `<h4>` + obj.tiers.B[i].name + `</h4>`
    if (obj.data.showrankings == "true") {
        table += `#` + rank   
    }
    table += `<p class="songdesc">` +obj.tiers.B[i].desc + `</p>`

    //EDITOR FUNCTIONS
    table += `<button onclick="move_item_left('B',` + i + `)"><<</button>`;
    table += `<button onclick="move_item_right('B',` + i + `)">>></button>`;
    table += `<button onclick="delete_item('B',` + i + `)">X</button>`;
    
    //CLOSE CONTAINER
    table += `</span></div></td>`
        }
table += `</tr><tr class="ctier"><th id="tiername">C</th>`
for (i = 0; i < obj.tiers.C.length; i++) {
    rank++;
    //CREATE CONTAINER
    table += `<td><div class="container">`;
    //ADD LINK
    table += `<a href="` + obj.tiers.C[i].link + `" target="_blank">` 
    //CREATE IMAGE
    table += `<img src="` + obj.tiers.C[i].image + `" alt="` + obj.tiers.C[i].name + `"></a>`
    //CREATE OVERLAY
    table += `<span class="tooltipedit">`
    //ADD METADATA
    table += `<h4>` + obj.tiers.C[i].name + `</h4>`
    if (obj.data.showrankings == "true") {
        table += `#` + rank   
    }
    table += `<p class="songdesc">` +obj.tiers.C[i].desc + `</p>`

    //EDITOR FUNCTIONS
    table += `<button onclick="move_item_left('C',` + i + `)"><<</button>`;
    table += `<button onclick="move_item_right('C',` + i + `)">>></button>`;
    table += `<button onclick="delete_item('C',` + i + `)">X</button>`;
    
    //CLOSE CONTAINER
    table += `</span></div></td>`
}
table += `</tr><tr class="dtier"><th id="tiername">D</th>`
for (i = 0; i < obj.tiers.D.length; i++) {
    rank++;
    //CREATE CONTAINER
    table += `<td><div class="container">`;
    //ADD LINK
    table += `<a href="` + obj.tiers.D[i].link + `" target="_blank">` 
    //CREATE IMAGE
    table += `<img src="` + obj.tiers.D[i].image + `" alt="` + obj.tiers.D[i].name + `"></a>`
    //CREATE OVERLAY
    table += `<span class="tooltipedit">`
    //ADD METADATA
    table += `<h4>` + obj.tiers.D[i].name + `</h4>`
    if (obj.data.showrankings == "true") {
        table += `#` + rank   
    }
    table += `<p class="songdesc">` +obj.tiers.D[i].desc + `</p>`

    //EDITOR FUNCTIONS
    table += `<button onclick="move_item_left('D',` + i + `)"><<</button>`;
    table += `<button onclick="move_item_right('D',` + i + `)">>></button>`;
    table += `<button onclick="delete_item('D',` + i + `)">X</button>`;
    
    //CLOSE CONTAINER
    table += `</span></div></td>`
}
table += `</tr><tr class="ftier"><th id="tiername">F</th>`
for (i = 0; i < obj.tiers.F.length; i++) {
    rank++;
    //CREATE CONTAINER
    table += `<td><div class="container">`;
    //ADD LINK
    table += `<a href="` + obj.tiers.F[i].link + `" target="_blank">` 
    //CREATE IMAGE
    table += `<img src="` + obj.tiers.F[i].image + `" alt="` + obj.tiers.F[i].name + `"></a>`
    //CREATE OVERLAY
    table += `<span class="tooltipedit">`
    //ADD METADATA
    table += `<h4>` + obj.tiers.F[i].name + `</h4>`
    if (obj.data.showrankings == "true") {
        table += `#` + rank
    }
    table += `<p class="songdesc">` +obj.tiers.F[i].desc + `</p>`

    //EDITOR FUNCTIONS
    table += `<button onclick="move_item_left('F',` + i + `)"><<</button>`;
    table += `<button onclick="move_item_right('F',` + i + `)">>></button>`;
    table += `<button onclick="delete_item('F',` + i + `)">X</button>`;
    
    //CLOSE CONTAINER
    table += `</span></div></td>`
}
table += "</tr></table>"
document.getElementById("tierlist").innerHTML = table;
build_code();
}
*/
function build1() {
    
if (obj.data.showrankings == "true") {
    document.getElementById("rankings").innerHTML = "Disable Rankings";
} else {
    document.getElementById("rankings").innerHTML = "Enable Rankings";
}
console.log("Building Tier List... (VERSION 1.0)");
console.log("Adding Data...");
//META DATA
document.getElementById("title").innerHTML = obj.data.title;
document.getElementById("doctitle").innerHTML = obj.data.title + " | Music Tier List Maker";
document.getElementById("author").innerHTML = "By " + obj.data.author;
document.getElementById("description").innerHTML = obj.data.desc;

//WRITE TABLE
console.log("Creating Table...");
rank = 0;
table = "";
additemtiers = "";
for (i2 = 0; i2 < obj.tiers.length; i2++) {
    console.log(`Build ${obj.tiers[i2].tiername}`)
    additemtiers += `<option value="${i2}">${obj.tiers[i2].tiername} Tier</option>`;
    table += `<tr style="background-color: ` + obj.tiers[i2].tiercolor + `"><th id="tiername">`+obj.tiers[i2].tiername+`</th>`
    for (i = 0; i < obj.tiers[i2].tierdata.length; i++) {
        rank++;
        //CREATE CONTAINER
        table += `<td><div class="container">`;
        //ADD LINK
        table += `<a href="` + obj.tiers[i2].tierdata[i].link + `" target="_blank">` 
        //CREATE IMAGE
        table += `<img src="` + obj.tiers[i2].tierdata[i].image + `" alt="` + obj.tiers[i2].tierdata[i].name + `"></a>`
        //CREATE OVERLAY
        table += `<span class="tooltipedit">`
        //ADD METADATA
        table += `<h4>` + obj.tiers[i2].tierdata[i].name + `</h4>`
        if (obj.data.showrankings == "true") {
            table += `#` + rank   
        }
        table += `<p class="songdesc">` +obj.tiers[i2].tierdata[i].desc + `</p>`
        
        //EDITOR FUNCTIONS
        table += `<button onclick="move_item_left(${i2},${i})"><<</button>`;
        table += `<button onclick="move_item_right(${i2},${i})">>></button>`;
        table += `<button onclick="delete_item(${i2},${i})">X</button>`;
        
        //CLOSE CONTAINER
        table += `</span></div></td>`
    }
    
    table += `</tr>`
    
}
//table += "</table>"

//PASTE TABLE
document.getElementById("tiers_tier_form").innerHTML = additemtiers;
document.getElementById("tiers_tier_edit_form").innerHTML = additemtiers;
document.getElementById("tierlist").innerHTML = table;
console.log("Tier List Built");
build_code();
}

function build_code() {
    jsonobj = JSON.stringify(obj);
    jsonobj = window.btoa(jsonobj);
    document.getElementById("generated_code").value = "https://Music-Tier-List-Maker.colind8.repl.co/?file=" + jsonobj;
}

function edit_title() {
    document.getElementById("data_edit_buttons").style.visibility = "hidden";
    document.getElementById("data_edit_title").style.visibility = "visible";
}
function edit_author() {
    document.getElementById("data_edit_buttons").style.visibility = "hidden";
    document.getElementById("data_edit_author").style.visibility = "visible";
}
function edit_desc() {
    document.getElementById("data_edit_buttons").style.visibility = "hidden";
    document.getElementById("data_edit_desc").style.visibility = "visible";
}
function edit_rankings() {
    if (obj.data.showrankings == "true") {
        obj.data.showrankings = "false";
    } else {
        obj.data.showrankings = "true";
    }
    build1();
}
function button_add_tier() {
    document.getElementById("tier_edit_buttons").style.visibility = "hidden";
    document.getElementById("tier_add").style.visibility = "visible";
}
function button_edit_tier() {
    document.getElementById("tier_edit_buttons").style.visibility = "hidden";
    document.getElementById("tier_edit").style.visibility = "visible";
}
function tier_edit_submit() {
    document.getElementById("tier_edit_buttons").style.visibility = "visible";
    document.getElementById("tier_edit").style.visibility = "hidden";
}
function button_edit_name_tier() {
    let tier = document.getElementById("tiers_tier_edit_form").value;
    document.getElementById("tier_edit_name").style.visibility = "visible";
    document.getElementById("tier_edit_name_form").value = obj.tiers[tier].tiername;
    document.getElementById("tier_edit_name_form_color").value = obj.tiers[tier].tiercolor;
    document.getElementById("tier_edit").style.visibility = "hidden";
}

function data_title_submit() {
    let x = document.getElementById("data_title_form").value;
    obj.data.title = x;
    build1();
    document.getElementById("data_edit_buttons").style.visibility = "visible";
    document.getElementById("data_edit_title").style.visibility = "hidden";
}
function data_author_submit() {
    let x = document.getElementById("data_author_form").value;
    obj.data.author = x;
    build1();
    document.getElementById("data_edit_buttons").style.visibility = "visible";
    document.getElementById("data_edit_author").style.visibility = "hidden";
}
function data_desc_submit() {
    let x = document.getElementById("data_desc_form").value;
    obj.data.desc = x;
    build1();
    document.getElementById("data_edit_buttons").style.visibility = "visible";
    document.getElementById("data_edit_desc").style.visibility = "hidden";
}
function tier_add_submit() {
    let x = document.getElementById("tier_add_form").value;
    let y = document.getElementById("tier_add_form_color").value;
    obj.tiers.push({
        "tiername": x,
        "tiercolor": y,
        "tierdata": [
        ]
    });
    build1();
    document.getElementById("tier_edit_buttons").style.visibility = "visible";
    document.getElementById("tier_add").style.visibility = "hidden";
}
function tier_edit_name_submit() {
    let tier = document.getElementById("tiers_tier_edit_form").value
    let x = document.getElementById("tier_edit_name_form").value;
    let y = document.getElementById("tier_edit_name_form_color").value;
    obj.tiers[tier].tiername = x;
    obj.tiers[tier].tiercolor = y;
    build1();
    document.getElementById("tier_edit").style.visibility = "visible";
    document.getElementById("tier_edit_name").style.visibility = "hidden";
}
function button_edit_delete_tier() {
    let tier = document.getElementById("tiers_tier_edit_form").value
    obj.tiers.splice(tier,1);
    build1();
}

function tiers_submit() {
    let tier = document.getElementById("tiers_tier_form").value; //0, 1, 2
    let name = document.getElementById("tiers_name_form").value;
    let link = document.getElementById("tiers_link_form").value;
    let desc = document.getElementById("tiers_desc_form").value;
    let image = document.getElementById("tiers_image_form").value;
    
    let item = {
        "name": "",
        "link": "",
        "desc": "",
        "image": ""
    }
    item.name = name;
    item.link = link;
    item.desc = desc;
    item.image = image;
    obj.tiers[tier].tierdata.push(item)
    
    console.log(obj);
    build1();
    document.getElementById("tiers_form").reset();
}

function move_item_left(tier, index) {
    if(tier == 0 && index == 0) {
        return;
    }
    
    if(index == 0) {
        c = obj.tiers[tier].tierdata.shift();
        obj.tiers[tier - 1].tierdata.push(c);
        console.log(obj)
    } else {
        a = obj.tiers[tier].tierdata[index];
        b = obj.tiers[tier].tierdata[index - 1];
        obj.tiers[tier].tierdata[index - 1] = a;
        obj.tiers[tier].tierdata[index] = b;
        
    }
    build1();
}
function move_item_right(tier, index) {
    console.log(obj);
    if((tier == obj.tiers.length - 1) && (index == obj.tiers[tier].tierdata.length - 1)) {
        return;
    }
    
    if(index == obj.tiers[tier].tierdata.length - 1) {
        c = obj.tiers[tier].tierdata.pop();
        obj.tiers[tier + 1].tierdata.unshift(c);
    } else {
        a = obj.tiers[tier].tierdata[index];
        b = obj.tiers[tier].tierdata[index + 1];
        obj.tiers[tier].tierdata[index + 1] = a;
        obj.tiers[tier].tierdata[index] = b;
    }
    
    console.log(obj);
    build1();
}
function delete_item(tier, index) {
    obj.tiers[tier].tierdata.splice(index,1);
    build1();
}

function select_code() {
    document.getElementById("generated_code").select()
}
function load_code() {
    a = document.getElementById("generated_code").value
    b = a.slice(0,52)
    console.log("Loading: " + b);
    if (b.toUpperCase() == "https://Music-Tier-List-Maker.colind8.repl.co/?file=".toUpperCase()) {
        //replace("https://Music-Tier-List-Maker.colind8.repl.co/?file=", "");
        c = a.substring(52);
        console.log(c);
        d = window.atob(c)
        obj = JSON.parse(d);
        build1();
    } else {
        console.log("Incorrect code!")
    }
}