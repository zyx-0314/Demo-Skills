import { PrismaClient as PostgresClient } from '@/../prisma/generated/postgresql';
import { PrismaClient as MongoClient } from '@/../prisma/generated/mongo';

const prismaPostgres = new PostgresClient();
const prismaMongo = new MongoClient();

global.prismaPostgres = prismaPostgres;
global.prismaMongo = prismaMongo;

beforeAll(async () => {
  await prismaPostgres.$connect();
  await prismaMongo.$connect();
});

afterAll(async () => {
  await prismaPostgres.$disconnect();
  await prismaMongo.$disconnect();
});
