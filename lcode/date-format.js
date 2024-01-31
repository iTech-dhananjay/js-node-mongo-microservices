//Validate Dates in the Format of DD/MM/YYYY
function valDate(date) {
    let dateformat = /^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])/;

    // Matching the date through regular expression
    if (date.match(dateformat)) {
        let operator = date.split('/');

        // Extract the string into month, date and year
        let datepart = [];
        if (operator.length > 1) {
            datepart = date.split('/');
        }

        let day = parseInt(datepart[0]);
        let month = parseInt(datepart[1]);
        let year = parseInt(datepart[2]);

        // Create a list of days of a month
        let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month == 1 || month > 2) {
            if (day > ListofDays[month - 1]) {
                //to check if the date is out of range
                console.log('Invalid date');
                return false;
            }
        } else if (month == 2) {
            let leapYear = false;
            if ((!(year % 4) && year % 100) || !(year % 400))
                leapYear = true;
            if (leapYear == false && day >= 29) {
                console.log('Invalid date');
                return false;
            } else if (leapYear == true && day > 29) {
                console.log('Invalid date format!');
                return false;
            }
        }
    } else {
        console.log('Invalid date format!');
        return false;
    }
    return 'Valid date';
}

console.log(valDate('29/02/2024'));

//---------------------------Access date with year last two index------------------
const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear() % 100;

const result = `${day}_${month}_${year}`;

console.log(result); //17_7_23

//-------------manipulateArray

function manipulateArray(arr, operation, ...args) {
    switch (operation) {
        case 'add':
            arr.push(...args);
            break;
        case 'remove':
            for (let item of args) {
                let index = arr.indexOf(item);
                if (index !== -1) {
                    arr.splice(index, 1);
                }
            }
            break;
        case 'modify':
            for (let i = 0; i < args.length; i += 2) {
                let index = arr.indexOf(args[i]);
                if (index !== -1) {
                    arr[index] = args[i + 1];
                }
            }
            break;
        default:
            console.log('Invalid operation.');
    }

    return arr;
}

// Example usage:
let myArray = [1, 2, 3, 4, 5];

// Adding elements
manipulateArray(myArray, 'add', 6, 7);
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6, 7]

// Removing elements
manipulateArray(myArray, 'remove', 3, 5);
console.log(myArray); // Output: [1, 2, 4, 6, 7]

// Modifying elements
manipulateArray(myArray, 'modify', 2, 8, 4, 9);
console.log(myArray); // Output: [1, 8, 9, 6, 7]


/*
const locationSchema = new mongoose.Schema(
     {
          codeGenerationType: {
               type: String,
               enum: ['auto', 'manual'],
               default: 'auto',
          },
          parentId: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'locations',
               default: null,
          },
          address: {
               type: {
                    address1: {
                         type: String,
                    },
                    address2: {
                         type: String,
                    },
               },
          },
          departments: [
               {
                    departmentId: {
                         type: mongoose.Schema.Types.ObjectId,
                         ref: 'departments',
                    },
                    departmentAddress: {
                         address1: {
                              type: String,
                         },
                         address2: {
                              type: String,
                         },
                         city: {
                              type: String,
                         },
                    },
                    contactAddress: {
                         emailAddress: {
                              type: String,
                         },
                         contactNumber: {
                              type: String,
                         },
                    },
                    moreInformation: {
                         departmentInchargeId: {
                              type: mongoose.Schema.Types.ObjectId,
                              ref: 'users',
                              default: null,
                         },
                         chargingType: {
                              type: String,
                         },
                    },
               },
          ],
     },
     { new: true }
);
 */
const updateLocationWithDepartments = async (
    departmentId,
    locationId,
    departments,
    organizationId
) => {
    try {
        const location = await locationModel.findOneAndUpdate(
            {
                _id: locationId,
                organizationId,
                'departments.departmentId': departmentId,
            },
            {
                $set: {
                    'departments.$.departmentAddress':
                    departments[0].departmentAddress,
                    'departments.$.contactAddress':
                    departments[0].contactAddress,
                    'departments.$.moreInformation':
                    departments[0].moreInformation,
                },
            },
            {new: true}
        );
        return location;
    } catch (error) {
        throw new Error('Unable to update location with departments');
    }
};

/*
 The key to understanding this behavior lies in the structure of the data you're passing and how the MongoDB $set operator interacts with arrays.

In MongoDB, the $set operator works with the positional operator $ to update specific elements within an array. When you use 'departments.$.departmentAddress', the positional  operator $ refers to the position of the element that matches the query condition. In this case, you are trying to update a specific department within the departments array based on departmentId. This syntax ensures that the correct element within the array is updated.

However, when you use departments.departmentAddress directly, you are attempting to access a property of the departments object itself, which is not what you want. This is why using departments[0].departmentAddress works, as you are correctly accessing the departmentAddress property of the specific department object you want to update. */

//Hello world