import '../styles/globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth hover:scroll-auto'>
      <head />
      <body>{children}</body>
    </html>
  )
}
