gcloud functions deploy survey-get-session --entry-point get_session --runtime python37 --trigger-http
gcloud functions deploy survey-get-questionnaire --entry-point get_questionnaire --runtime python37 --trigger-http
gcloud functions deploy survey-post-answer --entry-point post_answer --runtime python37 --trigger-http
gcloud functions deploy survey-get-result --entry-point get_result --runtime python37 --trigger-http

