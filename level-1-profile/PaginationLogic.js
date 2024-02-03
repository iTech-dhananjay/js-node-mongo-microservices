// Sample department data
const departmentData = {
    _id: '1',
    name: 'IT Department',
    departmentCodeId: 'IT001',
};

// Sample assets data
const assetsData = [
    {
        assetId: 'A001',
        status: 'Active',
        createdAt: '2022-01-01',
        departmentCodeId: 'IT001',
        assetName: 'Asset 1',
    },
    {
        assetId: 'A002',
        status: 'Active',
        createdAt: '2022-01-01',
        departmentCodeId: 'IT002',
        assetName: 'Asset 2',
    },
    {
        assetId: 'A003',
        status: 'Inactive',
        createdAt: '2022-01-02',
        departmentCodeId: 'IT001',
        assetName: 'Asset 3',
    },
    {
        assetId: 'A004',
        status: 'Active',
        createdAt: '2022-01-03',
        departmentCodeId: 'IT003',
        assetName: 'Asset 4',
    },
    // Add more assets as needed...
];

// Function to apply pagination logic [ We are not using skip and limit method of mongo , we implement logic to find pagination based on limit and skip calculative approach]
const getDepartmentById = async (id, organizationId, page, limit) => {
    try {
        // Simulate fetching department data
        const department = departmentData;
        if (!department) {
            throw new Error('Department not found');
        }

        // Simulate fetching assets data
        const allAssets = assetsData;
        const totalAssets = allAssets.length

        // Apply pagination to assetList
        const skip = (page - 1) * limit;
        const filteredAssets = allAssets.filter((asset) => asset.departmentCodeId === department.departmentCodeId);
        const paginatedAssetList = filteredAssets
            .slice(skip, skip + limit)
            .map((asset) => ({
                assetId: asset.assetId,
                status: asset.status || null,
                createdAt: asset.createdAt || null,
                assetName: asset.assetName || null,
            }));

        // Additional information
        const totalDocuments = filteredAssets.length;
        const totalPages = Math.ceil(totalDocuments / limit);
        const startSerialNumber = skip + 1;
        const endSerialNumber = Math.min(page * limit, totalDocuments);

        return {
            department,
            totalAssets,
            assetList: paginatedAssetList,
            paginatedAssetList: {totalDocuments, totalPages, startSerialNumber, endSerialNumber},
        };
    } catch (error) {
        throw new Error('Unable to fetch department');
    }
};
// Example usage
const result = getDepartmentById('1', '12345', 1, 2);
console.log(result);


//------------------Replace Object Based on _id
const assetFormManagements = [
    {
        "_id": "1",
        "groupName": "updated_group_name",
        "subgroups": [
            {
                "subgroupName": "updated_subgroup_name_1",
                "fields": [
                    {
                        "name": "Asset File",
                        "dataType": "List",
                        "fieldType": "Select",
                        "fieldLength": 30,
                    }
                ]
            },
            {
                "subgroupName": "updated_subgroup_name_1",
                "fields": [
                    {
                        "name": "Asset File",
                        "dataType": "List",
                        "fieldType": "Select",
                        "fieldLength": 30,
                    }
                ]
            }
        ]
    },
    {
        "_id": "2",
        "groupName": "updated_group_name",
        "subgroups": [
            {
                "subgroupName": "updated_subgroup_name_1",
                "fields": [
                    {
                        "name": "Asset File",
                        "dataType": "List",
                        "fieldType": "Select",
                        "fieldLength": 30,
                    }
                ]
            }
        ]
    }
];

// Define the new object that you want to replace with
const newObj = {
    "_id": "1",
    "groupName": "new_group_name",
    "subgroups": [
        {
            "subgroupName": "new_subgroup_name",
            "fields": [
                {
                    "name": "New Asset File",
                    "dataType": "List",
                    "fieldType": "Select",
                    "fieldLength": 40,
                }
            ]
        }
    ]
};

// Find the index of the object in assetFormManagements array based on _id
const indexToReplace = assetFormManagements.findIndex(item => item._id === newObj._id);

// Replace the object directly, assuming _id is unique
assetFormManagements[indexToReplace] = newObj;

// Log the updated array
console.log(assetFormManagements);
