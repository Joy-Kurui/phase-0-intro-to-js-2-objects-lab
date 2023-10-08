// Write your solution in this file!
const employee = {
    name : "Anorld",
    streetAddress : "12 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value){

    return {...employee,[key]: value};
}
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key){
 const {[key]:value, ...newEmployee } = employee;
 return newEmployee;
}
let newEmployee = deleteFromEmployeeByKey(employee, 'name');

function destructivelyDeleteFromEmployeeByKey(employee, key){
   delete employee[key];
   return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, 'name');
