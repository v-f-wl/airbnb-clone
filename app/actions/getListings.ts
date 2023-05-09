import prisma from '@/app/libs/prismadb'

export default async function getlistings() {
  try{
    const listings = await prisma.listing.findMany({
      orderBy:{
        createdAt: 'desc'
      }
    })

    const safeListings = listings.map((item) => ({
      ...item,
      createdAt: item.createdAt.toISOString()
    }))

    return safeListings
  } catch(error: any){
    throw new Error(error)
  }
}