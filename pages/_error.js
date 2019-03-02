import Layout from '../components/Layout'

const Error = ({ message }) => (
  <Layout title='Error!!!'>
    <p>Couldn't get that page, sorry!</p>
    {message && (
      <p>
        Message: <strong>{message}</strong>
      </p>
    )}
  </Layout>
)

export default Error
