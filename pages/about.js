import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import Error from './_error'

const About = ({ user, status }) => {
  return (
    <>
      {status ? (
        <Error message={status} />
      ) : (
        <Layout title='About'>
          <p>A Javascript programmer</p>
          <p>UserName: {user.login}</p>
          <img src={user.avatar_url} alt='User Avatar' />
        </Layout>
      )}
    </>
  )
}

About.getInitialProps = async () => {
  try {
    const res = await fetch('https://api.github.com/users/TituxMetal')
    const data = await res.json()
    const status = res.status > 200 ? data.message : false

    return {
      user: data,
      status
    }
  } catch (err) {
    console.error(err)
  }
}

export default About
