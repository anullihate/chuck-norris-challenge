import { ref } from "vue";
import {
    getJokesCategories,
    getRandomJoke,
    searchJokes,
} from "src/services/jokes";
import createAsyncProcess from "src/utils/create-async-process";

interface JokeInterface {
    id: number;
    value: string;
}

export function useJokes() {
    const categories = ref<string[]>([]);
    const activeCategory = ref("");
    const jokes = ref<JokeInterface[]>([]);
    async function fetchCategories(): Promise<void> {
        const categoriesResponse = (await getJokesCategories()) as string[];
        categories.value = categoriesResponse;
        activeCategory.value =
            categoriesResponse[
                Math.floor(Math.random() * categoriesResponse.length)
            ];
    }
    async function fetchRandomJoke(): Promise<void> {
        const jokesResponse = await getRandomJoke({
            category: activeCategory.value,
        });
        jokes.value = [jokesResponse as JokeInterface];
    }
    async function search(event: any): Promise<void> {
        const query = event.target.elements.search.value;
        if (query.length < 3) {
            Promise.reject("size must be between 3 and 120");
        } else {
            const searchResponse: any = await searchJokes({ query });
            jokes.value = searchResponse.result as [];
        }
    }
    const { run: runWrappedFetchCategories } =
        createAsyncProcess(fetchCategories);
    const { active: jokeDownloading, run: runWrappedFetchJoke } =
        createAsyncProcess(fetchRandomJoke);
    const { active: isSearching, run: runWrappedSearch } =
        createAsyncProcess(search);
    return {
        categories,
        activeCategory,
        runWrappedFetchCategories,
        jokes,
        jokeDownloading,
        runWrappedFetchJoke,
        isSearching,
        search: runWrappedSearch,
    };
}
