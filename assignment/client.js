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
    let table = $('<table></table>');
    table.append('<thead><tr><th>First Name</th><th>Last Name</th><th>ID</th><th>Annual Salary</th></thead>');

    let tbody = $('<tbody id="tableBody"></tbody>');
    table.append(tbody);

    $('body').append(table);

    $('#submitButton').on("click", inputRow);
}

function inputRow(){
    
}