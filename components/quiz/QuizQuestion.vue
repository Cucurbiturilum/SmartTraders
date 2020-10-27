<template>
  <div>
    <select>
      <option disabled value="">Please select one</option>
      <option v-for="(selectValue, selectText) in quizOptionsData">
        {{selectText}}
      </option>
    </select>
    {{quizQuestionText}}
  </div>
</template>

<script>
import QuizConstants, { Options } from "~/constants/QuizConstants";
export default {
  name: "QuizQuestion",
  props: {
    quizQuestionText: String
  },
  data: function () {
    return {
      quizOptionsData: Options
    }
  }
}
</script>

<style scoped>

</style>
