function formValidate() {
    let isEmpty = false;
    let message = "";
    let elem = null;

    if (nameText.value == "") {
        isEmpty = true;
        message = "BŁĄD! Nie podano imienia!";
        elem = nameText;
    }
    else if (emailText.value == "" || (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailText.value) == false)) {
        isEmpty = true;
        message = "BŁĄD! Nie podano lub błędny email!";
        elem = emailText;
    }
    else if (topicText.value == "") {
        isEmpty = true;
        message = "BŁĄD! Nie podano tematu!";
        elem = topicText;
    }
    else if (contentTextarea.value == "") {
        isEmpty = true;
        message = "BŁĄD! Nie podano treści!";
        elem = contentTextarea;
    }

    if (isEmpty && message != "" && elem != null) {
        alert(message);
        elem.focus();
        return false;
    }
    else {
        return true;
    }
}

function sendMessage() {
    if (formValidate() == false) {
        return false;
    }

    document.getElementsByTagName("body")[0].style.cursor = "wait";
    loadingInfo.style.display = "block";

    var message = {
        Time : (new Date()).toLocaleString("pl").replace(", ", "<br>"),
        Name : nameText.value,
        Email : emailText.value,
        Topic : topicText.value,
        Content : contentTextarea.value
    };

    var response = false;
    var ajax = AJAXinit();

    ajax.onreadystatechange = function() {
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
                    alert("Wiadomość została wysłana.");
                    location.href = "./Contact";
                }
                else {
                    alert("Błąd podczas wysyłania wiadomości!");
                }

                document.getElementsByTagName("body")[0].style.cursor = "auto";
                loadingInfo.style.display = "none";
            }
            else this.onerror();
        }
    };

    ajax.open("POST", "./api/SendMessage", true);
    ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    ajax.send(JSON.stringify(message));

    return false;
}