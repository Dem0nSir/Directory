import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: { searchParams: Promise<{ query?: string }> }) {

    const query = (await searchParams).query;

    const posts = [{
        _createdAt: new Date(),
        views: 100,
        author: {_id: 1,name:"nissan"},
        _id: 1,
        description: 'This is a description',
        image: 'https://picsum.photos/200/300',
        category: 'Technology',
        title: 'Robot startup',
    }]
    return (
        <>
            <section className='pink_container'>
                <h1 className='heading'>Pitch Your Startup, <br/> Connect With Entrepreneurs</h1>
                <p className='sub-heading !max-w-3xl'>
                    Submit Ideas, Vote on Pitches, and Get Notices in Virtual Competitions.
                </p>
                <SearchForm query={query}/>
            </section>
            <section className='section_container'>
                <p className='text-30-semibold'>
                    {query ? `Search results for "${query}"` : "All Startups"}
                </p>

                <ul className='mt-4 card_grid'>
                    {
                        posts?.length > 0 ? (
                            posts.map((post: StartupCardType , index:number) => (
<StartupCard key={post?._id} post={post}/>
                            ))
                        ):(
                            <p className='text-20-semibold'>No Startup found</p>
                        )
                    }
                </ul>
            </section>
        </>
    );
}