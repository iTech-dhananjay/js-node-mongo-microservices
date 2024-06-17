// Define the depreciation rates for each subcategory (in decimal)
const depreciationRates = {
     Furniture: {
          Chairs: 0.1, // Furniture - Chairs depreciation rate is 10% per year
          Tables: 0.15, // Furniture - Tables depreciation rate is 15% per year
          // Add other furniture subcategories and their respective depreciation rates here
     },
     Electronics: {
          Laptops: 0.2, // Electronics - Laptops depreciation rate is 20% per year
          Tablets: 0.25, // Electronics - Tablets depreciation rate is 25% per year
          // Add other electronics subcategories and their respective depreciation rates here
     },
};

// Define the assets with their subcategories and initial values
const assets = [
     { id: 1, category: 'Furniture', subcategory: 'Chairs', value: 100 },
     { id: 2, category: 'Furniture', subcategory: 'Chairs', value: 120 },
     { id: 3, category: 'Furniture', subcategory: 'Tables', value: 300 },
     { id: 4, category: 'Furniture', subcategory: 'Tables', value: 400 },
     { id: 5, category: 'Electronics', subcategory: 'Laptops', value: 1500 },
     { id: 6, category: 'Electronics', subcategory: 'Tablets', value: 800 },
     // Add more assets with their subcategories and initial values here
];

// Function to calculate the depreciation value for a given asset and year
function calculateDepreciation(asset, year) {
     const { value, category, subcategory } = asset;
     const depreciationRate = depreciationRates[category][subcategory];

     // Apply the depreciation formula: New Value = Initial Value * (1 - Depreciation Rate) ^ Year
     const newValue = value * Math.pow(1 - depreciationRate, year);

     // Return the depreciation value for the given year
     return value - newValue;
}

// Function to calculate the depreciation values for all assets and years
function calculateAllDepreciations() {
     const years = 5; // Number of years to calculate depreciation for

     for (const asset of assets) {
          console.log(`Asset ${asset.id}, Subcategory ${asset.subcategory}:`);
          for (let year = 1; year <= years; year++) {
               const depreciationValue = calculateDepreciation(asset, year);
               console.log(`Year ${year}: $${depreciationValue.toFixed(2)}`);
          }
          console.log('-------------------------');
     }
}

// Run the calculation
calculateAllDepreciations();
