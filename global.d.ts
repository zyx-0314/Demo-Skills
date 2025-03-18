import { PrismaClient as PostgresClient } from '@/../prisma/generated/postgresql';
import { PrismaClient as MongoClient } from '@/../prisma/generated/mongo';

declare global {
  var prismaPostgres: PostgresClient | undefined;
  var prismaMongo: MongoClient | undefined;
}

export { };
