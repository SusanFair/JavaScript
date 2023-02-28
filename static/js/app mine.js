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
    // filteredDate is for a start filled with the whole original data set tableData
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



////// Start of Challenge

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {
    
    console.log(this)

// 4a. Save the element that was changed as a variable.
var filterEntries = {
    "date": d3.select("#datetime").property("value"),
    "city": d3.select("#city").property("value"),
    "state": d3.select("#state").property("value"),
    "country": d3.select("#country").property("value"),
    "shape": d3.select("#shape").property("value"),
}
    console.log(filterEntries)

    
 // 4b. Save the value that was changed as a variable.


// 4c. Save the id of the filter that was changed as a variable.

// 5. If a filter value was entered then add that filterId and value
// to the filters list. Otherwise, clear that filter from the filters object.
if (filterEntries.date.length === 0) {
    delete filterEntries.date
} else {
    filters.date = filterEntries.date}

if (filterEntries.city.length === 0) {
        delete filterEntries.city
} else {
    filters.city = filterEntries.city}

if (filterEntries.state.length === 0) {
    delete filterEntries.state
} else {
    filters.state = filterEntries.state}

if (filterEntries.country.length === 0) {
    delete filterEntries.country
} else {
    filters.country = filterEntries.country}

if (filterEntries.shape.length === 0) {
        delete filterEntries.shape
} else {
    filters.shape = filterEntries.shape}
    console.log(filterEntries);
    console.log(filters)
  


 // 6. Call function to apply all filters and rebuild the table
 filterTable();
  
}

// 7. Use this function to filter the table when data is entered.
function filterTable() {
    // filteredDate is for a start filled with the whole original data set tableData
    let filteredData = tableData;
    filteredData = filteredData.filter(row => row.datetime === date);
    }



//     // 8. Set the filtered data to the tableData.
    
  
//     // 9. Loop through all of the filters and keep any data that
//     // matches the filter values
    
  
//     // 10. Finally, rebuild the table using the filtered data
    
   
  
//   // 2. Attach an event to listen for changes to each filter
//   // Was filter-btn, changes to 
   d3.selectAll("input").on("change", updateFilters);


//   // Build the table when the page loads
   buildTable(tableData);




