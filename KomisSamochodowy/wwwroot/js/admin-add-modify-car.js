function formValidate() {
    let isEmpty = false;
    let message = "";
    let elem = null;

    if (inputImage.files.length == 0 && imagePreview.src == "") {
        isEmpty = true;
        message = "BŁĄD! Nie wybrano zdjęcia pojazdu!";
        elem = inputImage;
    }
    else if (categorySelect.value == "") {
        isEmpty = true;
        message = "BŁĄD! Nie wybrano kategorii pojazdu!";
        elem = categorySelect;
    }
    else if (brandText.value == "") {
        isEmpty = true;
        message = "BŁĄD! Nie podano marki pojazdu!";
        elem = brandText;
    }
    else if (modelText.value == "") {
        isEmpty = true;
        message = "BŁĄD! Nie podano modelu pojazdu!";
        elem = modelText;
    }
    else if (yearProductionNumber.value == "" || isNaN(yearProductionNumber.value.replace(".", ",")) ||
        Number(yearProductionNumber.value) < 1850 || Number(yearProductionNumber.value) > new Date().getFullYear()
    ) {
        isEmpty = true;
        message = "BŁĄD! Nie podano lub błędny rocznik pojazdu!";
        elem = yearProductionNumber;
    }
    else if (mileageNumber.value == "" || isNaN(mileageNumber.value) ||
        Number(mileageNumber.value) < 1
    ) {
        isEmpty = true;
        message = "BŁĄD! Nie podano lub błędny przebieg pojazdu!";
        elem = mileageNumber;
    }
    else if (fuelTypeSelect.value == "") {
        isEmpty = true;
        message = "BŁĄD! Nie wybrano rodzaju paliwa!";
        elem = fuelTypeSelect;
    }
    else if (driveTypeSelect.value == "") {
        isEmpty = true;
        message = "BŁĄD! Nie wybrano rodzaju napędu!";
        elem = driveTypeSelect;
    }
    else if (engineDisplacementNumber.value == "" || isNaN(engineDisplacementNumber.value.replace(",", ".")) ||
        Number(engineDisplacementNumber.value.replace(",", ".")) < 1
    ) {
        isEmpty = true;
        message = "BŁĄD! Nie podano lub błędna pojemność skokowa silnika!";
        elem = engineDisplacementNumber;
    }
    else if (enginePowerNumber.value == "" || isNaN(enginePowerNumber.value.replace(".", ",")) ||
        Number(enginePowerNumber.value) < 1
    ) {
        isEmpty = true;
        message = "BŁĄD! Nie podano lub błędna moc silnika!";
        elem = enginePowerNumber;
    }
    else if (transmissionTypeSelect.value == "") {
        isEmpty = true;
        message = "BŁĄD! Nie wybrano skrzyni biegów!";
        elem = transmissionTypeSelect;
    }
    else if (fuelConsumptionNumber.value == "" || isNaN(fuelConsumptionNumber.value.replace(",", ".")) ||
        Number(fuelConsumptionNumber.value.replace(",", ".")) < 0.1
    ) {
        isEmpty = true;
        message = "BŁĄD! Nie podano lub błędne spalanie!";
        elem = fuelConsumptionNumber;
    }
    else if (bodyText.value == "") {
        isEmpty = true;
        message = "BŁĄD! Nie podano rodzaju nadwozia!";
        elem = bodyText;
    }
    else if (doorsNumber.value == "" || isNaN(doorsNumber.value.replace(".", ",")) ||
        Number(doorsNumber.value) < 1
    ) {
        isEmpty = true;
        message = "BŁĄD! Nie podano lub błędna ilość drzwi!";
        elem = doorsNumber;
    }
    else if (priceNumber.value == "" || isNaN(priceNumber.value.replace(",", ".")) ||
        Number(priceNumber.value.replace(",", ".")) < 0.1
    ) {
        isEmpty = true;
        message = "BŁĄD! Nie podano lub błędna cena!";
        elem = priceNumber;
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

function createCarInfoObject(image) {
    return {
        Image : image,
        Category : categorySelect.value,
        Brand : brandText.value,
        Model : modelText.value,
        YearProduction : Number(yearProductionNumber.value),
        Mileage : Number(mileageNumber.value),
        FuelType : fuelTypeSelect.value,
        DriveType : driveTypeSelect.value,
        EngineDisplacement : Number(engineDisplacementNumber.value),
        EnginePower : Number(enginePowerNumber.value),
        Transmission : transmissionTypeSelect.value,
        FuelConsumption : Number(fuelConsumptionNumber.value),
        Body : bodyText.value,
        Doors : Number(doorsNumber.value),
        Price : Number(priceNumber.value)
    };
}