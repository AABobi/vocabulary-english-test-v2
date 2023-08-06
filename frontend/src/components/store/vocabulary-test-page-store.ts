import {defineStore} from "pinia";
import {ref} from "vue";

type VocabularyFileData = {
    word: string,
    wordTranslation: string[]
}

export const useVocabularyTestPageStore = defineStore( 'vocabulary', () => {
    const fileData = ref<String>();
    const sortedFileData = ref<VocabularyFileData[]>([]);

    const sortFileData = () => {
        if(fileData.value === undefined) {
            return ;
        }
        const wordsWithWhiteSpace: VocabularyFileData[] = fileData.value.split('\r\n').map(line => {
            const [word, wordTranslations] = line.split('-');
            const wordTranslationArray = wordTranslations.split(',');
            return { word, wordTranslation: wordTranslationArray };
        });

        sortedFileData.value = wordsWithWhiteSpace.map( data => {
           return {
               word: data.word.trim(),
               wordTranslation: data.wordTranslation.map( data => data.trim())
           }
        })

        console.log(sortedFileData.value);
    }

   return {
       fileData,
       sortedFileData,
       sortFileData
   }
})