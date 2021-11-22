
const Manager = require('../lib/Manager.js');

test('get manager office number', () => {
    const officeNumber = '777';
    const employee = new Manager('Jamie Williams', 1, 'jamwil1226@yahoo.com', officeNumber);

    expect(employee.officeNumber).toBe(officeNumber);
});

test('get role as manager', () => {
    const role = 'Manager';
    const employee = new Manager('Jamie Williams', 1, 'jamwil1226@yahoo.com', 'jamwil1226');

    expect(employee.getRole()).toBe(role);
});