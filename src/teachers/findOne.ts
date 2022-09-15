import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    //SELECT FORM * COURSES LIMIT 1 
    const result = await prisma.courses.findFirst()
    console.log(result)
}
main()