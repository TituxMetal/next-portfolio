import { withRouter } from 'next/router'

import Layout from '../components/Layout'

const Post = ({
  router: {
    query: { title }
  }
}) => (
  <Layout title={title}>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, iure.
      Pariatur temporibus, quis minus doloribus eaque at facilis iste optio
      itaque ea neque eveniet enim libero et quas aspernatur nemo.
    </p>
  </Layout>
)

export default withRouter(Post)
