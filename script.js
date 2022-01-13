//console.log(window.location.search);
var urlParams = new URLSearchParams(window.location.search);

if (urlParams.has('file')) {
    document.getElementById("content").innerHTML = `<h1 id="title"></h1><h4 id="author"></h4><p id="description"></p><table id="tierlist"></table>`;
    file = urlParams.get('file')
    console.log("LOADING FILE: " + file);
    var obj = JSON.parse(window.atob(file));
    build();
    
}

//console.log(urlParams.get('file'));



//console.log(window.atob(file))


//document.getElementById("code").innerHTML = window.btoa(this.responseText);

function build() {
console.log("Building Tier List...");
console.log("Adding Data...");
//META DATA
document.getElementById("title").innerHTML = obj.data.title;
document.getElementById("doctitle").innerHTML = obj.data.title + " | Music Tier List Maker";
document.getElementById("author").innerHTML = "By " + obj.data.author;
document.getElementById("description").innerHTML = obj.data.desc;

//WRITE TABLE
console.log("Creating Table...");
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
    table += `<span class="tooltip">`
    //ADD METADATA
    table += `<h4>` + obj.tiers.S[i].name + `</h4>`
    if (obj.data.showrankings == "true") {
        table += `#` + rank   
    }
    table += `<p class="songdesc">` +obj.tiers.S[i].desc + `</p>`
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
            table += `<span class="tooltip">`
            //ADD METADATA
            table += `<h4>` + obj.tiers.A[i].name + `</h4>`
            if (obj.data.showrankings == "true") {
                table += `#` + rank   
            }
            table += `<p class="songdesc">` +obj.tiers.A[i].desc + `</p>`
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
            table += `<span class="tooltip">`
            //ADD METADATA
            table += `<h4>` + obj.tiers.B[i].name + `</h4>`
            if (obj.data.showrankings == "true") {
                table += `#` + rank   
            }
            table += `<p class="songdesc">` +obj.tiers.B[i].desc + `</p>`
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
    table += `<span class="tooltip">`
    //ADD METADATA
    table += `<h4>` + obj.tiers.C[i].name + `</h4>`
    if (obj.data.showrankings == "true") {
        table += `#` + rank   
    }
    table += `<p class="songdesc">` +obj.tiers.C[i].desc + `</p>`
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
    table += `<span class="tooltip">`
    //ADD METADATA
    table += `<h4>` + obj.tiers.D[i].name + `</h4>`
    if (obj.data.showrankings == "true") {
        table += `#` + rank   
    }
    table += `<p class="songdesc">` +obj.tiers.D[i].desc + `</p>`
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
    table += `<span class="tooltip">`
    //ADD METADATA
    table += `<h4>` + obj.tiers.F[i].name + `</h4>`
    if (obj.data.showrankings == "true") {
        table += `#` + rank
    }
    table += `<p class="songdesc">` +obj.tiers.F[i].desc + `</p>`
    //CLOSE CONTAINER
    table += `</span></div></td>`
}
table += "</tr></table>"

//PASTE TABLE
document.getElementById("tierlist").innerHTML = table;
console.log("Tier List Built");
}

/*
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        document.getElementById("code").innerHTML = window.btoa(this.responseText);
        

        //META DATA
        document.getElementById("title").innerHTML = obj.data.title;
        document.getElementById("doctitle").innerHTML = obj.data.title + " | Music Tier List Maker";
        document.getElementById("author").innerHTML = "By " + obj.data.author;
        document.getElementById("description").innerHTML = obj.data.desc;

        //WRITE TABLE
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
            table += `<span class="tooltip">`
            //ADD METADATA
            table += `<h4>` + obj.tiers.S[i].name + `</h4>`
            if (obj.data.showrankings == "true") {
                table += `#` + rank   
            }
            table += `<p class="songdesc">` +obj.tiers.S[i].desc + `</p>`
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
            table += `<span class="tooltip">`
            //ADD METADATA
            table += `<h4>` + obj.tiers.A[i].name + `</h4>`
            if (obj.data.showrankings == "true") {
                table += `#` + rank   
            }
            table += `<p class="songdesc">` +obj.tiers.A[i].desc + `</p>`
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
            table += `<span class="tooltip">`
            //ADD METADATA
            table += `<h4>` + obj.tiers.B[i].name + `</h4>`
            if (obj.data.showrankings == "true") {
                table += `#` + rank   
            }
            table += `<p class="songdesc">` +obj.tiers.B[i].desc + `</p>`
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
            table += `<span class="tooltip">`
            //ADD METADATA
            table += `<h4>` + obj.tiers.C[i].name + `</h4>`
            if (obj.data.showrankings == "true") {
                table += `#` + rank   
            }
            table += `<p class="songdesc">` +obj.tiers.C[i].desc + `</p>`
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
            table += `<span class="tooltip">`
            //ADD METADATA
            table += `<h4>` + obj.tiers.D[i].name + `</h4>`
            if (obj.data.showrankings == "true") {
                table += `#` + rank   
            }
            table += `<p class="songdesc">` +obj.tiers.D[i].desc + `</p>`
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
            table += `<span class="tooltip">`
            //ADD METADATA
            table += `<h4>` + obj.tiers.F[i].name + `</h4>`
            if (obj.data.showrankings == "true") {
                table += `#` + rank   
            }
            table += `<p class="songdesc">` +obj.tiers.F[i].desc + `</p>`
            //CLOSE CONTAINER
            table += `</span></div></td>`
        }
        table += "</tr></table>"

        //PASTE TABLE
        document.getElementById("tierlist").innerHTML = table;
    }
}
xmlhttp.open("GET", file, true);
//xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
xmlhttp.send();


/*
$(document).ready(function(){
    $.getJSON(file, function(result){
      console.log(result);
      
    });
});
*/