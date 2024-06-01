const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

// Store the chosen photo in localStorage
file.addEventListener('change', function() {
  const choosedFile = this.files[0];

  if (choosedFile) {
    const fileName = choosedFile.name;
    const fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();

    if (fileExtension === 'png' || fileExtension === 'jpg') {
      const reader = new FileReader();

      reader.addEventListener('load', function() {
        img.setAttribute('src', reader.result);
        // Store the photo in localStorage
        localStorage.setItem('userPhoto', reader.result);
      });

      reader.readAsDataURL(choosedFile);
    } else {
      alert('Please choose a PNG or JPG image file.');
    }
  }
});

// Retrieve the photo from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
  var fullNameElement = document.querySelector(".detail h3:nth-child(1)");
  var dobElement = document.querySelector(".detail h3:nth-child(2)");
  var phoneNumberElement = document.querySelector(".detail h3:nth-child(3)");
  var storedUser = localStorage.getItem("user");

  if (storedUser) {
    var user = JSON.parse(storedUser);
    fullNameElement.textContent = "Full Name: " + user.name;
    dobElement.textContent = "Date of Birth: " + user.birth;
    phoneNumberElement.textContent = "Phone Number: " + user.phoneNumber;
  } else {
    fullNameElement.textContent = "Full Name: N/A";
    dobElement.textContent = "Date of Birth: N/A";
    phoneNumberElement.textContent = "Phone Number: N/A";
  }

  // Retrieve the photo from localStorage and set it as the source for the image
  var storedPhoto = localStorage.getItem("userPhoto");

  if (storedPhoto) {
    img.setAttribute('src', storedPhoto);
  }
});

// Hide or show the upload button on hover
imgDiv.addEventListener('mouseenter', function() {
  uploadBtn.style.display = "block";
});

imgDiv.addEventListener('mouseleave', function() {
  uploadBtn.style.display = "none";
});
