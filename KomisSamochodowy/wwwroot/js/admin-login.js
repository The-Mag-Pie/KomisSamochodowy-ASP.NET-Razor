function formValidate() {
    let isEmpty = false;
    let message = "";
    let elem = null;

    if (Username.value == "") {
        isEmpty = true;
        message = "BŁĄD! Nie wpisano loginu!";
        elem = Username;
    }
    else if (Password.value == "") {
        isEmpty = true;
        message = "BŁĄD! Nie wpisano hasła!";
        elem = Password;
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