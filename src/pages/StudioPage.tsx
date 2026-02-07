import { Studio } from 'sanity';
import config from '../sanity/sanity.config';
import { SEO } from '../components/SEO';

export const StudioPage = () => {
    return (
        <div style={{ height: '100vh' }}>
            <SEO
                title="Sanity Studio"
                description="Dream Big Digital Solutions Content Management System"
            />
            <Studio config={config} />
        </div>
    );
};
