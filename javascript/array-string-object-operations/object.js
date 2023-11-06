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
