$(readyNow); // Shorthand for $(document).ready(readyNow);
let totalMonthly = 0;
function readyNow() {
    appendDom();
}

function appendDom(){

    let firstNameBox = $('<input type="text" id="firstName" placeholder = "First Name" />');
    $('body').append(firstNameBox);
    let lastNameBox = $('<input type="text" id="lastName" placeholder = "Last Name" />');
    $('body').append(lastNameBox);
    let idBox = $('<input type="text" id="idBox" placeholder = "ID" />');
    $('body').append(idBox);
    let annualSalaryBox = $('<input type="text" id="annualSalary" placeholder = "Annual Salary" />');
    $('body').append(annualSalaryBox);
    let submitButton = $('<button id="submitButton">Submit</button>');
    $('body').append(submitButton);

    let employeeHeader = $('<h2>Employee<h2>');
    $('body').append(employeeHeader);

    let table = $('<table></table>');
    table.append('<thead><tr><th>First Name</th><th>Last Name</th><th>ID</th><th>Annual Salary</th><th> </th></thead>');

    let tbody = $('<tbody id="tableBody"></tbody>');
    
    table.append(tbody);
    $('body').append(table);
    let totalMonthlyHeader = $('<h2>Total Monthly: $<span id="totalMonthly">0</span> <h2>');
    $('body').append(totalMonthlyHeader);
    $('#submitButton').on("click", inputRow);
    

}

function inputRow(){
    //declares variables based on the inputs values
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let salary = $('#annualSalary').val();
    let idNumber = $('#idBox').val();
  
    //adds a row to the table based on the input values
    let param = $('#tableBody');
    param.append('<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + idNumber + '</td><td>' + salary + '</td><td><button onclick = "deleterow(id)">Delete</button></td></tr>');
    //computes the total monthly based on inputs
    totalMonth();


    $('#firstName').val('');
    $('#lastName').val('');
    $('#annualSalary').val('');
    $('#idBox').val('');


}

function totalMonth(){
    let salary = $('#annualSalary').val();
    salary = salary / 12;
    let calculatedMonthly = Number(salary.toFixed(2));
    totalMonthly += calculatedMonthly;
    let el = $('#totalMonthly');

    el.empty();

    el.append(totalMonthly);
    if (totalMonthly >= 20000) {
        document.getElementById("totalMonthly").style.color = '#FF0000';
    }
}