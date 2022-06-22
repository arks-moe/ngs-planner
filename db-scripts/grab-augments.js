import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

prisma.augment.findMany().then(console.log).catch(console.error);
