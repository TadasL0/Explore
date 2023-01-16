import os
import openai

openai.api_key = os.environ.get("API_KEY")

response = openai.Completion.create(
  model="text-davinci-003",
  prompt="Summarize this for a second-grade student:\n\nI’m unsure if I’ll ever meet Mackenzie again, but I can’t get complacent. I have to make sure I bring her my best, if I do. It’s not an easy thing to do. Everyone ‘has’ their best, not everyone reaches their best (and there’s no upper limit to that, either). Sex can be pleasant, but I’m mostly interested in giving the other person the maximum satisfaction. That really turns me on. I guess that’s telling about character. Sacrificial martyrdom. How come? I think it’s deeply good to help others because that person will then be inspired to help others and we can build each other up. I love our civilization, technology and innovation more than anything. Computers are awesome, coding is awesome, networks are awesome, the mind is awesome.",
  temperature=0.7,
  max_tokens=256,
  top_p=1,
  frequency_penalty=0,
  presence_penalty=0
)

print(response)