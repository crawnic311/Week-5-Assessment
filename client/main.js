function submitHandler(e) {
    e.preventDefault()

    let address = document.querySelector('#address')
    let price = document.querySelector('#price')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        address: address.value,
        price: price.value, 
        imageURL: imageURL.value
    }



 document.getElementById("complimentButton").onclick = function () {
     axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
            const data = response.data;
            alert(data);
        });
};

document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
            const data = response.data;
            alert(data);
        });
};

document.getElementById("colorButton").onclick = function () {
    axios.get("http://localhost:4000/api/color/")
        .then(function (response) {
            const data = response.data;
            let newColor = document.getElementById("colorButton")
            newColor.style.backgroundColor = data
        });
};

document.getElementById("encryptSubmit").onclick = function () {
    axios.get("http://localhost:4000/api/encrypt/")
        .then(function (response) {
            const data = response.data
        })
}