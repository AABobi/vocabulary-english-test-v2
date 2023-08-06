<template>

  <section class="ExamView">

    <div class="ExamView__exam">
      <VocForm class="ExamView__form" :label-position="'top'">
        <VocRow :justify="'center'" :gutter="20">
            <VocCol :span="3">
                <VocFormItem label="Remove" style="font-size: 5px">
                    <VocButton>+</VocButton>
                </VocFormItem>
            </VocCol>
          <VocCol :span="6">
            <VocFormItem label="WORD">
              <VocInput />
            </VocFormItem>
          </VocCol>
            <VocCol :span="3">
                <VocFormItem label="Add">
                    <VocButton>-</VocButton>
                </VocFormItem>
            </VocCol>
        </VocRow>
          <VocRow class="ExamView__row" :justify="'center'" :gutter="20">
              <VocCol :span="6">
                  <VocButton>{{getAnswer}}</VocButton>
              </VocCol>
              <VocCol :span="6">
                  <VocButton>{{getAnswer}}</VocButton>
              </VocCol>
          </VocRow>
          <VocRow class="ExamView__row" :justify="'center'" :gutter="20">
              <VocCol :span="6">
                  <VocButton>{{getAnswer}}</VocButton>
              </VocCol>
              <VocCol :span="6">
                  <VocButton> {{getAnswer}}</VocButton>
              </VocCol>
          </VocRow>
      </VocForm>
    </div>
  </section>
</template>

<script setup>
import { VocButton, VocInput, VocForm, VocFormItem, VocRow, VocCol } from '@/core/element-plus'
import {computed, ref} from "vue";

const answers = ref([])
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getAnswer = computed( () => {
     return getRandomNumber(0,3);
})


</script>

<style scoped lang="scss">
.ExamView {

  &__row {
    margin-bottom: $sizeM;
  }

  &__exam {
    padding: $sizeXXL + $sizeXXL;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__form {
    min-width: 300px;
    width: 50%;
    height: 1600px;
    background: navajowhite;
  }
}
</style>
