import prisma from "@/lib/prisma";

// Before running tests, clean up the test database
beforeAll(async () => {
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();
  await prisma.review.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});
