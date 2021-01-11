$(readyNow); 
let totalMonthly = 0;
function readyNow() {
    appendDom();
}

//Function that appends the DOM and deals with buttons
function appendDom(){

    //creates inputs boxes to the DOM
    let firstNameBox = $('<input type="text" id="firstName" style = "margin: 10px;" placeholder = "First Name" />');
    $('body').append(firstNameBox);
    let lastNameBox = $('<input type="text" id="lastName" style = "margin: 10px;" placeholder = "Last Name" />');
    $('body').append(lastNameBox);
    let idBox = $('<input type="text" id="idBox" style = "margin: 10px;" placeholder = "ID" />');
    $('body').append(idBox);
    let title = $('<input type="text" id="title" placeholder = "Title" />');
    $('body').append(title);
    let annualSalaryBox = $('<input type="text" id="annualSalary" style = "margin: 10px;" placeholder = "Annual Salary" /><br>');
    $('body').append(annualSalaryBox);
    let submitButton = $('<button id="submitButton" style = "margin-left: 777px;">Submit</button>');
    $('body').append(submitButton);
    //new header
    let employeeHeader = $('<h2 style = "margin: 10px;">Employee<h2>');
    $('body').append(employeeHeader);

    //creates a table and appends to the DOM
    let table = $('<table></table>');
    table.append('<thead><tr><th>First Name</th><th>Last Name</th><th>ID</th><th>Title</th><th>Annual Salary</th><th> </th></thead>');
    let tbody = $('<tbody id="tableBody"></tbody>');
    table.append(tbody);
    $('body').append(table);

    //new header at the bottom of the page
    let totalMonthlyHeader = $('<h2 style = "text-align:right; margin-right: 10px">Total Monthly: $<span id="totalMonthly">0</span> <h2>');
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
    let title = $('#title').val();
    //if condition to make sure the input boxes aren't empty and salary and idnumber are numbers
    if(firstName!='' && lastName!='' && title!='' && salary!=''&&idNumber!='' && salary >= 0 && idNumber >= 0){
        //adds a row to the table based on the input values
        let param = $('#tableBody');
        param.append('<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + idNumber + '</td><td>' + title+ '</td><td class = "salary" >$' + salary + '</td><td><button class = "deleteButton" >Delete</button></td></tr>');
        $('.deleteButton').on("click", deleteRow);
        //computes the total monthly based on inputs
        totalMonth();

        //empty input boxes
        $('#firstName').val('');
        $('#lastName').val('');
        $('#annualSalary').val('');
        $('#idBox').val('');
        $('#title').val('');
    }
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
    let el = $(this).closest('tr').find('td:nth-child(5)').text();
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