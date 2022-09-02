# Sanctuary Potties
by Brian Ko
REACT single page application for finding safe restrooms around a city

### Description

This browser application allows users to look up LGBTQIA+ friendly and handicap accessible restrooms in a city by searching the city on the home page (Sanctuary Potties). 

Users can also suggest a restroom to be posted in the future by submitting a form in "Add a commode" tab. 

### Requirements
* npm install (needed for npm start)
* json-server --watch (needed for local database)

### Installation
* git clone https://github.com/brianko1850/project-phase-2 and start it up on text editor.
* open a terminal and initiate ``` npm start ```. localhost:3000 should start on default browser.
* open another terminal and initiate ``` json-server --watch ./data/db.json --port 8000 ```.

### Usage

#### Santuary Potties
This is the home page. Here users can search the cities they'd like to look up bathrooms in. Once the application fetches data from "Refuge Restrooms", It will display list of 10 safe restrooms in the city. The Query is not actually limited to the cities but it is recommended in order to return somewhat compartmentalized result.

#### Add a Commode
Once in "Add a commode" tab, Users can fill out name, address and brief directions to the restroom they'd like to add and submit it by clicking "add" button. Submitted restrooms will be posted on "Pending" tab while they are verified.

#### Pending
"Pending" tab will display the bathrooms the users submitted that have not been verified yet.

### Technologies Used

* react.js
* HTML
* CSS
* Javascript

### Acknowledgements

Restroom data courtesy of the public API https://www.refugerestrooms.org
https://github.com/RefugeRestrooms/refugerestrooms

### License

RefugeRestrooms:

Copyright (C) 2014–2017 Teagan Widmer and contributors

This program is free software; you can redistribute and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see http://www.gnu.org/licenses/.
