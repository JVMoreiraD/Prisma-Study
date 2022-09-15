import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.findUnique({
        where: {
            name: "Nodejs"
        }
    })
    console.log(result)
    const updatedResult = await prisma.courses.update({
        where: {
            id: result?.id
        },
        data: {
            duration: 100
        }
    })
    console.log(updatedResult)
}
main()