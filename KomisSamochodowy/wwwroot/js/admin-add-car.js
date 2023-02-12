async function addCar() {
    if (formValidate() == false) {
        return false;
    }

    document.getElementsByTagName("body")[0].style.cursor = "wait";
    loadingInfo.style.display = "block";

    let image = await new Promise((resolve) => {
        let reader = new FileReader();
        reader.onloadend = function() {
            resolve(this.result);
        };
        reader.readAsDataURL(inputImage.files[0]);
    });

    var newCarInfo = createCarInfoObject(image);

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

                if (response == false) {
                    alert("Błąd podczas dodawania samochodu!");
                }
                else {
                    alert("Samochód został pomyślnie dodany.");
                    location.href = "./Car-details?id=" + response;
                }

                document.getElementsByTagName("body")[0].style.cursor = "auto";
                loadingInfo.style.display = "none";
            }
            else this.onerror();
        }
    };

    ajax.open("POST", "./api/AddCar", true);
    ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    ajax.send(JSON.stringify(newCarInfo));

    return false;
}
