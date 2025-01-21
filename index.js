var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["StudentCode"] = document.getElementById("StudentCode").value;
    formData["Fullname"] = document.getElementById("Fullname").value;
    formData["email"] = document.getElementById("email").value;
    formData["Contact"] = document.getElementById("Contact").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("StudentData").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.StudentCode;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.Fullname;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.Contact;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;

}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("StudentCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Fullname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Contact").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.StudentCode;
    selectedRow.cells[1].innerHTML = formData.Fullname;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.Contact;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('StudentData').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("StudentCode").value = '';
    document.getElementById("Fullname").value = '';
    document.getElementById("email").value = '' ;
    document.getElementById("Contact").value = '' ;
    selectedRow = null;
}

//Add Data In Local Storage
const btn = document.getElementById("submit");
const stuid = document.getElementById("StudentCode");
console.log(stuid.value);

btn.addEventListener("click", () => {
    const data = localStorage.setItem("StudentID",stuid.value)
    

});