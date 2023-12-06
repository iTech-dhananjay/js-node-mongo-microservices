const jsonData = {
    data: [
        {
            item: {
                ourrole: [
                    {
                        name: 'ourrole',
                        value: 'API Integration',
                        id: 'roll1',
                    },
                    // Other objects in "ourrole" array
                ],
            },
        },
        {
            item: {
                category: [
                    {
                        name: 'Web Development',
                        value: 'Web Development',
                        id: 'cat1',
                    },

                ],
            },
        },
        {
            item: {
                industry: [
                    {
                        name: 'Banking',
                        value: 'Banking',
                        id: 'ind1',
                    },
                    // Other objects in "industry" array
                ],
            },
        },
    ],
};

// Accessing ourrole
const ourRoleData = jsonData.data.find((item) => 'ourrole' in item.item);
const ourRoleArray = ourRoleData.item.ourrole;
console.log(ourRoleArray);

// Accessing category
const categoryData = jsonData.data.find((item) => 'category' in item.item);
const categoryArray = categoryData.item.category;
console.log(categoryArray);

// Accessing industry
const industryData = jsonData.data.find((item) => 'industry' in item.item);
const industryArray = industryData.item.industry;
console.log(industryArray);
//changed email address

const data = [1, 2, 3, 4, 5]

data.slice(2) //[ 1, 2, 3, 4, 5 ]- slice returns a shallow copy , won't change the original array
console.log(data)


const result = data.slice(2)
console.log(result) //[ 3, 4, 5 ]

const result1 = data.slice(2, 4)
console.log(result1) //[ 3, 4 ]

const result2 = data.slice(-1)
console.log(result2) //[ 5 ]

const result3 = data.slice(2, -1)
console.log(result3) // [3,4]


const months = ['Jan', 'March', 'April', 'May'];
months.splice(3)
console.log(months) //[ 'Jan', 'March', 'April' ]

months.splice(1, 1, 'Feb', 'March')
console.log(months) //[ 'Jan', 'Feb', 'March', 'April' ]