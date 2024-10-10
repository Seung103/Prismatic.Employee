const prisma = require("../prisma");

const seed = async () => {
    const employee = [
        {name: 'John A'},
        {name: 'John B'},
        {name: 'John C'},
        {name: 'John D'},
        {name: 'John E'},
        {name: 'John F'},
        {name: 'John G'},
        {name: 'John H'},
        {name: 'John I'},
        {name: 'John J'},
    ];

await prisma.employee.createMany({ data: employee });
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });