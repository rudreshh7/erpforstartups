// Script to seed initial departments
import { PrismaClient } from "../app/generated/prisma/index.js";

const prisma = new PrismaClient();

const departments = [
  {
    name: "Engineering",
    description: "Software development and technical operations",
  },
  {
    name: "Product",
    description: "Product management and strategy",
  },
  {
    name: "Design",
    description: "UI/UX design and user experience",
  },
  {
    name: "Marketing",
    description: "Marketing and growth initiatives",
  },
  {
    name: "Sales",
    description: "Sales and business development",
  },
  {
    name: "HR",
    description: "Human resources and people operations",
  },
];

async function seedDepartments() {
  try {
    console.log("Seeding departments...");
    
    for (const dept of departments) {
      const existing = await prisma.department.findFirst({
        where: { name: dept.name }
      });
      
      if (!existing) {
        await prisma.department.create({
          data: dept
        });
        console.log(`Created department: ${dept.name}`);
      } else {
        console.log(`Department already exists: ${dept.name}`);
      }
    }
    
    console.log("Departments seeded successfully!");
  } catch (error) {
    console.error("Error seeding departments:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDepartments();
