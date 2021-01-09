$(readyNow); // Shorthand for $(document).ready(readyNow);

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
    table.append('<thead><tr><th>First Name</th><th>Last Name</th><th>ID</th><th>Annual Salary</th></thead>');

    let tbody = $('<tbody id="tableBody"></tbody>');
    
    table.append(tbody);
    $('body').append(table);
    let totalMonthlyHeader = $('<h2>Total Monthly: $ <h2>');
    $('body').append(totalMonthlyHeader);
    $('#submitButton').on("click", inputRow);
}

function inputRow(){
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let salary = $('#annualSalary').val();
    let idNumber = $('#idBox').val();
    let param = $('#tableBody');
    param.append('<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + idNumber + '</td><td>' + salary + '</td></tr>');
    $('#firstName').val('');
    $('#lastName').val('');
    $('#annualSalary').val('');
    $('#idBox').val('');


}