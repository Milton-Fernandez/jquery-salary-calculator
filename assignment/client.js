$(readyNow); 
let totalMonthly = 0;
function readyNow() {
    appendDom();
}

//Function that appends the DOM and deals with buttons
function appendDom(){

    //creates inputs boxes to the DOM
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
    //new header
    let employeeHeader = $('<h2>Employee<h2>');
    $('body').append(employeeHeader);

    //creates a table and appends to the DOM
    let table = $('<table></table>');
    table.append('<thead><tr><th>First Name</th><th>Last Name</th><th>ID</th><th>Annual Salary</th><th> </th></thead>');
    let tbody = $('<tbody id="tableBody"></tbody>');
    table.append(tbody);
    $('body').append(table);

    //new header at the bottom of the page
    let totalMonthlyHeader = $('<h2>Total Monthly: $<span id="totalMonthly">0</span> <h2>');
    $('body').append(totalMonthlyHeader);
    $('#submitButton').on("click", inputRow);
    
}//end appendDom

//adds a new row to the table
function inputRow(){
    //declares variables based on the inputs values
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let salary = $('#annualSalary').val();
    let idNumber = $('#idBox').val();
  
    //adds a row to the table based on the input values
    let param = $('#tableBody');
    param.append('<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + idNumber + '</td><td class = "salary" >' + salary + '</td><td><button class = "deleteButton" >Delete</button></td></tr>');
    $('.deleteButton').on("click", deleteRow);
    //computes the total monthly based on inputs
    totalMonth();

    //empty input boxes
    $('#firstName').val('');
    $('#lastName').val('');
    $('#annualSalary').val('');
    $('#idBox').val('');

}//end inputRow

//calculates the total monthly and updates the DOM
function totalMonth(){
    let salary = $('#annualSalary').val();
    salary = salary / 12;
    let calculatedMonthly = Number(salary.toFixed(2));
    totalMonthly += calculatedMonthly;
    let el = $('#totalMonthly');

    el.empty();

    el.append(totalMonthly);
    //turn text red if totalMonthly >= 20000
    if (totalMonthly >= 20000) {
        document.getElementById("totalMonthly").style.color = '#FF0000';
    }
}//end totalMonth

//updates the DOM and delets the row
function deleteRow(){   
    //grabs the annual salary from the table
    let el = $(this).closest('tr').find('td:nth-child(4)').text();
    //divides it by 12 and updates the totalMonthly
    let num = el;
    num = num / 12;
    let fixedNum = Number(num.toFixed(2));
    totalMonthly = totalMonthly - fixedNum;
    //updates the DOM
    let ell = $('#totalMonthly');
    ell.empty();
    ell.append(totalMonthly);
    //deletes the row
    $(this).parents('tr').remove();

}//end deleteRow