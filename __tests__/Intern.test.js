
const Intern = require('../lib/Intern.js');

test('get intern school', () => {
    const school = 'UCF';
    const employee = new Intern('Jamie Williams', 1, 'jamwil1226@yahoo.com', school);
    
    expect(employee.school).toBe(school);
});

test('get intern role as intern', () => {
    const role = 'Intern';
    const employee = new Intern('Jamie Williams', 1, 'jamwil1226@yahoo.com, jamwil1226');

    expect(employee.getRole()).toBe(role);
});