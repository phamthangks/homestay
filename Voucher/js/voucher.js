function doclick(tag) {
    if (tag.innerHTML === 'GET') {
        tag.innerHTML = 'GOT';
        tag.style.backgroundColor = "#15a4fa";
        alert("Chúc mừng bạn đã nhận được Voucher");
    } else if (tag.innerHTML === 'GOT') {
        alert("Voucher này bạn đã nhận");
    }
}
