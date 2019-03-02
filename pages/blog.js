import Link from 'next/link'

import Layout from '../components/Layout'

const PostLink = ({ title, slug }) => (
  <li>
    <Link as={slug} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

const Blog = () => (
  <Layout title='My Blog'>
    <ul>
      <PostLink slug='react-post' title='React Post' />
      <PostLink slug='node-post' title='Node Post' />
      <PostLink slug='mongo-post' title='Mongo Post' />
      <PostLink slug='docker-post' title='Docker Post' />
    </ul>
  </Layout>
)

export default Blog
