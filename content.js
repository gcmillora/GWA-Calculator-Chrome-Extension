document.getElementById("addRow").addEventListener("click", myFunction);
document.getElementById("computeGWA").addEventListener("click", compute);

function myFunction() {
  var table = document.getElementById("grades");
  var row = table.insertRow(table.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = `<td>
                <input type="input"  />
              </td>`;
  cell2.innerHTML = `<td><input type="input" /></td>`;
}

function compute() {
  var table = document.getElementById("grades");
  var unitsSum = 0;
  var gradesSum = 0;
  var final_gwa = 0;
  for (var ctr = 1; ctr < table.rows.length; ctr++) {
    unitsSum =
      unitsSum + Number(table.rows[ctr].cells[1].querySelector("input").value);
  }
  for (var ctr = 1; ctr < table.rows.length; ctr++) {
    gradesSum =
      gradesSum +
      Number(table.rows[ctr].cells[1].querySelector("input").value) *
        Number(table.rows[ctr].cells[0].querySelector("input").value);
  }
  final_gwa = gradesSum / unitsSum;
  document.getElementById("val").innerHTML = final_gwa.toFixed(4);
}
