document.addEventListener('DOMContentLoaded', function () {
    const popupBanner = document.getElementById('popupBanner');
    const closePopupButton = document.getElementById('closePopup');

    // Check if it's Monday, Tuesday, or Wednesday
    const today = new Date().getDay();
    const showBannerDays = [1, 2, 3]; // Monday, Tuesday, Wednesday

    if (showBannerDays.includes(today)) {
        popupBanner.style.display = 'flex';
    }

    // Event listener to close the pop-up
    closePopupButton.addEventListener('click', function () {
        popupBanner.style.display = 'none';
    });
});
