import Link from 'next/link'

const Layout = ({ children, title }) => (
  <main className='root'>
    <header>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/hireMe'>
        <a>Hire Me</a>
      </Link>
    </header>
    <section>
      <h1>{title}</h1>
      {children}
    </section>
    <footer>Footer</footer>
    <style jsx>{`
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1rem 0;
        font-size: 1.2rem;
        background: indigo;
      }
      header a {
        color: darkgrey;
        text-decoration: none;
        padding: 10px;
      }
      header a:hover {
        font-weight: bold;
        color: lightgrey;
      }
      section {
        width: 80%;
      }
      section h1 {
        text-align: center;
        padding: 1rem 0;
      }
      section p {
        padding: 0;
        margin: 0;
      }
      footer {
        background: indigo;
        color: darkgrey;
        padding: 1rem 0;
        text-align: center;
        width: 100%;
      }
    `}</style>
    <style global jsx>{`
      body {
        box-sizing: border-box;
        margin: 0;
        font-size: 110%;
        background: lightgrey;
      }
    `}</style>
  </main>
)

export default Layout
