import os
import openai

openai.api_key = os.environ.get("API_KEY")

response = openai.Completion.create(
  model="text-davinci-003",
  prompt="Summarize this for a second-grade student:\n\n",
  temperature=0.7,
  max_tokens=256,
  top_p=1,
  frequency_penalty=0,
  presence_penalty=0
)

print(response)