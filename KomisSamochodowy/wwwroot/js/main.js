function AJAXinit() {
    let ajax = new XMLHttpRequest();
    ajax.onerror = (e) => {
        alert("Błąd podczas przetwarzania danych");
        location.href = "./Index";
    };
    return ajax;
}

function logout() {
    var ajax = AJAXinit();

    ajax.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                try {
                    response = JSON.parse(this.responseText);
                }
                catch {
                    this.onerror();
                    return;
                }

                if (response) {
                    alert("Zostałeś pomyślnie wylogowany.");
                    location.href = "./Index";
                }
                else {
                    alert("Błąd podczas wylogowywania!");
                }
            }
            else this.onerror();
        }
    };

    ajax.open("GET", "./api/Logout", false);
    ajax.send();
}