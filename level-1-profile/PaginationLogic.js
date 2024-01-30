// Sample department data
const departmentData = {
    _id: '60a7f5f65c2f3f002ba97da4',
    name: 'IT Department',
    departmentCodeId: 'IT001',
};

// Sample assets data
const assetsData = {
    organizationId: '12345',
    assets: [
        {
            uniqueAssetId: 'A001',
            status: 'Active',
            createdAt: '2022-01-01',
            rowAsset: [
                {
                    subgroups: [
                        {
                            fields: [
                                {name: 'field1', value: 'value1'},
                                {name: 'field2', value: 'IT001'},
                                {name: 'field3', value: 'location1'},
                                {name: 'assetName', value: 'Asset 1'},
                            ],
                        },
                    ],
                },
            ],
        },
        // Add more assets as needed...
    ],
};

// Function to apply pagination logic
const getDepartmentById = async (id, organizationId, page, limit) => {
    try {
        // Simulate fetching department data
        const department = departmentData;

        if (!department) {
            throw new Error('Department not found');
        }

        // Simulate fetching assets data
        const allAssets = assetsData;

        // Apply pagination to assetList
        const skip = (page - 1) * limit;
        const assetList = [];

        allAssets.assets.forEach((asset) => {
            const tempAssetInfo = {
                uniqueAssetId: asset.uniqueAssetId,
                status: asset.status || null,
                createdAt: asset.createdAt || null,
                assetLocation: null,
                assetName: null,
            };

            asset.rowAsset.forEach((rowAsset) => {
                if (rowAsset) {
                    rowAsset.subgroups.forEach((subgroup) => {
                        if (subgroup && subgroup.fields) {
                            subgroup.fields.forEach((field) => {
                                if (field.value == department.departmentCodeId) {
                                    assetList.push({
                                        ...tempAssetInfo,
                                        assetName: field.name === 'assetName' ? field.value : tempAssetInfo.assetName,
                                        assetLocation: field.name === 'locationName' ? field.value : tempAssetInfo.assetLocation,
                                    });
                                }
                            });
                        }
                    });
                }
            });
        });

        // Apply pagination to assetList
        const paginatedAssetList = assetList.slice(skip, skip + limit);

        // Additional information
        const totalDocuments = assetList.length;
        const totalPages = Math.ceil(totalDocuments / limit);
        const startSerialNumber = skip + 1;
        const endSerialNumber = Math.min(page * limit, totalDocuments);

        const totalAssets = paginatedAssetList.length;

        return {
            department,
            totalAssets,
            assetList: paginatedAssetList,
            userList: [],
            paginatedAssetList: {totalDocuments, totalPages, startSerialNumber, endSerialNumber},
        };
    } catch (error) {
        throw new Error('Unable to fetch department');
    }
};

// Example usage
const result = getDepartmentById('60a7f5f65c2f3f002ba97da4', '12345', 2, 2);
console.log(result);
