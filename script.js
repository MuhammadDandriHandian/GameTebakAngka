    var a = parseInt(prompt('Masukkan angka dari 1 hingga 10'));
    var b = Math.random();
    var hasil = '';

    while (true) {
        if (b < 0.1) {
            hasil = 1;
        } else if (b >= 0.1 && b < 0.2) {
            hasil = 2;
        } else if (b >= 0.2 && b < 0.3) {
            hasil = 3;
        } else if (b >= 0.3 && b < 0.4) {
            hasil = 4;
        } else if (b >= 0.4 && b < 0.5) {
            hasil = 5;
        } else if (b >= 0.5 && b < 0.6) {
            hasil = 6;
        } else if (b >= 0.6 && b < 0.7) {
            hasil = 7;
        } else if (b >= 0.7 && b < 0.8) {
            hasil = 8;
        } else if (b >= 0.8 && b < 0.9) {
            hasil = 9;
        } else {
            hasil = 10;
        }

        if (a == hasil) {
            alert('Selamat Anda benar');
            break; 
        } else if (a < hasil) {
            a = parseInt(prompt('Terlalu rendah.\nMasukkan angka: '));
        } else {
            a = parseInt(prompt('Terlalu tinggi.\nMasukkan angka: '));
        }
    }
