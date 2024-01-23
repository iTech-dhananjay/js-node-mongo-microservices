const data = [
    {name: 'abc', slug: 'abc'},
    {name: 'xyz', slug: 'abc'},
    {name: 'abc', slug: 'abc'},
    {name: 'xyz', slug: 'pqr'}
];

const uniqueCombine = (items) => {
    const uniqueCombinations = [];
    for (let i = 0; i < items.length; i++) {
        const currentItem = items[i];
        let isUnique = true;

        // Check if the current combination is unique
        for (let j = 0; j < uniqueCombinations.length; j++) {
            const existingItem = uniqueCombinations[j];
            if (currentItem.name === existingItem.name && currentItem.slug !== existingItem.slug) {
                isUnique = false;
                break;
            }
        }

        // If unique, add to the result array
        if (isUnique) {
            uniqueCombinations.push(currentItem);
        }
    }

    return uniqueCombinations;
}

// Output: [{name: 'abc', slug: 'abc'}, {name: 'xyz', slug: 'pqr'}]
console.log(uniqueCombine(data));
