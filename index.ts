import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Create user
  // const user = await prisma.user.create({
  //   data: {
  //     name: "example",
  //     email: "example@example.com",
  //   },
  // })
  // Get all users
  // const users = await prisma.user.findMany({
  //   include: {
  //     articles: true,
  //   },
  // })
  // Create article associate it with user
  // const article = await prisma.article.create({
  //   data: {
  //     title: "Ana second article",
  //     body: "This is Ana second article",
  //     author: {
  //       connect: {
  //         id: 2,
  //       },
  //     },
  //   },
  // })
  // Get all articles
  // const articles = await prisma.article.findMany()
  // Create user and article and associate them
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Ana",
  //     email: "ana@example.com",
  //     articles: {
  //       create: {
  //         title: "Ana first article",
  //         body: "This is Ana first article",
  //       },
  //     },
  //   },
  // })
  // Loop over Ana articles
  // users.forEach((user) => {
  //   console.log(`User: ${user.name}, Email: ${user.email}`)
  //   console.log("Articles:")
  //   user.articles.forEach((article) => {
  //     console.log(`- Title: ${article.title}, Body: ${article.body}`)
  //   })
  //   console.log("\n")
  // })
  // Update data
  // const user = await prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     name: "Bunthoeun",
  //   },
  // })
  // Delete data
  // const user = await prisma.user.delete({
  //   where: {
  //     id: 3,
  //   },
  // })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
