let username = prompt("Moi nhap ten nguoi dung:");

if (username == "Admin") {
    let pass = prompt("Moi ban nhap mat khau");
    if (pass == "TheMaster") {
        document.getElementById("chuoi").innerHTML = "<h1>Welcome</h1>";

    } else if (pass == null) {
        document.getElementById("chuoi").innerHTML= "<h1>Canceled</h1>";
    } else {
        document.getElementById("chuoi").innerHTML = "<h1>Wrong password</h1>";
    }
} else if (username == null) {
    document.getElementById("chuoi").innerHTML = "<h1>Canceled</h1>";
} else {
    document.getElementById("chuoi").innerHTML = "<h1>I dont know you</h1>";
}

