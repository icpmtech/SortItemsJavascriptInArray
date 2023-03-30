const employees = [
  {
    id: '1',
    name: 'Daryl Sweeney',
    reportsTo: null,
    phone: '(555) 924-9726',
    extension: 8253,
    hireDate: new Date(2012, 2, 7),
    fullTime: true,
    position: 'CEO',
    timeInPosition: 2,
    employees: [
      {
        id: '2.9',
        name: 'R_2.9',
        reportsTo: 1,
        phone: '(438) 738-4935',
        extension: 1155,
        hireDate: new Date(2010, 3, 3),
        fullTime: true,
        position: 'Chief Technical Officer',
        timeInPosition: 1,
      },
      {
        id: '2.10',
        name: 'R_2.10',
        reportsTo: 1,
        phone: '(438) 738-4935',
        extension: 1155,
        hireDate: new Date(2010, 3, 3),
        fullTime: true,
        position: 'Chief Technical Officer',
        timeInPosition: 1,
      },
    ],
  },
];

export default employees;
