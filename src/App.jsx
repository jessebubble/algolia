import { PageIntro } from './components/PageIntro';
import { Container } from './components/Container';
import { Border } from './components/Border';
import { FadeIn } from './components/FadeIn';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch';
// import { faker } from '@faker-js/faker';

const applicationID = import.meta.env.VITE_ALGOLIA_APPLICATION_ID;
const searchOnlyApiKey = import.meta.env.VITE_ALGOLIA_SEARCH_ONLY_API_KEY;

const searchClient = algoliasearch(
    applicationID,
    searchOnlyApiKey
);

// const index = searchClient.initIndex('faker');

function AlgoliaExample() {

    return (
        <Container className="mt-40">
            <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                    Examples of Algolia&rsquo;s API in action
                </h2>
            </FadeIn>
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                <FadeIn>
                    <article>
                        <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                            <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                                <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                                    <MagnifyingGlassIcon className="h-12 w-12 flex-none text-neutral-950" />
                                    <h3 className="mt-6 flex items-center text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                                        Faker API
                                    </h3>
                                </div>
                                <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                                        Fake (but realistic) data for testing
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                                <p className="font-display text-4xl font-medium text-neutral-950">
                                    Instant Search
                                </p>
                                <div className="mt-6 space-y-6 text-base text-neutral-600">
                                    <p>
                                        React InstantSearch is a React library that lets you create an instant search results experience using Algolia’s search API.
                                    </p>
                                </div>
                                <div className="mt-8 flex">
                                    <div className="flex w-full items-center justify-center rounded-lg border bg-neutral-50 p-6">
                                        <InstantSearch searchClient={searchClient} indexName="faker">
                                            <SearchBox />
                                            <Hits />
                                        </InstantSearch>
                                    </div>
                                </div>
                            </div>
                        </Border>
                    </article>
                </FadeIn>
            </div>
        </Container>
  ) ;
}

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

            <AlgoliaExample />
            <Footer />
        </>
    );
}
