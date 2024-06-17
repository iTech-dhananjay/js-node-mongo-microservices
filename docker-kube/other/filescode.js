// In the first line, we use find to look for a group where the _id matches groupOrSubgroupId.
//
//     If a group is found, group will hold that value.
//
//     If a group is not found, we use flatMap to concatenate all the subgroups arrays from each group, creating a single array of subgroups. Then, we use another find to look for a subgroup with a matching _id.
//
