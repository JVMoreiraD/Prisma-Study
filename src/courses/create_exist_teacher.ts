import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "New test second",
            duration: 100,
            description: "Test second bom",
            teacher: {
                connect: {
                    id: "6663f651-4c90-49f9-8b99-b4ad78d1634f",
                }
            }
        }
    })
    console.log(result)
}
main()