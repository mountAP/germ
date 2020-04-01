// import Link from 'next/link';
// import Header from '../components/Header';
import Layout from '../components/MyLayout';

export default function Index() {
    return (
        <div>

            {/* client side navigation */}
            {/* 1.
             <Link href="/about" title="About Page">
                <a>About Page</a>
            </Link> */
            }

            {/* 2  
            <Header />  */
            }

            <Layout>
                <p>Hello Next.js</p>
            </Layout>

        </div>
    );
}


// Resources

// Routing in Nextjs
// https://nextjs.org/docs/routing/introduction