
    var a = parseInt(prompt('Tebak angka dari 1 hingga 100'));
    var b = Math.round(Math.random() * 100 + 1);

    while (true) {

        if (a == b) {
            alert('Selamat Anda benar');
            break; 
        } else if (a < b) {
            a = parseInt(prompt('Terlalu rendah.\nMasukkan angka: '));
        } else {
            a = parseInt(prompt('Terlalu tinggi.\nMasukkan angka: '));
        }
    }
