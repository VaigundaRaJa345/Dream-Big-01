import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { client, urlFor } from '../sanity/client';
import { ArrowLeft, Calendar, User, Clock, Loader2, Share2 } from 'lucide-react';

interface Post {
    title: string;
    publishedAt: string;
    mainImage: any;
    body: any[];
    estimatedReadingTime?: number; // Optional if we calculate it
}

export const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) return;
            try {
                const query = `*[_type == "post" && slug.current == $slug][0]`;
                const data = await client.fetch(query, { slug });
                setPost(data);
            } catch (error) {
                console.error('Error fetching post:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-dark text-white">
                <Loader2 className="w-12 h-12 animate-spin text-brand-accent" />
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-brand-dark text-white">
                <h2 className="text-3xl font-bold mb-4">Post not found</h2>
                <Link to="/blog" className="text-brand-accent hover:underline flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-dark text-slate-200">
            {/* Reading Progress / Sticky Header could go here */}

            <article>
                {/* Hero Section */}
                <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent z-10" />
                    {post.mainImage ? (
                        <img
                            src={urlFor(post.mainImage).width(1200).height(800).url()}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-800" />
                    )}

                    <div className="absolute bottom-0 left-0 w-full z-20 pb-12 px-6">
                        <div className="container mx-auto max-w-4xl">
                            <Link to="/blog" className="inline-flex items-center text-sm font-semibold text-brand-accent hover:text-white transition-colors mb-6">
                                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                            </Link>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-2 text-brand-accent" />
                                    {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </div>
                                <div className="flex items-center">
                                    <User className="w-4 h-4 mr-2 text-brand-accent" />
                                    <span>Team Dream Big</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-2 text-brand-accent" />
                                    <span>5 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-3xl mx-auto">
                        <div className="prose prose-lg prose-invert prose-headings:text-white prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-strong:text-white">
                            <PortableText
                                value={post.body}
                                components={{
                                    types: {
                                        image: ({ value }: any) => {
                                            if (!value?.asset?._ref) {
                                                return null;
                                            }
                                            return (
                                                <figure className="my-10">
                                                    <img
                                                        src={urlFor(value).width(800).fit('max').auto('format').url()}
                                                        alt={value.alt || ' '}
                                                        className="w-full rounded-2xl shadow-xl border border-white/5"
                                                    />
                                                    {value.caption && (
                                                        <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
                                                            {value.caption}
                                                        </figcaption>
                                                    )}
                                                </figure>
                                            );
                                        },
                                    },
                                    block: {
                                        h2: ({ children }) => <h2 className="text-3xl font-bold mt-12 mb-6 text-white pb-2 border-b border-white/10">{children}</h2>,
                                        h3: ({ children }) => <h3 className="text-2xl font-bold mt-10 mb-4 text-white">{children}</h3>,
                                        blockquote: ({ children }) => <blockquote className="border-l-4 border-brand-accent pl-6 py-2 my-8 italic text-xl text-gray-300 bg-white/5 rounded-r-lg">{children}</blockquote>,
                                    }
                                }}
                            />
                        </div>

                        {/* Footer / Share */}
                        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
                            <div className="text-gray-400 font-medium">
                                Share this article
                            </div>
                            <div className="flex gap-4">
                                <button className="p-2 rounded-full bg-white/5 hover:bg-brand-accent hover:text-brand-dark transition-all">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};
