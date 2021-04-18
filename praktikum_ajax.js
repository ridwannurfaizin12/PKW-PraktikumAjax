/**
 * AJAX
 * AJAX = Asynchronous Javascript and XMl
 * AJAX atau Asyncrhonous Javascript and XML adalah teknik
 * yang digunakan untuk membuat website yang dinamis
 * artinya website mampu mengupdate dan menampilkan 
 * data baru dari server tanpa perlu melakukan reload
 * 
 * pada praktikum ini, kita akan menggunakan AJAX Jquery
 */

// Fungsi AJAX Jquery untuk meload isi file
$(function () {
    $("#nama").load("test.txt");
});

/**
 * berikut merupakn fungsi untuk fecth data dari internet menggunakan ajax Jquery
 * kita menggunakan https://jsonplaceholder.typicode.com/photos sebagai urlnya
 * silakuan dibuka dulu agar paham
 */
$(function (){
    let url = "https://jsonplaceholder.typicode.com/photos";
    // Mengambil button untuk fetch data
    // Boleh hilangkan line 26 dan 46 jika ingin data langsung terload saat membuka
    // Browser
    $("#\getPost").on("click", function (){
        // Memanggil Jquery Ajax
        $.ajax({
            // Memanggil variabel url
            url: url,
            // Menggunakan GET Request
            type: 'GET',
            // Jika sukses
            success: function (data) {
                let data_html ='';
                // Looping data(ambil satu persatu data)
                $.each(data, function (i, item) {

                    // Mengkonversi haisil loop tadi ke html
                    data_html +=
                        '<br>' +
                        '<img src="' + item.thumbnailUrl + '"alt="">' +
                        '<br>' +
                        '<h1>' + item.id + '. ' + item.title + '</h1>'
                });

                // menggunakan hasil loop tadi ke div dengan id #data_hasil_dari_internet
                $("#data_hasil_dari_internet").html(data_html);
            },
            // Jika error
            error: function (error) {
                // Tampilkan Console.log
                console.log(error);
            },
        });
    });
});