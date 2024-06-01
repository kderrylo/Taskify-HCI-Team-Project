document.addEventListener('DOMContentLoaded', function() {
  // Ambil elemen-elemen yang diperlukan
  var openButton = document.getElementById('openPopup');
  var closeButton = document.getElementById('closePopup');
  var popup = document.getElementById('myPopup');

  // Fungsi untuk membuka popup
  function openPopup() {
    popup.style.display = 'flex';
  }

  // Fungsi untuk menutup popup
  function closePopup() {
    popup.style.display = 'none';
  }

  // Tambahkan event listener pada tombol pembuka dan penutup
  openButton.addEventListener('click', openPopup);
  closeButton.addEventListener('click', closePopup);
});


document.addEventListener('DOMContentLoaded', function() {
  var calendarContainer = document.getElementById('calendar');
  
  // Mendapatkan tanggal terkini
  var today = new Date();
  
  // Menghitung tanggal awal dan akhir minggu ini
  var startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
  var endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay()));

  // Mengisi kalender dengan hari-hari dalam minggu ini
  var calendarHTML = '<div class="container">';
  
  // Tambahkan baris untuk nama hari
  calendarHTML += '<div class="row">';
  var dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  for (var i = 0; i < 7; i++) {
    calendarHTML += '<div class="day-name">' + dayNames[i] + '</div>';
  }
  calendarHTML += '</div>';
  
  // Tambahkan baris untuk tanggal
  calendarHTML += '<div class="row">';
  for (var i = 0; i < 7; i++) {
    var currentDate = new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate() + i);
    var dayClass = (currentDate.toDateString() === today.toDateString()) ? 'day today' : 'day';
    calendarHTML += '<div class="' + dayClass + '">' + currentDate.getDate() + '</div>';
  }
  calendarHTML += '</div>';
  
  calendarHTML += '</div>';

  // Menampilkan kalender di dalam kontainer
  calendarContainer.innerHTML = calendarHTML;
});

document.addEventListener("DOMContentLoaded", function() {
  var currentDate = new Date();

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var day = days[currentDate.getDay()];
  var date = currentDate.getDate();
  var month = months[currentDate.getMonth()];
  var year = currentDate.getFullYear();

  var formattedDate = date + ' ' + month + ' ' + year;

  document.getElementById("current-date").textContent = formattedDate;
  document.getElementById("current-day").textContent = day;
});

document.addEventListener('DOMContentLoaded', function() {
  var fullNameElement = document.querySelector(".right h3:nth-child(1)");
  var storedUser = localStorage.getItem("user");

  if (storedUser) {
    var user = JSON.parse(storedUser);
    fullNameElement.textContent = "Hello, " + user.name;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var dropdown = document.querySelector('.v48_15');
  var dropdownContent = document.querySelector('.dropdown-content');

  dropdown.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
  });

  document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) {
      dropdownContent.classList.remove('show');
    }
  });
});
function selectOption(option) {
  var dropbtn = document.querySelector('.dropbtn');
  var dropdownContent = document.getElementById('myDropdown');

  dropbtn.textContent = option;
  dropdownContent.classList.remove('show');
}

function toggleDropdown() {
  var dropdownContent = document.getElementById('myDropdown');

  dropdownContent.classList.toggle('show');
}

function closePopup() {
  var myPopup = document.getElementById('myPopup');
  myPopup.style.display = 'none';
}

