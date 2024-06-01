$(document).ready(function() {
  // Mengatur fungsi saat halaman selesai dimuat

  // Menginisialisasi datepicker
  $("#birth").datepicker({
    dateFormat: "dd-mm-yy",
    changeMonth: true,
    changeYear: true,
    yearRange: "1900:2023", // Set the year range
    onSelect: function(dateText, inst) {
      $("#birth").val(dateText);
    }
  });

  // Fungsi saat tombol "Sign Up" diklik
  $("#signUpButton").click(function(event) {
    event.preventDefault(); // Menghentikan perilaku default tombol submit

    // Mengambil nilai input dari elemen dengan id tertentu
    var name = $("#name").val();
    var birth = $("#birth").val();
    var phoneNumber = $("#phoneNumber").val();
    var password = $("#password").val();
    var agreeCheckbox = $("#agreeCheckbox").is(":checked");

    // Validasi input
    if (name === "") {
      alert("Full Name field is required");
      return;
    }

    if (birth === "") {
      alert("Date of Birth field is required");
      return;
    }

    if (phoneNumber === "") {
      alert("Phone Number field is required");
      return;
    }

    if (password === "") {
      alert("Password field is required");
      return;
    }

    if (!agreeCheckbox) {
      alert("Please agree to the terms and conditions");
      return;
    }

    // Validasi format nomor telepon
    if (!phoneNumber.startsWith("+62")) {
      alert("Phone Number must start with +62");
      return;
    }

    // Membuat objek pengguna baru
    var user = {
      name: name,
      birth: birth,
      phoneNumber: phoneNumber,
      password: password
    };

    // Menyimpan pengguna ke penyimpanan lokal (localStorage)
    localStorage.setItem("user", JSON.stringify(user));

    // Jika semua validasi berhasil, tampilkan pesan sukses
    alert("Sign up successful");

    // Redirect ke halaman login setelah sign up berhasil
    window.location.href = "login.html";
  });
});
