/* Push */
/* 
    1. What does it do?
        The push method appends an item(s) to the end of an array.
    2. Does it edit the current array?
        Yes, it adds items to the end of the array.
    3. What does it return?
        The length of the array.
    4. How can I use this?
        You could use this method to add courses to an array. The push method would take in the course JSON as a parameter and add it to the end of the array.
*/

function addCourse(courseNames, courseCodes) {
    var courseData = [];
    for (var i = 0; i < courseNames.length; i++) {
        var course = {
            'Course Name': courseNames[i],
            'Course Code': courseCodes[i]
        };
        courseData.push(course);
    }
    return courseData;
}

/* Pop */
/* 
    1. What does it do?
        The pop method removes the last item in an array.
    2. Does it edit the current array?
        Yes, it removes elements from the end of the array. 
    3. What does it return?
        It returns the poped element.
    4. How can I use this? 
        You could use this method to undo the last edit made to something. (Normally a mistake)
*/

function undo(changes) {
    return changes.pop();
}

/* Shift */
/* 
    1. What does it do?
        The shift method removes the first item in an array 
    2. Does it edit the current array?
        Yes, it removes elements from the front of the array.
    3. What does it return? 
        The the removed element.
    4. How can I use this?
        You could use this method to remove people from a line(queue).
*/

function shortenLine(currentLine) {
    return currentLine.shift();
}

/* Unshift */
/* 
    1. What does it do?
        The unshift method adds an item(s) to the beginning of the array .
    2. Does it edit the current array?
        Yes, it adds items to the front of the array.
    3. What does it return?
        The length of the array. 
    4. How can I use this?
        You could use this method to add urgent announcements to an array of announcements
*/

function addAnnouncement(urgent = false, newAnnouncement, currentAnnouncements) {
    if (urgent) {
        currentAnnouncements.unshift(newAnnouncement);
    } else {
        currentAnnouncements.push(newAnnouncement);
    }
    return currentAnnouncements;
}

/* Sort */
/*
    1. What does it do?
        The sort method sorts the elements of an array. Without a function as a parameter, this functin will sort by Unicode code points.
    2. Does it edit the current array?
        Yes, it will change the position of items. However, it will not add or remove them.
    3. What does it return? 
        The sorted array.
    4. How can I use this?
        You could use this method to sort students in a course. 
*/

function sortStudents1(currentStudents) {
    return currentStudents.sort();
}

function sortStudents2(currentStudents) {
    return currentStudents.sort(function (a, b) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    });
}

/* Concat */
/* 
    1. What does it do?
        The concat function merges two or more arrays.
    2. Does it edit the current array? 
        No.
    3. What does it return?
        A new array containing all the items of the merged arrays.
    4. How can I use this?
        You could use this method to create a master array of employees without editing their specific team Arrays
*/

function createMasterList(teams) {
    var allEmployees = [];
    for (var i = 0; i < teams.length; i++) {
        allEmployees = allEmployees.concat(teams[i]);
    }
    return allEmployees;
}

/* ForEach */
/* 
    1. What does it do? 
        The forEach method executes a provided function once for each array element. 
    2. Does it edit the current array?
        No
    3. What does it return?
        undefined
    4. How can I use this? 
        You could use this method to loop through an array of bank account values to sum the total amount of money in the bank.
*/

function getTotalMoneyInBank(bankAccountValues) {
    var total = 0;
    bankAccountValues.forEach(function (value) {
        total += value;
    });
    return total;
}

/* Includes */
/* 
    1. What does it do?
        The includes method searches an array for a provided element
    2. Does it edit the current array?
        No.
    3. What does it return?
        True(found) or false(not found). 
    4. How can I use this?
        You could use this method to search if a product is sold at a store.
*/

function productSearch(searchProduct, currentProducts) {
    return currentProducts.includes(searchProduct);
}

