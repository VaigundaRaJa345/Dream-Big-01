import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../sanity/client';

interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    mainImage: any;
    body: any[];
}

export const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
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

    if (loading) {
        return (
            <div className="container mx-auto px-6 py-20 text-center">
                <p>Loading posts...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-10 text-center">Our Blog</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <div key={post._id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800">
                        {post.mainImage && (
                            <img
                                src={urlFor(post.mainImage).width(400).height(250).url()}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-6">
                            <p className="text-sm text-gray-500 mb-2">
                                {new Date(post.publishedAt).toLocaleDateString()}
                            </p>
                            <h2 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                                <Link to={`/blog/${post.slug.current}`}>{post.title}</Link>
                            </h2>
                            <Link
                                to={`/blog/${post.slug.current}`}
                                className="text-blue-500 font-semibold hover:underline"
                            >
                                Read More &rarr;
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
