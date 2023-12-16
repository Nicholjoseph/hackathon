function redirectTo(option) {
    const landingPage = document.querySelector('.landing-page');
    const registrationPage = document.getElementById('registration');
    const companyInfoPage = document.getElementById('companyInfo');

    landingPage.style.display = 'none';

    if (option === 'login') {
        registrationPage.style.display = 'block';
    } else if (option === 'register') {
        companyInfoPage.style.display = 'block';
    }
}


function showAdvertisementUpload() {
    const registrationSection = document.getElementById('registration');
    const advertisementUploadSection = document.getElementById('advertisementUpload');

    // Add registration logic here (you may want to send data to the server)

    // Move to the next step
    registrationSection.style.display = 'none';
    advertisementUploadSection.style.display = 'block';
}

function showPaymentOptions() {
    const adType = document.getElementById('adType').value;
    const adFile = document.getElementById('adFile').files[0]; // Get the selected file

    // Additional validation if needed
    if (!adFile) {
        alert('Please select an advertisement file.');
        return;
    }

    // For video duration validation (if video type is selected)
    const videoDurationContainer = document.getElementById('videoDurationContainer');
    const videoDuration = adType === 'video' ? document.getElementById('videoDuration').value : null;

    if (adType === 'video' && (!videoDuration || videoDuration <= 0)) {
        alert('Please enter a valid video duration.');
        return;
    }

    // Add advertisement upload logic here (you may want to send data to the server)

    // Move to the next step
    document.getElementById('advertisementUpload').style.display = 'none';
    document.getElementById('paymentOptions').style.display = 'block';
}

document.getElementById('paymentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const selectedPaymentMethod = document.getElementById('paymentMethod').value;

    // Add payment processing logic here based on the selected payment method
    switch (selectedPaymentMethod) {
        case 'creditCard':
            alert('Processing Credit Card Payment...');
            break;
        case 'paypal':
            alert('Processing PayPal Payment...');
            break;
        case 'netbanking':
            alert('Processing Netbanking Payment...');
            break;
        case 'upi':
            alert('Processing UPI Payment...');
            break;
        default:
            alert('Invalid Payment Method');
    }
});
function registerCompany() {
    const companyName = document.getElementById('companyName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Add registration logic here (you may want to send data to the server)
    alert('Company registration successful!');

    // Proceed to the Advertisement Upload section
    document.getElementById('companyInfo').style.display = 'none';
    document.getElementById('advertisementUpload').style.display = 'block';
}

// Toggle video duration input based on selected ad type
document.getElementById('adType').addEventListener('change', function () {
    const videoDurationContainer = document.getElementById('videoDurationContainer');
    if (this.value === 'video') {
        videoDurationContainer.style.display = 'block';
    } else {
        videoDurationContainer.style.display = 'none';
    }
});
