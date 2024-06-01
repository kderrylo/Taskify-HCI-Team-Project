document.addEventListener('DOMContentLoaded', function () {
    var calendar = document.getElementById('calendar');
    var prevMonthBtn = document.getElementById('prevMonth');
    var nextMonthBtn = document.getElementById('nextMonth');
    var monthSelect = document.getElementById('month');
    var yearSelect = document.getElementById('year');
    var calendarTable = document.getElementById('calendarTable');
  
    var currentDate = new Date(); // Current date, month, and year
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
  
    // Array of month names
    var monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    // Function to populate month select options
    function populateMonthOptions() {
      monthSelect.innerHTML = ''; // Clear existing options
  
      for (var i = 0; i < 12; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = monthNames[i];
        if (i === currentMonth) { // Set the selected option for the current month
          option.selected = true;
        }
        monthSelect.appendChild(option);
      }
    }
  
    // Function to populate year select options
  function populateYearOptions() {
    var startYear = 1900;
    var endYear = 2050;
  
    for (var year = startYear; year <= endYear; year++) {
      var option = document.createElement('option');
      option.value = year;
      option.text = year;
      if (year === currentYear) { // Set the selected option for the current year
        option.selected = true;
      }
      yearSelect.appendChild(option);
    }
  }
  
  
    // Render calendar
    function renderCalendar(year, month) {
      var daysInMonth = new Date(year, month + 1, 0).getDate();
      var firstDayIndex = new Date(year, month, 1).getDay();
      var prevMonthDays = new Date(year, month, 0).getDate();
  
      calendarTable.innerHTML = '';
  
      var html = '';
  
      // Array of day names
      var dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
      // Generate day names
      for (var i = 0; i < 7; i++) {
        html += '<div class="calendar-day calendar-day-name">' + dayNames[i] + '</div>';
      }
  
      // Generate calendar days from previous month
      for (var i = firstDayIndex; i > 0; i--) {
        html += '<div class="calendar-day previous-month-day non-current-month-day">' + (prevMonthDays - (i - 1)) + '</div>';
      }
  
      var today = new Date();
      var highlightedMonth = today.getMonth();
      var highlightedYear = today.getFullYear();
  
      for (var day = 1; day <= daysInMonth; day++) {
        var className = 'calendar-day';
        if (
          day === currentDate.getDate() &&
          month === currentDate.getMonth() &&
          year === currentDate.getFullYear()
        ) {
          className += ' current-day';
        } else if (
          (month === highlightedMonth && year === highlightedYear) &&
          (day < currentDate.getDate() || year < currentDate.getFullYear() ||
            (year === currentDate.getFullYear() && month < currentDate.getMonth()))
        ) {
          className += ' past-day';
        } else if (
          (month === highlightedMonth && year === highlightedYear) &&
          (day > currentDate.getDate() || year > currentDate.getFullYear() ||
            (year === currentDate.getFullYear() && month > currentDate.getMonth()))
        ) {
          className += ' future-day';
        } else if (month < currentMonth || year < currentYear) {
          className += ' previous-month-day non-current-month-day'; // Add "non-current-month-day" class
        } else if (month > currentMonth || year > currentYear) {
          className += ' next-month-day';
        }
  
        html += '<div class="' + className + '">' + day + '</div>';
      }
  
      // Generate calendar days from next month
      var lastDayIndex = new Date(year, month, daysInMonth).getDay();
      var nextMonthDays = 7 - lastDayIndex - 1;
      for (var i = 1; i <= nextMonthDays; i++) {
        html += '<div class="calendar-day next-month-day non-current-month-day">' + i + '</div>';
      }
  
      calendarTable.innerHTML = html;
  
      // Add event listeners for calendar days
      var calendarDays = document.querySelectorAll('.calendar-day:not(.calendar-day-name)');
      calendarDays.forEach(function (dayElement) {
        dayElement.addEventListener('click', function () {
          // Handle click event
          // You can add your logic here
          console.log('Clicked on day:', dayElement.textContent);
        });
  
        dayElement.addEventListener('mouseenter', function () {
          // Add hover effect when mouse enters
          dayElement.classList.add('hovered');
        });
  
        dayElement.addEventListener('mouseleave', function () {
          // Remove hover effect when mouse leaves
          dayElement.classList.remove('hovered');
        });
      });
    }
  
    // Function to update month and year select options
    function updateMonthYear(year, month) {
      monthSelect.value = month;
      yearSelect.value = year;
    }
  
    // Event listeners for previous and next month buttons
    prevMonthBtn.addEventListener('click', function () {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar(currentYear, currentMonth);
      updateMonthYear(currentYear, currentMonth);
    });
  
    nextMonthBtn.addEventListener('click', function () {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar(currentYear, currentMonth);
      updateMonthYear(currentYear, currentMonth);
    });
  
    // Event listeners for month and year select options
    monthSelect.addEventListener('change', function () {
      currentMonth = parseInt(this.value);
      renderCalendar(currentYear, currentMonth);
      updateMonthYear(currentYear, currentMonth);
    });
  
    yearSelect.addEventListener('change', function () {
      currentYear = parseInt(this.value);
      renderCalendar(currentYear, currentMonth);
      updateMonthYear(currentYear, currentMonth);
    });
  
    // Populate month and year select options
    populateMonthOptions();
    populateYearOptions();
  
    // Render initial calendar
    renderCalendar(currentYear, currentMonth);
  });
  
  // Function to switch to the previous month
  function previousMonth() {
    // Add fade-out animation class to the calendar elements
    calendarTable.classList.add('fade-out');
    header.classList.add('fade-out');
    month.classList.add('fade-out');
    year.classList.add('fade-out');
  
    // Perform the necessary operations to switch to the previous month
  
    // Remove the fade-out animation class and add the fade-in animation class
    calendarTable.classList.remove('fade-out');
    header.classList.remove('fade-out');
    month.classList.remove('fade-out');
    year.classList.remove('fade-out');
    calendarTable.classList.add('fade-in');
    header.classList.add('fade-in');
    month.classList.add('fade-in');
    year.classList.add('fade-in');
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
