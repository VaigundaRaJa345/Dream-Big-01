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
            <div className="min-h-screen flex items-center justify-center bg-brand-dark text-white">
                <Loader2 className="w-12 h-12 animate-spin text-brand-accent" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-dark text-white">
            {/* Hero Section */}
            <div className="relative py-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 pointer-events-none" />
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Our Latest Insights
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        Discover the latest trends, strategies, and success stories from the digital world.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative group">
                        <div className="absolute inset-0 bg-brand-accent opacity-20 blur-lg rounded-full group-hover:opacity-30 transition-opacity" />
                        <div className="relative flex items-center bg-gray-900/80 backdrop-blur border border-gray-700 rounded-full px-6 py-3 shadow-xl">
                            <Search className="w-5 h-5 text-gray-400 mr-3" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent border-none outline-none text-white w-full placeholder-gray-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 pb-20">
                {filteredPosts.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-2xl text-gray-500">No articles found matching "{searchQuery}"</p>
                    </div>
                ) : (
                    <>
                        {/* Featured Post (Only show if search is empty to highlight latest) */}
                        {!searchQuery && filteredPosts.length > 0 && (
                            <div className="mb-16">
                                <Link to={`/blog/${filteredPosts[0].slug.current}`} className="group block relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                                    <div className="grid md:grid-cols-2 gap-0">
                                        <div className="h-64 md:h-96 overflow-hidden">
                                            {filteredPosts[0].mainImage ? (
                                                <img
                                                    src={urlFor(filteredPosts[0].mainImage).width(800).height(600).url()}
                                                    alt={filteredPosts[0].title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-600">No Image</div>
                                            )}
                                        </div>
                                        <div className="p-8 md:p-12 flex flex-col justify-center bg-gray-900/50 backdrop-blur-sm">
                                            <div className="flex items-center text-brand-accent mb-4 text-sm font-semibold uppercase tracking-wider">
                                                <span className="bg-brand-accent/10 px-3 py-1 rounded-full">Featured</span>
                                                <span className="ml-4 flex items-center"><Calendar className="w-4 h-4 mr-2" /> {formatDate(filteredPosts[0].publishedAt)}</span>
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-brand-accent transition-colors">
                                                {filteredPosts[0].title}
                                            </h2>
                                            <div className="flex items-center text-blue-400 font-semibold mt-4">
                                                Read Article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}

                        {/* Recent Posts Grid */}
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {/* Skip the first one if searching is empty (since it's featured), otherwise show all matches */}
                            {(searchQuery ? filteredPosts : filteredPosts.slice(1)).map((post) => (
                                <Link key={post._id} to={`/blog/${post.slug.current}`} className="group flex flex-col bg-gray-900/30 border border-gray-800 hover:border-brand-accent/50 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-brand-accent/10 hover:-translate-y-1">
                                    <div className="h-48 overflow-hidden relative">
                                        {post.mainImage ? (
                                            <img
                                                src={urlFor(post.mainImage).width(400).height(250).url()}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-800" />
                                        )}
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center text-gray-500 text-xs mb-3 space-x-4">
                                            <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {formatDate(post.publishedAt)}</span>
                                            <span className="flex items-center"><User className="w-3 h-3 mr-1" /> Team</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-brand-accent transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <div className="mt-auto pt-4 flex items-center text-blue-400 text-sm font-semibold">
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
