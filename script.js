const levelColor = document.getElementById('level-color');
const levelText = document.getElementById('battery-text');

let chargeLevel;
navigator.getBattery().then(function (battery) {
    chargeLevel = Math.round(battery.level * 100);
})

//updates the real time battery level when battery level changes.
navigator.getBattery().then(function (battery) {

    battery.addEventListener('levelchange', function () {
        chargeLevel = Math.round(battery.level * 100);
        updateCharge();
    });
    updateCharge();
});





//updates value to the background color and battery text
function updateCharge() {
    if (chargeLevel > 0) {
        levelColor.style.background = `linear-gradient(to right, #4CAF50 ${chargeLevel}%, #fff ${chargeLevel}%`;
        levelText.textContent = `${chargeLevel}%`;
    }
    //battery level less than 10%
    if (chargeLevel <= 10) {
        levelColor.style.background = `linear-gradient(to right, #ff0000 ${chargeLevel}%, #fff ${chargeLevel}%`;
        levelText.textContent = `${chargeLevel}%`;

        const popOverley = document.querySelector('.pop-overley');
        popOverley.style.display = 'block';

        const popupBox = document.querySelector('.popup-box');
        popupBox.style.display = 'flex';
        popupBox.textContent = 'your battery is low';
        popupBox.style.color = 'white';

        popupBox.style.justifyContent = 'space-between';
        const cancelButton = document.createElement('button');
        cancelButton.style.width = '100px';
        cancelButton.style.height = '50px';
        cancelButton.style.margin = '10px';
        cancelButton.style.fontSize = '20px';
        cancelButton.style.cursor = 'pointer';

        cancelButton.textContent = 'Cancel';
        popupBox.appendChild(cancelButton);

        cancelButton.addEventListener('click', function () {
            popOverley.style.display = 'none';
            popupBox.style.display = 'none';

        });
    }
    if (chargeLevel === 100) {
        levelColor.style.background = `linear-gradient(to right, #4CAF50 ${chargeLevel}%, #fff ${chargeLevel}%`;
        levelText.textContent = `${chargeLevel}%`;


        const popOverley = document.querySelector('.pop-overley');
        popOverley.style.display = 'block';

        const popupBox = document.querySelector('.popup-box');
        popupBox.style.display = 'flex';
        popupBox.textContent = 'Battery is fully charged';
        popupBox.style.color = 'white';

        popupBox.style.justifyContent = 'space-between';
        const cancelButton = document.createElement('button');
        cancelButton.style.width = '100px';
        cancelButton.style.height = '50px';
        cancelButton.style.margin = '10px';
        cancelButton.style.fontSize = '20px';
        cancelButton.style.cursor = 'pointer';

        cancelButton.textContent = 'Cancel';
        popupBox.appendChild(cancelButton);

        cancelButton.addEventListener('click', function () {
            popOverley.style.display = 'none';
            popupBox.style.display = 'none';

        });
    }
}