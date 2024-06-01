$(document).ready(function() {
  // Mengatur fungsi saat halaman selesai dimuat

  // Fungsi saat tombol "Login" diklik
  $("#loginButton").click(function(event) {
    event.preventDefault(); // Menghentikan perilaku default tombol submit

    // Mengambil nilai input dari elemen dengan id tertentu
    var phoneNumber = $("#phoneNumber").val();
    var password = $("#password").val();

    // Validasi input
    if (phoneNumber.trim() === "") {
      alert("Phone Number field is required");
      return;
    }

    if (password === "") {
      alert("Password field is required");
      return;
    }

    // Validasi format nomor telepon
    if (!phoneNumber.startsWith("+62")) {
      alert("Phone Number must start with +62");
      return;
    }

    // Mendapatkan data pengguna dari penyimpanan lokal (localStorage)
    var storedUser = localStorage.getItem("user");

    if (storedUser) {
      var user = JSON.parse(storedUser);

      if (user.phoneNumber === phoneNumber && user.password === password) {
        alert("Login successful!");
        // Di sini, Anda dapat mengarahkan pengguna ke halaman lain setelah login berhasil
        window.location.href = "home.html";
      } else {
        alert("Invalid phone number or password. Please try again.");
      }
    } else {
      alert("No user found. Please sign up first.");
    }

    // Mengosongkan nilai input
    $("#phoneNumber").val("");
    $("#password").val("");
  });
});
