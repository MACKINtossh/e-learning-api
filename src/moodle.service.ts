import { HttpClient } from '@nestjs/common';
// moodle.service.ts

import { Injectable } from '@nestjs/common';

@Injectable({
  providedIn: 'root',
})
export class MoodleService {
  private readonly moodleApiUrl =
    'https://your-moodle-server.com/webservice/rest/server.php';
  private readonly moodleToken = 'your-moodle-api-token';

  constructor(private http: HttpClient) {}

  pushQuizResultToMoodle(
    userId: string,
    quizId: string,
    totalQuestions: number,
    totalCorrectAnswers: number,
  ) {
    const endpoint = 'your-moodle-api-endpoint'; // Replace with the actual endpoint for pushing results
    const data = {
      // Data to push to the Moodle API for quiz results.
      wstoken: this.moodleToken,
      wsfunction: 'your_ws_function_for_pushing_results',
      // Include any other required parameters based on the Moodle API documentation.
      userid: userId,
      quizid: quizId,
      totalquestions: totalQuestions,
      totalcorrect: totalCorrectAnswers,
    };

    return this.http.post(this.moodleApiUrl, data);
  }
}
