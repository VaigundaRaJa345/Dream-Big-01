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
            <div className="min-h-screen flex items-center justify-center bg-white">
                <Loader2 className="w-12 h-12 animate-spin text-brand-accent" />
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white text-brand-text">
                <h2 className="text-3xl font-black mb-6 uppercase italic tracking-tighter">Post not found</h2>
                <Link to="/blog" className="text-brand-accent hover:text-brand-secondary font-black uppercase tracking-widest text-xs flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-brand-text">
            <article className="pt-48 pb-32">
                {/* Header Section */}
                <div className="container mx-auto px-6 max-w-4xl mb-12">
                    <Link to="/blog" className="inline-flex items-center text-xs font-black text-brand-accent hover:text-brand-secondary transition-colors uppercase tracking-widest mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-black text-brand-text mb-8 leading-none uppercase italic tracking-tighter">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-brand-muted uppercase tracking-widest">
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

                {/* Main Feature Image */}
                <div className="container mx-auto px-6 max-w-5xl mb-16">
                    <div className="aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl">
                        {post.mainImage ? (
                            <img
                                src={urlFor(post.mainImage).width(1200).height(600).url()}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-brand-navy" />
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="prose prose-lg prose-slate prose-headings:font-black prose-headings:uppercase prose-headings:italic prose-headings:tracking-tighter prose-headings:text-brand-text prose-a:text-brand-accent prose-a:font-black hover:prose-a:text-brand-secondary prose-img:rounded-[2rem] prose-strong:text-brand-text prose-strong:font-black text-brand-text leading-relaxed">
                            <PortableText
                                value={post.body}
                                components={{
                                    types: {
                                        image: ({ value }: any) => {
                                            if (!value?.asset?._ref) {
                                                return null;
                                            }
                                            return (
                                                <figure className="my-12">
                                                    <img
                                                        src={urlFor(value).width(800).fit('max').auto('format').url()}
                                                        alt={value.alt || ' '}
                                                        className="w-full rounded-[2rem] shadow-xl border border-black/5"
                                                    />
                                                    {value.caption && (
                                                        <figcaption className="text-center text-xs font-bold text-brand-muted mt-4 italic uppercase tracking-wider">
                                                            {value.caption}
                                                        </figcaption>
                                                    )}
                                                </figure>
                                            );
                                        },
                                    },
                                    block: {
                                        h2: ({ children }) => <h2 className="text-3xl font-black mt-16 mb-6 text-brand-text pb-4 border-b border-black/5 uppercase italic tracking-tighter leading-none">{children}</h2>,
                                        h3: ({ children }) => <h3 className="text-2xl font-black mt-12 mb-4 text-brand-text uppercase italic tracking-tighter leading-none">{children}</h3>,
                                        blockquote: ({ children }) => <blockquote className="border-l-4 border-brand-accent pl-8 py-4 my-10 italic text-xl font-bold text-brand-text bg-brand-navy rounded-r-[1.5rem] shadow-sm">{children}</blockquote>,
                                    }
                                }}
                            />
                        </div>

                        {/* Footer / Share */}
                        <div className="mt-20 pt-10 border-t border-black/5 flex justify-between items-center">
                            <div className="text-brand-muted text-xs font-black uppercase tracking-widest">
                                Share this article
                            </div>
                            <div className="flex gap-4">
                                <button className="p-3 rounded-full border border-black/5 text-brand-text hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all shadow-sm">
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
