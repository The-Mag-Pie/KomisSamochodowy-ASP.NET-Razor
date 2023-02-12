var defaultImageUrl = null;
var carInfo = null;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByTagName("body")[0].style.cursor = "wait";

    var ajax = AJAXinit();

    ajax.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                try {
                    carInfo = JSON.parse(this.responseText);
                }
                catch {
                    this.onerror();
                    return;
                }

                titleBrandModel.innerHTML = carInfo.Brand + " " + carInfo.Model;
                imagePreview.src = carInfo.Image;
                defaultImageUrl = imagePreview.src;
                categorySelect.value = carInfo.Category;
                brandText.value = carInfo.Brand;
                modelText.value = carInfo.Model;
                yearProductionNumber.value = carInfo.YearProduction;
                mileageNumber.value = carInfo.Mileage;
                fuelTypeSelect.value = carInfo.FuelType;
                driveTypeSelect.value = carInfo.DriveType;
                engineDisplacementNumber.value = carInfo.EngineDisplacement;
                enginePowerNumber.value = carInfo.EnginePower;
                transmissionTypeSelect.value = carInfo.Transmission;
                fuelConsumptionNumber.value = carInfo.FuelConsumption;
                bodyText.value = carInfo.Body;
                doorsNumber.value = carInfo.Doors;
                priceNumber.value = carInfo.Price.toFixed(2);

                document.getElementsByTagName("body")[0].style.cursor = "auto";
                loadingInfo.style.display = "none";
            }
            else this.onerror();
        }
    };

    ajax.open("GET", "./api/CarDetails/" + (new URL(location.href)).searchParams.get("id"), true);
    ajax.send();
});

async function modifyCar() {
    if (formValidate() == false) {
        return false;
    }

    document.getElementsByTagName("body")[0].style.cursor = "wait";
    loadingInfo.style.display = "block";

    let image = imagePreview.src;
    if (inputImage.files.length > 0) {
        image = await new Promise((resolve) => {
            let reader = new FileReader();
            reader.onloadend = function() {
                resolve(this.result);
            };
            reader.readAsDataURL(inputImage.files[0]);
        });
    }

    var newCarInfo = createCarInfoObject(image);
    newCarInfo.ID = carInfo.ID;

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
                    alert("Dane samochodu zostały pomyślnie zaktualizowane.");
                    location.href = "./Car-details?id=" + carInfo.ID;
                }
                else {
                    alert("Błąd podczas aktualizowania danych samochodu!");
                }

                document.getElementsByTagName("body")[0].style.cursor = "auto";
                loadingInfo.style.display = "none";
            }
            else this.onerror();
        }
    };

    ajax.open("POST", "./api/ModifyCar", true);
    ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    ajax.send(JSON.stringify(newCarInfo));

    return false;
}