function updateDisplayedData(dataArray) {
  var selectedTypeElement = document.getElementById('selectedType');
  selectedTypeElement.innerHTML = "";

  if (dataArray.length === 0) {
    selectedTypeElement.textContent = "No data to display.";
    return; // No data entries, so return early
  }

  var hasData = false;

  dataArray.forEach(function(data) {
    var selectedType = data.selectedType;
    var selectedTitle = data.selectedTitle;
    

    if (selectedType && selectedTitle) {
      hasData = true;
      var entryElement = document.createElement('div');
      entryElement.innerHTML = "<span>" + selectedType + "</span><br><span> " + selectedTitle + "</span>";
      selectedTypeElement.appendChild(entryElement);
    }
  });

  // Check if there is no valid data to display
  if (!hasData) {
    selectedTypeElement.textContent = "No data to display.";
  }
}
function selectOption(option) {
  var dropbtn = document.querySelector('.dropbtn');
  var dropdownContent = document.getElementById('myDropdown');

  dropbtn.textContent = option;
  dropdownContent.classList.remove('show');
}

function toggleDropdown() {
  var dropdownContent = document.getElementById('myDropdown');

  dropdownContent.classList.toggle('show');
}

function closePopup() {
  var myPopup = document.getElementById('myPopup');
  myPopup.style.display = 'none';
}

function updateDisplayedData(dataArray) {
  var selectedTypeElement = document.getElementById('selectedType');
  selectedTypeElement.innerHTML = "";

  if (dataArray.length === 0) {
    selectedTypeElement.textContent = "No data to display.";
    return; // No data entries, so return early
  }

  var hasData = false;

  dataArray.forEach(function(data) {
    var selectedType = data.selectedType;
    var selectedTitle = data.selectedTitle;
    var dataId = data.id;

    if (selectedType && selectedTitle) {
      hasData = true;
      var entryElement = document.createElement('div');
      entryElement.innerHTML = "<span>" + selectedType + "  :</span><br><span> " + selectedTitle + "</span>";
      entryElement.setAttribute('data-id', dataId);
      var deleteButton = document.createElement('button');
      deleteButton.className = 'delete';
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        deleteData(dataId);
      });
      entryElement.appendChild(deleteButton);
      selectedTypeElement.appendChild(entryElement);
    }
  });

  // Check if there is no valid data to display
  if (!hasData) {
    selectedTypeElement.textContent = "No data to display.";
  }
}

function showResult() {
  var dropbtn = document.querySelector('.dropbtn');
  var selectedType = dropbtn.textContent;

  var selectedTitleElement = document.getElementById('selectedTitle');
  var selectedTypeElement = document.getElementById('selectedType');

  var titleInput = document.getElementById('title');
  var selectedTitle = titleInput.value;

  titleInput.value = "";
  selectOption("Type");

  var dropdownContent = document.getElementById('myDropdown');
  dropdownContent.classList.remove('show');

  closePopup();

  var storedData = localStorage.getItem('storedData');
  var dataArray = storedData ? JSON.parse(storedData) : [];

  var newData = {
    id: Date.now(), // Unique identifier for the entry
    selectedType: selectedType,
    selectedTitle: selectedTitle
  };
  dataArray.push(newData);

  localStorage.setItem('storedData', JSON.stringify(dataArray));

  updateDisplayedData(dataArray);

  // Hide selectedTitle if no data is entered
  if (!selectedTitle) {
    selectedTitleElement.style.display = 'none';
  } else {
    selectedTitleElement.style.display = 'block';
  }
}

// Function to delete the selected data entry
function deleteData(dataId) {
  var storedData = localStorage.getItem('storedData');
  var dataArray = storedData ? JSON.parse(storedData) : [];

  var updatedDataArray = dataArray.filter(function(data) {
    return data.id !== dataId;
  });

  localStorage.setItem('storedData', JSON.stringify(updatedDataArray));

  updateDisplayedData(updatedDataArray);
}

document.addEventListener('DOMContentLoaded', function() {
  var storedData = localStorage.getItem('storedData');
  var dataArray = storedData ? JSON.parse(storedData) : [];

  if (dataArray.length > 0) {
    updateDisplayedData(dataArray);
  }
});

var doneButton = document.getElementById('done');
doneButton.addEventListener('click', showResult);

var closeButton = document.querySelector('.close');
closeButton.addEventListener('click', closePopup);
