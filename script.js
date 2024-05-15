function calculateDiscount() {
    var originalPrice = parseFloat(document.getElementById('originalPrice').value);
    var discountPercentage = parseFloat(document.getElementById('discountPercentage').value);

    if (isNaN(originalPrice) || isNaN(discountPercentage)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers.";
        return;
    }

    if (discountPercentage < 0 || discountPercentage > 100) {
        document.getElementById('result').innerHTML = "Discount percentage must be between 0 and 100.";
        return;
    }

    var discountAmount = (originalPrice * discountPercentage) / 100;
    var discountedPrice = originalPrice - discountAmount;

    document.getElementById('result').innerHTML = "Discounted Price: ₹" + discountedPrice.toFixed(2);
}
