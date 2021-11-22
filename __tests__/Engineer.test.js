
const Engineer = require('../lib/Engineer');

test('gets engineer github', () => {
    const github = 'jamwil1226';
    const employee = new Engineer('Jamie Williams', 1, 'jamwil1226@yahoo.com', github);
  
    expect(employee.github).toBe(github);
});

test('gets engineer role as engineer', () => {
    const role = 'Engineer';
    const employee = new Engineer('Jamie Williams', 1, 'jamwil1226@yahoo.com', 'jamwil1226');

    expect(employee.getRole()).toBe(role);
});
