import dotenv from 'dotenv';
dotenv.config();

import react from '@vitejs/plugin-react';
import plugin from 'tailwindcss';

export default {
    build: {
        // ...
    },
    plugins: [react(), plugin()],
    define: {
        'process.env': {
            VITE_ALGOLIA_APPLICATION_ID: JSON.stringify(process.env.VITE_ALGOLIA_APPLICATION_ID),
            VITE_ALGOLIA_SEARCH_ONLY_API_KEY: JSON.stringify(process.env.VITE_ALGOLIA_SEARCH_ONLY_API_KEY),
        },
    },
};
