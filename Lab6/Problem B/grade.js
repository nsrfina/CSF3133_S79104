 /*

Error 1 (grade.html, Line 8):
onsubmit="checkMark()"
Missing return statement.
Fixed to:
onsubmit="return checkMark()"

Error 2 (grade.js, Line 9):
isNan(mark)
Incorrect function name.
Fixed to:
isNaN(mark)

Error 3 (grade.js, Line 14):
if (mark < 0 && mark > 100)
Condition can never be true.
Fixed to:
if (mark < 0 || mark > 100)

Error 4 (grade.js, Line 30):
style.colour
Incorrect property name.
Fixed to:
style.color

Error 5 (grade.html, Line 17):
onclick="showtable()"
Function name does not match JavaScript function.
Fixed to:
onclick="showTable()"

Error 6 (grade.js, Line 38):
for (let i = 1; i < grades.length; i++)
Starts from index 1 and skips grade A.
Fixed to:
for (let i = 0; i < grades.length; i++)

Error 7 (grade.js, Line 37):
Grade table header row missing.
Added:
Grade | Mark Range

Error 8 (grade.js, Line 42):
innerHtml
Wrong property name.
Fixed to:
innerHTML

Error 9 (grade.js):
Form refreshes after submission and result disappears.
Fixed by:
return false;

Error 10 (grade.js):
Empty mark field accepted.
Added validation:
"Mark field cannot be empty."

*/


// Check student mark and calculate grade
function checkMark()
{
    let name = document.forms["gradeForm"]["name"].value;
    let mark = document.forms["gradeForm"]["mark"].value;

    // Check empty name
    if (name == "")
    {
        alert("Name must be filled out.");
        return false;
    }

    // Check empty mark
    if (mark == "")
    {
        alert("Mark field cannot be empty.");
        return false;
    }

    // Check numeric input
    if (isNaN(mark))
    {
        alert("Please enter a valid numeric value.");
        return false;
    }

    mark = parseInt(mark);

    // Check mark range
    if (mark < 0 || mark > 100)
    {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    let grade;

    // Determine grade
    if (mark >= 80)
    {
        grade = "A";
    }
    else if (mark >= 65)
    {
        grade = "B";
    }
    else if (mark >= 50)
    {
        grade = "C";
    }
    else
    {
        grade = "F";
    }

    // Display result
    document.getElementById("result").innerHTML =
        name + " got grade " + grade;

    // Change colour according to grade
    if (grade == "A" || grade == "B")
    {
        document.getElementById("result").style.color =
            "green";
    }
    else if (grade == "C")
    {
        document.getElementById("result").style.color =
            "orange";
    }
    else
    {
        document.getElementById("result").style.color =
            "red";
    }

    // Display date and time checked
    document.getElementById("checkTime").innerHTML =
        "Checked on: " + new Date();

    return false;
}


// Generate random mark from 0 to 100
function randomMark()
{
    let random =
        Math.floor(Math.random() * 101);

    document.getElementById("mark").value =
        random;
}


// Display grade table
function showTable()
{
    let grades = ["A", "B", "C", "F"];

    let ranges = [
        "80-100",
        "65-79",
        "50-64",
        "0-49"
    ];

    let tableHTML =
        "<table>" +
        "<tr>" +
        "<th>Grade</th>" +
        "<th>Mark Range</th>" +
        "</tr>";

    for (let i = 0; i < grades.length; i++)
    {
        tableHTML +=
            "<tr>" +
            "<td>" + grades[i] + "</td>" +
            "<td>" + ranges[i] + "</td>" +
            "</tr>";
    }

    tableHTML += "</table>";

    document.getElementById("tableContainer").innerHTML =
        tableHTML;
}