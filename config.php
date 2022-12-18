<?php
    class Database{
        var $host = "localhost";
        var $username = "root";
        var $password = "";
        var $database = "tubes";
        var $koneksi = "";

        function __construct() {
            $this->koneksi = mysqli_connect($this->host, $this->username, $this->password, $this->database);
            if (mysqli_connect_error()) {
                echo "Koneksi database gagal : " . mysqli_connect_error();
            }
        }
        function login($username) {
            $data = mysqli_query($this->koneksi, "SELECT * FROM login_penguna WHERE username = '$username'");
            if(mysqli_num_rows($data) == 0) {
                echo "<b>Data User Tidak</b>";
                $hasil = [];
                header('location:login.html');
            } else {
                while($row = mysqli_fetch_array($data)) {
                    $hasil[] = $row;
                }
            }
            return $hasil;
        }
    }
?>