import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { client, urlFor } from '../sanity/client';

interface Post {
    title: string;
    publishedAt: string;
    mainImage: any;
    body: any[];
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

    if (loading) return <div className="container mx-auto px-6 py-20 text-center">Loading...</div>;
    if (!post) return <div className="container mx-auto px-6 py-20 text-center">Post not found</div>;

    return (
        <div className="container mx-auto px-6 py-20 max-w-3xl">
            <Link to="/blog" className="text-blue-500 hover:underline mb-8 inline-block">&larr; Back to Blog</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-500 mb-8">{new Date(post.publishedAt).toLocaleDateString()}</p>

            {post.mainImage && (
                <img
                    src={urlFor(post.mainImage).width(800).url()}
                    alt={post.title}
                    className="w-full h-auto rounded-xl shadow-md mb-10"
                />
            )}

            <div className="prose prose-lg dark:prose-invert max-w-none">
                <PortableText
                    value={post.body}
                    components={{
                        types: {
                            image: ({ value }: any) => {
                                if (!value?.asset?._ref) {
                                    return null;
                                }
                                return (
                                    <img
                                        src={urlFor(value).width(800).fit('max').auto('format').url()}
                                        alt={value.alt || ' '}
                                        className="rounded-lg my-8"
                                    />
                                );
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};
