import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute -top-32 -left-10 w-80 h-80 rounded-full blur-3xl bg-pink-500/20" />
        <div className="absolute top-10 right-0 w-96 h-96 rounded-full blur-[110px] bg-cyan-400/20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[150px] bg-amber-400/10" />
      </div>
      <Header />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

