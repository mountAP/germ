// import Link from 'next/link';
// import Header from '../components/Header';
import Layout from '../components/MyLayout';
import RequestCard from '../components/RequestCard';
import { RequestsPanel } from '../components/RequestsPanel';
import AddCard from '../components/AddCard';

export default function Index() {
    return (
        <div>
            <Layout></Layout>
            <RequestsPanel>
                <AddCard></AddCard>
                <RequestCard></RequestCard>
                <RequestCard></RequestCard>
                <RequestCard></RequestCard>
            </RequestsPanel>
        </div>
    );
}


// Resources

// Routing in Nextjs
// https://nextjs.org/docs/routing/introduction