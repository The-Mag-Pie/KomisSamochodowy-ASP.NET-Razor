document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByTagName("body")[0].style.cursor = "wait";

    var cars = null;
    var ajax = AJAXinit();

    ajax.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                try {
                    cars = JSON.parse(this.responseText);
                }
                catch {
                    this.onerror();
                    return;
                }

                if (cars.length == 0)
                    noDataInfo.style.display = "block";

                cars.forEach(element => {
                    var row = carsTable.insertRow(1);
            
                    var imageCell = row.insertCell(0);
                    var brandCell = row.insertCell(1);
                    var modelCell = row.insertCell(2);
                    var fuelTypeCell = row.insertCell(3);
                    var mileageCell = row.insertCell(4);
                    var priceCell = row.insertCell(5);
                    var buttonCell = row.insertCell(6);

                    buttonCell.style.width = "120px";

                    imageCell.innerHTML = "<img src=\"" + element.Image + "\" alt=\"Zdjęcie-miniaturka samochodu\">";
                    brandCell.innerHTML = element.Brand;
                    modelCell.innerHTML = element.Model;
                    fuelTypeCell.innerHTML = element.FuelType;
                    mileageCell.innerHTML = element.Mileage + " km";
                    priceCell.innerHTML = element.Price.toFixed(2).replace(".", ",") + " zł";
                    buttonCell.innerHTML = "<a class=\"a-button\" href=\"./Car-details?id=" + element.ID + "\"><p>Zobacz szczegóły</p></a>";
                });

                document.getElementsByTagName("body")[0].style.cursor = "auto";
                loadingInfo.style.display = "none";
            }
            else this.onerror();
        }
    };

    ajax.open("GET", "./api/Cars/" + (new URL(location.href)).searchParams.get("type"), true);
    ajax.send();
});