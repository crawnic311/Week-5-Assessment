 const form = document.querySelector('form')

 
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


document.getElementById("encrypt").onclick = function () {
    axios.get("http://localhost:4000/api/encrypt/")
        .then(function (response) {
            let cipher = +response.data
            //console.log(cipher)
            let oMessage = document.getElementById('oMessage')
            let arr = oMessage.value.split('')
            for (let i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charCodeAt(0) + cipher
            }
            let eMessage = document.getElementById('eMessage')
            let eArr = []
            for(let i = 0; i < arr.length; i++) {
                eArr.push(String.fromCharCode(arr[i]))
            }
            
            eMessage.value = eArr.join("")
        });
};









