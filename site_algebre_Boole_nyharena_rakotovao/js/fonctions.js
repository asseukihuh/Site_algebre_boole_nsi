function calcul_q4() {
  var a = parseInt(document.getElementById('q4_A').value);
  var b = parseInt(document.getElementById('q4_B').value);
  resultat = !(a && b);
  document.getElementById('q4_S').value = resultat;
}

function calcul_q5() {
  var a = parseInt(document.getElementById('q5_A').value);
  var b = parseInt(document.getElementById('q5_B').value);
  var c = parseInt(document.getElementById('q5_C').value);
  
  var nonAB = !(a && b);
  var resultat = nonAB || c;

  var output = resultat ? "true" : "false";
  
  document.getElementById('q5_S').value = output;
}