/* Every */
/* 
    1. What does it do? 
        The every method checks to see if ALL the elements in an array pass a test provided by a function.
    2. Does it edit the current array?
        No.
    3. What does it return? 
        True(All items passed the test) or false(One or more items failed the test).
    4. How can I use this? 
        You could use this method to test if all employees have a phoneNumber on their account.
*/

function checkEmployee(condition, employees) {
    var check = true;
    for (var i = 0; i < employees.length; i++) {
        check = employees.every(function (value) {
            return value[condition] != undefined && value[condition] != '';
        });
    }
    return check;
}

/* Some */
/* 
    1. What does it do?
        The some method checks to see if at least ONE element in an array passes a test provided by a function. 
    2. Does it edit the current array? 
        No.
    3. What does it return?
        True(At least one item passed the test) or false(All items failed the test).
    4. How can I use this?
        You could use this method to check if a system's components are faulty.
*/

function checkComponents(components) {
    return components.some(function (value) {
        return value.status == false;
    });
}

/* Filter */
/* 
    1. What does it do?
        Creates a new array of only the elements of a provided array that pass a test provided by a function.
    2. Does it edit the current array?
        No.
    3. What does it return?
        A new array with ONLY the items that passed the test.
    4. How can I use this?
        You could use this method to return a list of job candidates that are worth hiring.
*/

function checkCandidates(candidates) {
    return candidates.filter(function (value) {
        return value.education > 1;
    });
}

/* Map */
/* 
    1. What does it do?
        The map function creates a new array with the results of calling a provided function. 
    2. Does it edit the current array? 
        No.
    3. What does it return?
        A new array with the results of the test function.
    4. How can I use this? 
        You could use this method to convert number grades into percentage grades. 
*/

function convertGrades(grades) {
    return grades.map(function (value) {
        return value = value + '%';
    });
}

/* Reduce */
/* 
    1. What does it do?
        The reduce method takes in an accumulator and an array. It tests all the values of the array together to reduce it to a single value.
    2. Does it edit the current array?
        No.
    3. What does it return?
        The single value
    4. How can I use this?
        You could use this method to get the avergae score on a test.
*/

function getAverageScore(scores) {
    var totalScore = scores.reduce(function (accumulator, value) {
        return accumulator + value;
    });
    return totalScore / scores.length;
}

/* Splice */
/* 
    1. What does it do?
        The splice method can insert, replace, and/or delete values in an array.
    2. Does it edit the current array?
        Yes, it can insert, replace, and/or delete values.
    3. What does it return? 
        An array containing the deleted elements. If no elements are deleted the array is empty.
    4. How can I use this? 
        You could use this function to add an employees into a desired location in an array.
*/

function addEmployee(newEmployee, currentEmployees, desiredLocation, numToDelete = 0) {
    currentEmployees.splice(desiredLocation, numToDelete, newEmployee);
    return currentEmployees;
}

/* Slice */
/* 
    1. What does it do? 
        The slice functions copies a desired portion of an array into a new array.
    2. Does it edit the current array?
        No.
    3. What does it return?
        A new array containing the copied parts.
    4. How can I use this?
        You could use this method to select a menu item and display it as the daily special in a resturant.
*/

function getDailySpecials(menuItems, specialIndex) {
    return menuItems.slice(specialIndex, specialIndex + 1);
}

/* Reverse */
/* 
    1. What does it do?
        The reverse method reverses the contents in an array.
    2. Does it edit the current array?
        No.
    3. What does it return?
        A new array with the contents reversed.
    4. How can I use this? 
        You could use this method to change the order of a table from less to greater to greater to less.
*/

function getReversedArray(data) {
    return data.reverse();
}

