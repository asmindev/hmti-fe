import Layout from '@/components/Layouts'
import Jumbotron from './Jumbotron'
import About from './About'
// import Feed from './Feed'

export default function Index() {
    return (
        <Layout title="HMTI - Home">
            <Jumbotron />
            <About />
        </Layout>
    )
}
