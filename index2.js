const arrObj = [
    {name: 'abc', slug: 'abc'},
    {name: 'pqr', slug: 'xyz'},
    {name: 'abc', slug: 'abc'},
    {name: 'abc', slug: 'xyz'}
];

function isUniqueSlug(value, index, self) {
    return self.findIndex(obj => obj.slug === value.slug) === index;
}

const uniqueArrObj = arrObj.filter(isUniqueSlug);

console.log(uniqueArrObj);
