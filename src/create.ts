import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "New test",
            duration: 80,
        }
    })
    console.log(result)
}
main()