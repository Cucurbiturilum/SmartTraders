<template>
  <div class="container">
    <Quiz :quizData="quizData"/>
  </div>
</template>

<script>
import Quiz from "~/components/quiz/Quiz";
import QuizConstants from "~/constants/QuizConstants";
export default {
  components: {Quiz},
  data: function() {
    return {
      quizData: QuizConstants
    }
  }
}
</script>

<style>
</style>
