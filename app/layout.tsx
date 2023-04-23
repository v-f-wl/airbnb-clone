import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from '@/app/components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from '@/app/components/modals/RegisterModal'
import ToasterProvider from '@/app/providers/ToasterProvider'
import LoginModal from '@/app/components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'


export const metadata = {
    title: 'AIRBNB CLONE',
    description: 'AIRBNB CLONE - KIM VALENTIN',
}
const font = Nunito({
    subsets: ['latin'], 
})

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const currentUser = await getCurrentUser()
    
    return (
        <html lang="en">
            <body className={font.className}>
                <ClientOnly>
                    <ToasterProvider/>
                    <LoginModal/>
                    <RegisterModal/>
                    <Navbar currentUser={currentUser}/>
                </ClientOnly>
                {children}
            </body>
        </html>
    )
}
