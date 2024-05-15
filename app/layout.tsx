 
import Footer from './components/footer'
import Header from './components/header'
// import 'aos/dist/aos.css';
import './globals.css'
import Aos from './components/aos';

export const metadata = {
  title: 'InnerGlow',
  description: 'InnerGlow',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav.ico" />
        <link rel="stylesheet" href='/css/aos.css'/>
        <link rel="stylesheet" href='/css/keen-slider.css'/>
        <link rel="stylesheet" href='https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap'/>
      </head>
      <body>
        <Aos/>
        <Header/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
