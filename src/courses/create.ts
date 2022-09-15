import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "New test",
            duration: 80,
            description: "Test bom",
            teacher: {
                connectOrCreate: {
                    where: {
                        name: "marcelo"
                    },
                    create: {
                        name: "marcelo"
                    }
                }
            }
        }
    })
    console.log(result)
}
main()