import { Container } from '../Container';
import { Border } from '../Border';
import { FadeIn } from '../FadeIn';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import algoliasearch from 'algoliasearch/lite';
import { 
    InstantSearch, 
    SearchBox, 
    Hits, 
    Highlight,
    RefinementList,
    // Pagination,
    Configure,
} from 'react-instantsearch';

const applicationID = import.meta.env.VITE_ALGOLIA_APPLICATION_ID;
const searchOnlyApiKey = import.meta.env.VITE_ALGOLIA_SEARCH_ONLY_API_KEY;

const searchClient = algoliasearch(
    applicationID,
    searchOnlyApiKey
);

function Hit({ hit }) {
    return (
        <article 
            className={clsx(
                'flex items-center justify-evenly p-6 rounded-lg bg-white hover:opacity-90 transition-opacity cursor-pointer',
                'flex-wrap sm:flex-nowrap',
                'gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-4',
            )}
        >
            <img
                src={hit.image} 
                alt={hit.name}
                className="w-full h-48 object-contain rounded-lg aspect-w-1 aspect-h-1 sm:w-32 sm:h-32 lg:w-48 lg:h-48"
             />
            <p className="text-neutral-500">
                {hit.categories[0]}
            </p>
            <h1 className="font-semibold text-base text-neutral-950">
                <Highlight 
                    attribute="name" 
                    hit={hit}
                />
            </h1>
            <p className="text-sm text-neutral-500">
                ${hit.price}
            </p>
        </article>
    );
}

export function InstantCommerce() {
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
                                        Commerce Search
                                    </h3>
                                </div>
                                <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                                        Algolia uses JSON to model records
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                                <p className="font-display text-4xl font-medium text-neutral-950">
                                    React Instant Search
                                </p>
                                <div className="mt-6 space-y-6 text-base text-neutral-600">
                                    <p>
                                        React InstantSearch is a library that allows you to create an instant search results experience using Algolia&rsquo;s search API. 
                                        Algolia stores data in an index, which is a data structure optimized for fast search. You can push data to your index using the API or the no-code option via the dashboard on the Algolia website
                                    </p>
                                </div>
                                <div className="mt-8 flex">
                                    <div className="flex flex-col w-full items-center justify-center rounded-lg border bg-neutral-50 p-6">
                                        <InstantSearch 
                                            searchClient={searchClient} 
                                            indexName="commerce-demo"
                                            insights
                                        >
                                            <Configure 
                                                hitsPerPage={10}                                                
                                            />
                                            <SearchBox 
                                                className="rounded-lg border bg-white p-2"
                                            />
                                            <RefinementList 
                                                attribute="brand"
                                                className="mt-6"
                                            />
                                            <Hits 
                                                hitComponent={Hit} 
                                                className="mt-6"
                                            />
                                            {/* <Pagination 
                                                className="mt-6"                                        
                                            /> */}
                                        </InstantSearch>
                                    </div>
                                </div>
                            </div>
                        </Border>
                    </article>
                </FadeIn>
            </div>
        </Container>
    );
}