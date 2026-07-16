import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../sanity/client';
import { Search, Calendar, User, ArrowRight, Loader2 } from 'lucide-react';


interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    mainImage: any;
    body: any[];
    author?: string; // Added author field if available, optional
}

export const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Fetching author name if you decide to add it to schema later, currently just basics
                const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          publishedAt,
          mainImage,
          body
        }`;
                const data = await client.fetch(query);
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const filteredPosts = posts.filter(post =>
        post.slug?.current && post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <Loader2 className="w-12 h-12 animate-spin text-brand-accent" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-brand-text">
            {/* Hero Section */}
            <div className="relative pt-48 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-8xl font-black mb-8 text-brand-text uppercase italic tracking-tighter">
                        Our Latest <span className="text-brand-accent">Insights</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-brand-muted max-w-2xl mx-auto mb-12 font-medium">
                        Discover the latest trends, strategies, and success stories from the digital world.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative group">
                        <div className="absolute -inset-2 bg-brand-accent/5 opacity-0 group-hover:opacity-100 blur-lg rounded-full transition-opacity duration-300" />
                        <div className="relative flex items-center bg-brand-navy border border-black/5 rounded-full px-6 py-4 shadow-sm focus-within:border-brand-accent/30 transition-all">
                            <Search className="w-5 h-5 text-brand-muted mr-3" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent border-none outline-none text-brand-text w-full placeholder-brand-muted/40 font-bold"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 pb-32">
                {filteredPosts.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-2xl font-bold text-brand-muted">No articles found matching "{searchQuery}"</p>
                    </div>
                ) : (
                    <>
                        {/* Featured Post (Only show if search is empty to highlight latest) */}
                        {!searchQuery && filteredPosts.length > 0 && (
                            <div className="mb-24">
                                <Link to={`/blog/${filteredPosts[0].slug.current}`} className="group block relative rounded-[3rem] overflow-hidden bg-brand-navy border border-black/5 hover:border-brand-accent/30 hover:shadow-2xl hover:shadow-brand-accent/10 transition-all duration-500 shadow-sm">
                                    <div className="grid md:grid-cols-2 gap-0 items-center">
                                        <div className="h-80 md:h-[450px] overflow-hidden">
                                            {filteredPosts[0].mainImage ? (
                                                <img
                                                    src={urlFor(filteredPosts[0].mainImage).width(800).height(600).url()}
                                                    alt={filteredPosts[0].title}
                                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-brand-navy flex items-center justify-center text-brand-muted">No Image</div>
                                            )}
                                        </div>
                                        <div className="p-10 md:p-16 flex flex-col justify-center">
                                            <div className="flex flex-wrap items-center text-brand-accent mb-6 text-xs font-black uppercase tracking-[0.2em] gap-4">
                                                <span className="bg-brand-accent text-white px-4 py-1.5 rounded-full">Featured</span>
                                                <span className="flex items-center text-brand-muted"><Calendar className="w-4 h-4 mr-2 text-brand-accent" /> {formatDate(filteredPosts[0].publishedAt)}</span>
                                            </div>
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 text-brand-text uppercase italic tracking-tighter leading-none group-hover:text-brand-accent transition-colors">
                                                {filteredPosts[0].title}
                                            </h2>
                                            <div className="flex items-center text-brand-accent font-black uppercase tracking-widest text-xs mt-4">
                                                Read Article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}

                        {/* Recent Posts Grid */}
                        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                            {/* Skip the first one if searching is empty (since it's featured), otherwise show all matches */}
                            {(searchQuery ? filteredPosts : filteredPosts.slice(1)).map((post) => (
                                <Link key={post._id} to={`/blog/${post.slug.current}`} className="group flex flex-col bg-brand-navy border border-black/5 hover:border-brand-accent/30 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-accent/10 transition-all duration-500 hover:-translate-y-2">
                                    <div className="h-64 overflow-hidden relative">
                                        {post.mainImage ? (
                                            <img
                                                src={urlFor(post.mainImage).width(600).height(400).url()}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-brand-navy" />
                                        )}
                                    </div>
                                    <div className="p-10 flex flex-col flex-grow">
                                        <div className="flex items-center text-brand-muted text-xs font-bold uppercase tracking-widest mb-4 space-x-4">
                                            <span className="flex items-center"><Calendar className="w-4.5 h-4.5 mr-1.5 text-brand-accent" /> {formatDate(post.publishedAt)}</span>
                                            <span className="flex items-center"><User className="w-4.5 h-4.5 mr-1.5 text-brand-accent" /> Team</span>
                                        </div>
                                        <h3 className="text-2xl font-black mb-4 text-brand-text uppercase italic tracking-tighter group-hover:text-brand-accent transition-colors line-clamp-2 leading-tight">
                                            {post.title}
                                        </h3>
                                        <div className="mt-auto pt-6 flex items-center text-brand-accent text-xs font-black uppercase tracking-widest">
                                            Read More <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
