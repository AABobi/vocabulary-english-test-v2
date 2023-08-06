<template>
    <div>
        <input type="file"  @change="onChange" />
        <button @click="test()"></button>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {useVocabularyTestPageStore} from "@/components/store/vocabulary-test-page-store";

const store = useVocabularyTestPageStore();
const test = () => {
    store.sortFileData();
}

const fileTest = ref(undefined);
const loadNumbers = (file) => {
    let reader = new FileReader()
    reader.onload = (e) => {
        store.fileData = e.target.result
    }
    reader.readAsText(file)
}

const onChange = (e) => {
    let files = e.target.files
    if (files.length) {
        loadNumbers(files[0])
    }
}

</script>