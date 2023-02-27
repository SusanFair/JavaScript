// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build a function to create a table
function buildTable(data) {
    // First clear any existing date
    tbody.html("");
    // loop through each object and append a row and cells for each value in the roww
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
    );
    });
}

// Module work for Online Work

// function handleClick using D3
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    
    // Call buildTable function to rebuild table based on 
    // filtered data
    buildTable(filteredData);
}

// Listen for click on webpage
d3.selectAll("#filter-btn").on("click", handleClick);

// Call buildTable function when page opens
buildTable(tableData);

