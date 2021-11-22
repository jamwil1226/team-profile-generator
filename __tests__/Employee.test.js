
const Employee = require('../lib/Employee');

test('gets employee name', () => {
    const name = 'Jamie Williams'
    const employee = new Employee(name);
  
    expect(employee.name).toBe(name);
});


test('gets employee id', () => {
    const id = 1;
    const employee = new Employee('Jamie Williams', id);

    expect(employee.getId()).toBe(id);
});


test('gets employee email', () => {
    const email = 'jamwil1226@yahoo.com';
    const employee = new Employee('Jamie Williams', 1, email);

    expect(employee.getEmail()).toBe(email);
});

test('gets employee role as employee', () => {
    const role = 'Employee';
    const employee = new Employee('Jamie Williams', 1, 'jamwil1226@yahoo.com');
    
    expect(employee.getRole()).toBe(role);
});