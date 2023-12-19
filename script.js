const studentdata = [
  {
    studentName: "Unnati",
    Standard: "7",
    SchoolName: "Navyug",
    Meduiem: "Gujarati",
  },
];

// show data in table
function showdata(datatoshow) {
  let table = document.querySelector("table");
  table.innerHTML = `
      <tr>
        <th>No.</th>
        <th>Student Name</th>
        <th>Standard</th>
        <th>School Name</th>
        <th>Meduiem</th>
        <th>Edit</th>
        <th>Delet</th>
      </tr>`;
  datatoshow.forEach(myfunction);
  function myfunction(element, index) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        
        <tr>
          <td>${index}</td>
          <td>${element.studentName}</td>
          <td>${element.Standard}</td>
          <td>${element.SchoolName}</td>
          <td>${element.Meduiem}</td>
          <td><button id="editdatabtn${index}">Edit Data</button></td>
          <td><button id="deletedatabtn${index}">Delete Data</button></td>
        </tr>
    
    `;
    table.appendChild(tr);
    let editdata = document.getElementById(`editdatabtn${index}`);
    editdata.addEventListener("click", editfunc);
    let deletdata = document.getElementById(`deletedatabtn${index}`);
    deletdata.addEventListener("click", dltefunc);
  }
}
showdata(studentdata);

// btn add data

let addbtn = document.getElementById("adddatabtn");
addbtn.addEventListener("click", function showform() {
  let formdiva = document.querySelector(".formdiv");
  formdiva.style.display = "block";
});

let closebtn = document.getElementById("close");
closebtn.addEventListener("click", function showform() {
  let formdiv = document.querySelector(".formdiv");
  formdiv.style.display = "none";
});

function takedatafromform(params) {
  let stname = document.getElementById("fname").value;
  let std = document.getElementById("std").value;
  let Schooln = document.getElementById("sname").value;
  let medi = document.getElementById("Meduiem").value;
  if (stname === "" || std === "" || Schooln === "" || medi === "") {
    alert("plese fill all the details");
    return;
  }
  studentdata.push({
    studentName: stname,
    Standard: std,
    SchoolName: Schooln,
    Meduiem: medi,
  });
  debugger;
  document.getElementById("fname").value = "";
  document.getElementById("std").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("Meduiem").value = "";
  let formdiva = document.querySelector(".formdiv");
  formdiva.style.display = "none";

  showdata(studentdata);
}
// edit function

function editfunc(e) {
  let c_id = e.target.id;
  c_id = c_id.slice(11);
  c_id = Number(c_id);
  console.log(c_id);
  let editdiv = document.querySelector(".editdetails");
  editdiv.style.display = "block";
  let editbtnchange = document.getElementById("editbtnc");
  document.getElementById("editfname").value = studentdata[c_id].studentName;

  document.getElementById("editstd").value = studentdata[c_id].Standard;

  document.getElementById("editsname").value = studentdata[c_id].SchoolName;

  document.getElementById("editMeduiem").value = studentdata[c_id].Meduiem;

  editbtnchange.addEventListener("click", editdatafunc);
  function editdatafunc(params) {
    console.log(c_id);
    let estname = document.getElementById("editfname").value;
    let estd = document.getElementById("editstd").value;
    let eSchooln = document.getElementById("editsname").value;
    let emedi = document.getElementById("editMeduiem").value;
    studentdata[c_id].studentName = estname;
    studentdata[c_id].Standard = estd;
    studentdata[c_id].SchoolName = eSchooln;
    studentdata[c_id].Meduiem = emedi;
    showdata(studentdata);
    let eformdiv = document.querySelector(".editdetails");
    eformdiv.style.display = "none";
  }
}
let eclosebtn = document.getElementById("editclose");
eclosebtn.addEventListener("click", function showform() {
  let eformdiv = document.querySelector(".editdetails");
  eformdiv.style.display = "none";
});

// dlt function
function dltefunc(e) {
  let c_id = e.target.id;
  c_id = c_id.slice(13);
  c_id = Number(c_id);
  console.log(c_id);
  studentdata.splice(c_id, 1);
  showdata(studentdata);
}

// serch section
function searchfunc() {
  let searchvalue = document.getElementById("searchinput").value;
  const searchResult = studentdata.filter((name) => {
    if (name.studentName.toLowerCase().includes(searchvalue)) {
      return true;
    } else {
      return false;
    }
  });
  console.log(searchResult);
  let addsearchdata = document.querySelector(".searchshow");
  addsearchdata.innerHTML = "";
  // console.log(searchResult[0].studentName);
  searchResult.forEach((element, index) => {
    //
    console.log(element);

    let div = document.createElement("div");
    div.innerHTML = ` <h3 id="h3-${index}">${element.studentName}</h3>`;
    addsearchdata.appendChild(div);
    let h3clicked = document.getElementById(`h3-${index}`);
    h3clicked.addEventListener("click", (e) => {
      let currentid = e.target.id;
      currentid = currentid.slice(3);
      console.log(currentid);
      let searchindex = studentdata.indexOf(searchResult[currentid]);
      console.log(searchindex);
      let tra = document.getElementsByTagName("tr");
      console.log(tra);
      tra[searchindex + 1].style.backgroundColor = "#FBE9E7";
    });
  });
}
