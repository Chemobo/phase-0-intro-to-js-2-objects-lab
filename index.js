// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAdress: '11 Broadway',
 }
 
 const updateEmployeeWithKeyAndValue = (employeeObject, key, value) => {
    const employeeObjectNew = {...employeeObject};
    employeeObjectNew[key] = value;
    return employeeObjectNew;
 }
 
 const destructivelyUpdateEmployeeWithKeyAndValue = (employeeObject, key, value) => {
    employeeObject[key] = value;
    console.log(employee);
    return employee;
 }
 
 const deleteFromEmployeeByKey = (employeeObject, key) => {
    const employeeObjectNew = {...employeeObject};
    delete employeeObjectNew[key];
    return employeeObjectNew;
 }
 
 const destructivelyDeleteFromEmployeeByKey = (employeeObject, key) => {
    delete employeeObject[key];
    return employeeObject;
 }