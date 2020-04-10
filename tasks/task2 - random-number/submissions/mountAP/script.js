let field_m = document.getElementById("num_m");
let field_n = document.getElementById('num_n');
let field_gen = document.getElementById('generated');
let generateBtn = document.getElementById('generate');

field_m.oninput = function () {
    update(field_m.value, field_n.value, field_gen);
}

field_n.oninput = function () {
    update(field_m.value, field_n.value, field_gen);
}

generateBtn.onclick = function () {
    update(field_m.value, field_n.value, field_gen);
}


function isNumeric(num) {
    return !isNaN(num);
}

function randomNumber(lower = 0, upper = 1) {
    return lower + Math.floor(Math.random() * (upper - lower + 1))
}

/** 
  * produce a random number and update the 
  * generated field(field_gen) using values m and n  
*/
function update(m, n, field_gen) {
    if (m && n && isNumeric(m) && isNumeric(n)) {
        m = parseInt(m);
        n = parseInt(n);
        let r = randomNumber(Math.min(m, n), Math.max(m, n))
        field_gen.innerHTML = r.toString();
    } else {
        field_gen.innerHTML = "_"
    }
}
