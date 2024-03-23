import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getHomePage(req,res){
    /*const allStatusPost = await prisma.status_post.findMany();
    res.render('feed', {allStatusPost: allStatusPost});*/
    /*  const allUsers = await prisma.user.findMany({
        include: {
          posts: true,
          profile: true,
        },
      })
    async function main() {
        const allUsers = await prisma.users.findMany()
        console.log(allUsers);
      }
    main()*/
    
}

export {getHomePage}