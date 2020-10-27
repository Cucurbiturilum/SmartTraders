<template>
  <div>
    <div v-for="quizProfile in quizData">
      <QuizProfile :quizProfileData="quizProfile"/>
    </div>
  </div>
</template>

<script>
import QuizProfile from "~/components/quiz/QuizProfile";
export default {
  name: "Quiz",
  components: {QuizProfile},
  props: {
    quizData: Array
  }
}
</script>

<style scoped>

</style>
