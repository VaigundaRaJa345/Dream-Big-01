import { Studio } from 'sanity';
import config from '../sanity/sanity.config';

export const StudioPage = () => {
    return (
        <div style={{ height: '100vh' }}>
            <Studio config={config} />
        </div>
    );
};
