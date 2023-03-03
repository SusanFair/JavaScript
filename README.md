# JavaScript and UFOs


## Overview of Project  
The JavaScript and UFOs project is designed to illustrate the use of a multi-filtered table rendering data retrieved from the provided data file based on user input.  This table will allow mutiple variables to be entered in the filter such as City, State and even the Shape of the UFO!!!  This project was also an exploration into the power of JavaScript and HTML in making a user friendly, interactive webpage.  

The UFO sightings data that was used for this project is from 2010 and reaches across the United States and Canada.

## Results
The results were multifold ... firstly one result was a great looking webpage!!

![Alt text](https://github.com/SusanFair/JavaScript_and_UFOs/blob/main/Resources/webpage.png)

On this webpage when it initially loads a full set of data is available.  To make the data more user friendly 5 Filters are provided un the 'Filter Search' title.  The filters include:
    * Date
    * City
    * State/Province
    * Country
    * Shape

### How it Works.
The user can enter any viable entry into any field.  For example if 'ca' is entered into the state field.  A updated list of sightings in that state of California appear in the results table.

![State_California](https://github.com/SusanFair/JavaScript_and_UFOs/blob/main/Resources/state.PNG)

To drill down further a city filter could be added.  Dana may notice that el cajon is listeded several times in the updated table for California.  Entering 'el cajon' into the City filter will return all of the sightings in El Cajon, California.

![City_El Cajon](https://github.com/SusanFair/JavaScript_and_UFOs/blob/main/Resources/city.PNG)

Alternatively, if the user wanted to understand the prevelence of a specific type of UFO, say they want to start their filtering on the Shape of the object that was sighted, that is possible too.  Filter first on a shape e.g.: 'triangle' in the Shape field will return a list of all sightings that were described to have that shape.  Then the user could filter by area to see the prevelence of triangle shaped sightings in California for instance.

![Shape](https://github.com/SusanFair/JavaScript_and_UFOs/blob/main/Resources/shape.PNG)

To clear the filters and start again the user can either delete their entries and click anywhere on the page or click the title "UFO Sightings" and/or the refresh button.  If only 1 filter has been set they can simply replace the field with new criteria to reset the table.

#### Give this new interactive UFO Sightings webpage a try: [UFO Sightings: Fact or Fancy?](https://susanfair.github.io/JavaScript_and_UFOs/)

## Summary
The functionality of the UFO Project webpage is working as expected.  It looks great! It allows interactive filtering on the UFO Sightings data through input in mutiple filter fields.

#### Drawback?
One drawback of the design is the overall layout of the page.  Putting the filters at the left hand side of the page has will the user to have to scroll down often.  Also this limits the space for the results fields within the table.  The comments field, depending on the size of the browser page, is very limited causing a tall vertical field with alot of text wrapping.   If the Filter Search fields were put across the entire page width just above the results table, this would eliminate unnecessary scrolling and would give more room for the Comments field text.

#### Recommendations:
For further development opportunities I would recommend the following:

* **Error or N/A message:**  Currently when inforamtion is entered in a filter field that is not available in the data, there is no indicator of that the user has entered an invalide or unavailable entry.  There is no message saying that 'there are no results for this criteria', nor is there a 'no data found' message to reassure the user that the filter is working correctly but just didn't find any matching data.

* **Text search:** There is a lot of extra and interesting information in the Comments field.  It would be advantagous to add a text search for the Comments.   This would greatly increase the usability of the filters.  For example several times in the comments it is noted that there have been sightings on or near News Years.  A text search would allow a more free form search of this extra data.


