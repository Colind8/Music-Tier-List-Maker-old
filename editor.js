document.getElementById("data_edit_title").style.visibility = "hidden";
document.getElementById("data_edit_author").style.visibility = "hidden";
document.getElementById("data_edit_desc").style.visibility = "hidden";

var obj = {
    "data": {
        "title": "Title",
        "desc": "Description",
        "author": "Author",
        "showrankings": "false"
    },
    "tiers": {
        "S": [
            {
                "name": "Sample",
                "link": "https://www.youtube.com/watch?v=HIhYgXwpy4c",
                "desc": "You can remove this if you want",
                "image": "https://st3.depositphotos.com/9614272/14788/v/450/depositphotos_147889189-stock-illustration-tv-test-image.jpg"
            }
        ],
        "A": [
        ],
        "B": [
        ],
        "C": [
        ],
        "D": [
        ],
        "F": [
        ]
    }
};

build();
console.log(obj);


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
    build();
}

function data_title_submit() {
    let x = document.getElementById("data_title_form").value;
    obj.data.title = x;
    build();
    document.getElementById("data_edit_buttons").style.visibility = "visible";
    document.getElementById("data_edit_title").style.visibility = "hidden";
}
function data_author_submit() {
    let x = document.getElementById("data_author_form").value;
    obj.data.author = x;
    build();
    document.getElementById("data_edit_buttons").style.visibility = "visible";
    document.getElementById("data_edit_author").style.visibility = "hidden";
}
function data_desc_submit() {
    let x = document.getElementById("data_desc_form").value;
    obj.data.desc = x;
    build();
    document.getElementById("data_edit_buttons").style.visibility = "visible";
    document.getElementById("data_edit_desc").style.visibility = "hidden";
}

function tiers_submit() {
    let tier = document.getElementById("tiers_tier_form").value;
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

    switch (tier) {
        case "S":
            obj.tiers.S.push(item);
            break;
        case "A":
            obj.tiers.A.push(item);
            break;
        case "B":
            obj.tiers.B.push(item);
            break;
        case "C":
            obj.tiers.C.push(item);
            break;
        case "D":
            obj.tiers.D.push(item);
            break;
        case "F":
            obj.tiers.F.push(item);
            break;
        
    }
    
    console.log(obj);
    build();
    document.getElementById("tiers_form").reset();
}

function move_item_left(tier, index) {
    if(tier == "S" && index == 0) {
        return;
    }
    
    if(index == 0) {
        switch (tier) {
            case "A":
                c = obj.tiers.A.shift();
                obj.tiers.S.push(c);
                break;
            case "B":
                c = obj.tiers.B.shift();
                obj.tiers.A.push(c);
                break;
            case "C":
                c = obj.tiers.C.shift();
                obj.tiers.B.push(c);
                break;
            case "D":
                c = obj.tiers.D.shift();
                obj.tiers.C.push(c);
                break;
            case "F":
                c = obj.tiers.F.shift();
                obj.tiers.D.push(c);
                break;
            
        }
    } else {
        switch (tier) {
            case "S":
                a = obj.tiers.S[index];
                b = obj.tiers.S[index - 1];
                obj.tiers.S[index - 1] = a;
                obj.tiers.S[index] = b;
                break;
            case "A":
                a = obj.tiers.A[index];
                b = obj.tiers.A[index - 1];
                obj.tiers.A[index - 1] = a;
                obj.tiers.A[index] = b;
                break;
            case "B":
                a = obj.tiers.B[index];
                b = obj.tiers.B[index - 1];
                obj.tiers.B[index - 1] = a;
                obj.tiers.B[index] = b;
                break;
            case "C":
                a = obj.tiers.C[index];
                b = obj.tiers.C[index - 1];
                obj.tiers.C[index - 1] = a;
                obj.tiers.C[index] = b;
                break;
            case "D":
                a = obj.tiers.D[index];
                b = obj.tiers.D[index - 1];
                obj.tiers.D[index - 1] = a;
                obj.tiers.D[index] = b;
                break;
            case "F":
                a = obj.tiers.F[index];
                b = obj.tiers.F[index - 1];
                obj.tiers.F[index - 1] = a;
                obj.tiers.F[index] = b;
                break;
            
        }
    }
    build();
}
function move_item_right(tier, index) {
    console.log(obj);
    if(tier == "F" && index == obj.tiers.F.length - 1) {
        return;
    }
    
    switch (tier) {
        case "S":
            if(index == obj.tiers.S.length - 1) {
                c = obj.tiers.S.pop();
                obj.tiers.A.unshift(c);
                break;
            } else {
                a = obj.tiers.S[index];
                b = obj.tiers.S[index + 1];
                obj.tiers.S[index + 1] = a;
                obj.tiers.S[index] = b;
                break;
            }
        case "A":
            if(index == obj.tiers.A.length - 1) {
                c = obj.tiers.A.pop();
                obj.tiers.B.unshift(c);
                break;
            } else {
                a = obj.tiers.A[index];
                b = obj.tiers.A[index + 1];
                obj.tiers.A[index + 1] = a;
                obj.tiers.A[index] = b;
                break;
            }
        case "B":
            if(index == obj.tiers.B.length - 1) {
                c = obj.tiers.B.pop();
                obj.tiers.C.unshift(c);
                break;
            } else {
                a = obj.tiers.B[index];
                b = obj.tiers.B[index + 1];
                obj.tiers.B[index + 1] = a;
                obj.tiers.B[index] = b;
                break;
            }
        case "C":
            if(index == obj.tiers.C.length - 1) {
                c = obj.tiers.C.pop();
                obj.tiers.D.unshift(c);
                break;
            } else {
                a = obj.tiers.C[index];
                b = obj.tiers.C[index + 1];
                obj.tiers.C[index + 1] = a;
                obj.tiers.C[index] = b;
                break;
            }
        case "D":
            if(index == obj.tiers.D.length - 1) {
                c = obj.tiers.D.pop();
                obj.tiers.F.unshift(c);
                break;
            } else {
                a = obj.tiers.D[index];
                b = obj.tiers.D[index + 1];
                obj.tiers.D[index + 1] = a;
                obj.tiers.D[index] = b;
                break;
            }
        case "F":
            a = obj.tiers.F[index];
            b = obj.tiers.F[index + 1];
            obj.tiers.F[index + 1] = a;
            obj.tiers.F[index] = b;
            break;
    }
    
    console.log(obj);
    build();
}
function delete_item(tier, index) {
    switch (tier) {
        case "S":
            obj.tiers.S.splice(index,1);
            break;
        case "A":
            obj.tiers.A.splice(index,1);
            break;
        case "B":
            obj.tiers.B.splice(index,1);
            break;
        case "C":
            obj.tiers.C.splice(index,1);
            break;
        case "D":
            obj.tiers.D.splice(index,1);
            break;
        case "F":
            obj.tiers.F.splice(index,1);
            break;
        
    }

    build();
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
        build();
    } else {
        console.log("Incorrect code!")
    }
}