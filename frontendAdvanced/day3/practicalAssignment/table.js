const data=['HMTL5','CSS3','ReactJS','AngularJS','Bootstrap']
function tableCreate() {
    const body = document.body,
    tbl = document.createElement('table');

    tbl.style.width = '400px';
    tbl.style.border = '1px solid black';

    // var noOfRows=Math.ceil(data.length/4);
    // console.log(noOfRows);

  for (let i = 0; i <4; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j <4; j++) {
        
        const td = tr.insertCell();
        td.appendChild(document.createTextNode(`${data[j]}`));
        // td.style.border = '1px solid black';
    }
  }
  body.appendChild(tbl);
}

