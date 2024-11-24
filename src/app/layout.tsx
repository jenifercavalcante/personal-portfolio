import Footer from '@/components/Footer/Footer';
import Lain from '@/components/Lain/Lain';
import Navbar from '@/components/Navbar/Navbar';
import Stars from '@/components/Stars/Stars';
import '@/styles/global.scss';

export const metadata = {
  title: 'Portfolio | Jenifer Cavalcante',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Stars />

        <header>
          <Navbar />
        </header>
        <main>
          <div className="over-comet"></div>

          <div className="main-content">{children}</div>
        </main>
        <footer id="footer">
          <Footer />
        </footer>

        <Lain />
      </body>
    </html>
  );
}