function main() {
    console.log('Push Example');
    console.log(addCourse(['Intro to English', 'Into to History', 'Advanced Programming', 'History in the Modern World', 'Genetics'], ['ENG 101', 'HIST 101', 'CS 301', 'HIST 205', 'SCI 225']));
    console.log('\nPop Example');
    console.log(undo(['I did not accidently delete this.', 'I accidently deleted this.']));
    console.log('\nShift Example');
    console.log(shortenLine(['Bob', 'Sue', 'Billy', 'Joe']));
    console.log('\nUnshift Example');
    console.log(addAnnouncement(true, 'Jesus Returns!', ['Horses Run Faster!', 'Cookie Party Saturday!', 'The Wheel is Reinvented!']));
    console.log('\nSort Example');
    console.log(sortStudents1(['Zed', 'Joe', 'Allie', 'Rey', 'Mary', 'Sue', 'Luke']));
    console.log(sortStudents2([300, 32, 54, 235, 5765, 1243, 1]));
    console.log('\nConcat Example');
    console.log(createMasterList([
        ['Billy', 'Sue', 'Joe'],
        ['Amy', 'Sally', 'Will'],
        ['Bob', 'Mary', 'Rey']
    ]));
    console.log('\nForEach Example');
    console.log(getTotalMoneyInBank([500.50, 29.56, 10034.34, 4045345.54, 125034.95]));
    console.log('\nIncludes Example');
    console.log(productSearch('Greek Yogurt', ['Bannanas', 'Apples', 'Milk', 'Grapes', 'Greek Yogurt']));
    console.log('\nEvery Example');
    console.log(checkEmployee('phoneNumber', [{
        'nameFirst': 'Joe',
        'nameLast': 'Flannigan',
        'phoneNumber': '256-658-3267'
    }, {
        'nameFirst': 'Sally',
        'nameLast': 'Flannigan',
        'phoneNumber': '208-533-6545'
    }, {
        'nameFirst': 'Bob',
        'nameLast': 'Dole',
        'phoneNumber': ''
    }]));
    console.log('\nSome Example');
    console.log(checkComponents([{
        'name': 'Battery',
        'status': true
    }, {
        'name': 'CPU',
        'status': true
    }, {
        'name': 'RAM',
        'status': true
    }, {
        'name': 'Hard Disc',
        'status': false
    }]));
    console.log('\nFilter Example');
    console.log(checkCandidates([{
        'nameFirst': 'Joe',
        'nameLast': 'Flannigan',
        'phoneNumber': '256-658-3267',
        'education': 2
    }, {
        'nameFirst': 'Sally',
        'nameLast': 'Flannigan',
        'phoneNumber': '208-533-6545',
        'education': 3
    }, {
        'nameFirst': 'Bob',
        'nameLast': 'Dole',
        'phoneNumber': '',
        'education': 1
    }]));
    console.log('\nMap Example');
    console.log(convertGrades([96, 65, 76, 86, 100, 76, 38, 0, 56, 100, 45]));
    console.log('\nReduce Example');
    console.log(getAverageScore([96, 65, 76, 86, 100, 76, 38, 0, 56, 100, 45]).toFixed(2) + '%');
    console.log('\nSplice Example');
    console.log(addEmployee('Flabbio', ['Bob', 'Sue', 'Billy', 'Joe'], 2));
    console.log('\nSlice Example');
    console.log(getDailySpecials(['Macaroni & Cheese', 'Hamburger', 'Hot Dog', 'Chicken Noodle Soup', 'Turkey Leg', 'Pollo a la Brasa'], Math.floor(Math.random() * 6 + 0)));
    console.log('\nReverse Example');
    console.log(getReversedArray([{
        'nameFirst': 'Joe',
        'nameLast': 'Flannigan',
        'phoneNumber': '256-658-3267',
        'education': 2
    }, {
        'nameFirst': 'Sally',
        'nameLast': 'Flannigan',
        'phoneNumber': '208-533-6545',
        'education': 3
    }, {
        'nameFirst': 'Bob',
        'nameLast': 'Dole',
        'phoneNumber': '',
        'education': 1
    }]));
}

main();