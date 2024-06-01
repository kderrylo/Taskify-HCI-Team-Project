const circles = document.querySelectorAll('.circle');

const initialColors = {
  task: '#9747FF',
  examDay: 'red',
  event: '#00FF57',
  reminder: 'yellow',
  birthday: 'orange'
};

circles.forEach(circle => {
  const colorPicker = circle.querySelector('.color-picker');
  const circleId = circle.id;

  // Retrieve the stored color value from localStorage
  const storedColor = localStorage.getItem(circleId);

  // Set initial color based on stored value or default value
  const initialColor = storedColor || initialColors[circleId];
  circle.style.backgroundColor = initialColor;
  colorPicker.value = initialColor;

  circle.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click event from propagating to color picker
    colorPicker.click();
  });


  
  colorPicker.addEventListener('change', () => {
    const selectedColor = colorPicker.value;
    circle.style.backgroundColor = selectedColor;

    // Store the selected color value in localStorage
    localStorage.setItem(circleId, selectedColor);
  });
});

const toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("change", function () {
  if (this.checked) {
    // Kode yang akan dijalankan saat toggle diaktifkan (on)
    console.log("Toggle diaktifkan");
  } else {
    // Kode yang akan dijalankan saat toggle dinonaktifkan (off)
    console.log("Toggle dinonaktifkan");
  }
});


