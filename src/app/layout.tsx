export const metadata = {
  title: 'Portfolio | Jenifer Cavalcante',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header></header>
        <main>
          <div className="main-content">{children}</div>
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
