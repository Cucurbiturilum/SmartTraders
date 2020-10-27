<template>
<div>
  <div v-for="quizQuestion in quizProfileData.questions">
    <QuizQuestion :quizQuestionText="quizQuestion"/>
  </div>
</div>
</template>

<script>
import QuizCounter from "~/components/quiz/QuizCounter";
import QuizQuestion from "~/components/quiz/QuizQuestion";
export default {
  name: "QuizProfile",
  components: {QuizQuestion, QuizCounter},
  props: {
    quizProfileData: Object
  }
}
</script>

<style scoped>

</style>
