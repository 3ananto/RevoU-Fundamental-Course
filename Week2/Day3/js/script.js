function calculate() {
    try {
        let weightInput = document.getElementById('weight-input').value;
            console.log(weightInput);

        if (parseInt(weightInput) > 0 && parseInt(weightInput) < 100) {
            alert('Harap isi berat badan Anda')
            console.log('Kosong');
        } else {
            document.getElementById('result-bmi').innerHTML = weightInput;
            console.log('Ada Isi');
        } 
        } catch (error) {
            console.log(error);
        }
    }