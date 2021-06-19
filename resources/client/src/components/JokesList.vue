<template>
    <div v-if="jokeDownloading || isSearching">Fetching Joke</div>
    <template v-else>
        <div class="sidebar divide-y-2 divide-indigo-600">
            <!-- get jokes by search -->
            <div class="mb-2">
                <form class="mt-2" @submit.stop.prevent="search">
                    <label for="search" class="font-bold">Search</label>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search Jokes"
                        class="
                            relative
                            w-full
                            py-2
                            pl-3
                            pr-10
                            text-left
                            transition
                            duration-150
                            ease-in-out
                            bg-white
                            border border-gray-300
                            rounded-md
                            focus:outline-none
                            focus:bg-indigo-50
                            sm:text-sm
                            sm:leading-5
                        "
                        autocomplete="off"
                        v-model="searchInput"
                    />
                    <button
                        type="submit"
                        class="
                            mt-1
                            inline-flex
                            items-center
                            px-4
                            py-2
                            border border-transparent
                            rounded-md
                            shadow-sm
                            text-sm
                            font-medium
                            text-white
                            bg-indigo-600
                            hover:bg-indigo-700
                            focus:outline-none
                        "
                    >
                        Search Jokes
                    </button>
                </form>
            </div>
            <!-- get jokes by category -->
            <div>
                <Categories
                    :categories="categories"
                    v-model:active-category="activeCategory"
                />
                <button
                    type="button"
                    class="
                        mt-1
                        inline-flex
                        items-center
                        px-4
                        py-2
                        border border-transparent
                        rounded-md
                        shadow-sm
                        text-sm
                        font-medium
                        text-white
                        bg-indigo-600
                        hover:bg-indigo-700
                        focus:outline-none
                    "
                    @click="runWrappedFetchJoke()"
                >
                    <span
                        >More
                        <strong>{{ activeCategory.toUpperCase() }}</strong>
                        Joke</span
                    >
                </button>
            </div>
        </div>
        <div class="jokes bg-white">
            <ul class="my-auto divide-y divide-gray-300">
                <li v-if="!jokes.length">
                    <h1>
                        <strong>[No Jokes Found]</strong>
                    </h1>
                    <h3>
                        It seems <strong>Chuck Norris</strong> are running out
                        of Jokes now! &#128514;
                    </h3>
                </li>
                <li
                    :key="joke.id"
                    v-for="joke in jokes"
                    class="p-4 hover:bg-gray-50 cursor-pointer"
                >
                    {{ joke.value }}
                </li>
            </ul>
        </div>
    </template>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Categories from "src/components/Categories.vue";
import { useJokes } from "src/composables/useJokes";

export default defineComponent({
    components: {
        Categories,
    },
    async setup() {
        const searchInput = ref("");
        const {
            categories,
            jokes,
            activeCategory,
            runWrappedFetchCategories,
            jokeDownloading,
            runWrappedFetchJoke,
            isSearching,
            search,
        } = useJokes();
        await runWrappedFetchCategories();
        await runWrappedFetchJoke();
        return {
            categories,
            jokes,
            activeCategory,
            jokeDownloading,
            runWrappedFetchJoke,
            searchInput,
            isSearching,
            search,
        };
    },
});
</script>

<style scoped>
.sidebar {
    border-right: 1px solid hsla(0, 0%, 100%, 0.1);
    background: #9fa8a3ce;
    padding: 50px 40px 40px;
    position: fixed;
    left: 0;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    min-height: 100vh;
    top: 0;
    width: 290px;
    z-index: 1;
    transform: translateX(0);
    transition: all 0.3s;
}

.jokes {
    margin-left: 290px;
}
</style>
