function doclick(tag) {
    if (tag.innerHTML === 'GET') {
        tag.innerHTML = 'GOT';
        tag.style.backgroundColor = "#15a4fa";
        alert("Congratulations on receiving the voucher!");
    } else if (tag.innerHTML === 'GOT') {
        alert("This voucher you received!");
    }
}
