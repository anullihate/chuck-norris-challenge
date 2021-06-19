<template>
  <Listbox v-model="activeCategory">
    <div class="relative mt-2">
      <span class="inline-block w-full rounded-md shadow-sm">
        <ListboxLabel class="font-bold">Categories</ListboxLabel>
        <ListboxButton
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
            focus:shadow-outline-blue
            focus:border-blue-300
            sm:text-sm
            sm:leading-5
            cursor-pointer
          "
        >
          <span class="block truncate">{{ activeCategory }}</span>
        </ListboxButton>
      </span>

      <div class="absolute w-full mt-1 bg-white rounded-md shadow-lg">
        <ListboxOptions
          class="
            py-1
            overflow-auto
            text-base
            leading-6
            rounded-md
            shadow-xs
            max-h-60
            focus:outline-none
            sm:text-sm
            sm:leading-5
          "
        >
          <ListboxOption
            v-for="(category, index) in categories"
            :key="index"
            :value="category"
            :className="resolveListboxOptionClassName"
            v-slot="{ active, selected }"
            @click="$emit('update:active-category', category)"
          >
            <span
              :class="
                classNames(
                  'block truncate',
                  selected ? 'font-semibold' : 'font-normal'
                )
              "
            >
              {{ category }}
            </span>
            <span
              v-if="selected"
              :class="
                classNames(
                  'absolute inset-y-0 right-0 flex items-center pr-4',
                  active ? 'text-white' : 'text-indigo-600'
                )
              "
            >
              <svg class="w-5 h-5" viewbox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </ListboxOption>
        </ListboxOptions>
      </div>
    </div>
  </Listbox>
</template>

<script>
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default {
  components: {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  },
  props: {
    categories: Array,
    activeCategory: String,
  },
  setup(props, context) {
    return {
      classNames,
      resolveListboxOptionClassName({ active }) {
        return classNames(
          'relative py-2 pl-3 cursor-default select-none pr-9 focus:outline-none',
          active ? 'text-white bg-indigo-600' : 'text-gray-900'
        )
      },
    }
  },
}
</script>
