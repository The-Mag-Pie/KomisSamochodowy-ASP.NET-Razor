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
                carImage.src = carInfo.Image;
                brand.innerHTML = carInfo.Brand;
                model.innerHTML = carInfo.Model;
                yearProduction.innerHTML = carInfo.YearProduction;
                mileage.innerHTML = carInfo.Mileage + " km";
                fuelType.innerHTML = carInfo.FuelType;
                driveType.innerHTML = carInfo.DriveType;
                engineDisplacement.innerHTML = carInfo.EngineDisplacement + " cm<sup>3</sup>";
                enginePower.innerHTML = carInfo.EnginePower + " KM";
                transmission.innerHTML = carInfo.Transmission;
                fuelConsumption.innerHTML = (carInfo.FuelConsumption + "l/100km").replace(".", ",");
                body.innerHTML = carInfo.Body;
                doors.innerHTML = carInfo.Doors;
                price.innerHTML = carInfo.Price.toFixed(2).replace(".", ",") + " zł";

                contactButton.href = "./Contact?id=" + carInfo.ID + "&brand=" + carInfo.Brand + "&model=" + carInfo.Model;

                document.getElementsByTagName("body")[0].style.cursor = "auto";
                loadingInfo.style.display = "none";
            }
            else this.onerror();
        }
    };

    ajax.open("GET", "./api/CarDetails/" + (new URL(location.href)).searchParams.get("id"), true);
    ajax.send();
});

function deleteCarClick() {
    document.getElementsByTagName("body")[0].style.cursor = "wait";

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
                    alert("Samochód został pomyślnie usunięty.");
                    location.href = "./Cars?type=" + carInfo.Category;
                }
                else {
                    alert("Błąd podczas usuwania samochodu!");
                }

                document.getElementsByTagName("body")[0].style.cursor = "auto";
            }
            else this.onerror();
        }
    };

    ajax.open("GET", "./api/DeleteCar/" + (new URL(location.href)).searchParams.get("id"), false);
    ajax.send();
};