import { PageIntro } from './components/PageIntro';
import { InstantCommerce } from './components/examples/InstantCommerce';

function Footer() {
    return (
        <footer className="mt-24 w-full sm:mt-32">
            <div className="border-t border-neutral-950/10 pr-3 pt-12">
                <p className="text-end text-sm text-gray-700">
                    <a
                        className="hover:text-centro-pink"
                        href="https://www.jessebubble.dev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        jessebubble.dev <span aria-hidden="true">→</span>
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default function App() {
    return (
        <>
            <PageIntro
                eyebrow="Algolia"
                title="Enable anyone to build great Search & Discovery experiences"
            >
                <p>
                    Algolia is a powerful search-as-a-service solution that
                    enables developers to implement lightning-fast and accurate
                    search experiences in their web applications. Its easy
                    integration, customizable features, and real-time indexing
                    revolutionize search functionality, enhancing user
                    engagement and satisfaction
                </p>
            </PageIntro>

            <InstantCommerce />
            <Footer />
        </>
    );
}
