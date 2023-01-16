import axios from 'axios';

const API_KEY = process.env.API_KEY;
const model = 'text-davinci-003';
const temperature = 0.7;
const max_tokens = 256;
const top_p = 1;
const frequency_penalty = 0;
const presence_penalty = 0;

const text = "I’m unsure if I’ll ever meet Mackenzie again, but I can’t get complacent. I have to make sure I bring her my best, if I do. It’s not an easy thing to do. Everyone ‘has’ their best, not everyone reaches their best (and there’s no upper limit to that, either). Sex can be pleasant, but I’m mostly interested in giving the other person the maximum satisfaction. That really turns me on. I guess that’s telling about character. Sacrificial martyrdom. How come? I think it’s deeply good to help others because that person will then be inspired to help others and we can build each other up. I love our civilization, technology and innovation more than anything. Computers are awesome, coding is awesome, networks are awesome, the mind is awesome.";

const prompt = `Sum up:\n\n${text}`;

axios({
  method: 'post',
  url: 'https://api.openai.com/v1/engines/davinci/completions',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  },
  data: {
    prompt,
    model,
    temperature,
    max_tokens,
    top_p,
    frequency_penalty,
    presence_penalty
  }
}).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.error(error);
});
