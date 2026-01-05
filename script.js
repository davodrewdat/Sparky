async function sendMessage() {
  const input = document.getElementById("message");
  const chat = document.getElementById("chat");

  const userText = input.value;
  if (!userText) return;
  chat.innerHTML += `<div class="user">You: ${userText}</div>`;
  input.value = "";

  // Replace this URL with your serverless function later
  const API_URL = "YOUR_SERVERLESS_FUNCTION_URL";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userText })
    });

    const data = await response.json();
    chat.innerHTML += `<div class="ai">AI: ${data.reply}</div>`;
    chat.scrollTop = chat.scrollHeight;
  } catch (err) {
    chat.innerHTML += `<div class="ai">AI: Error connecting to AI.</div>`;
  }
}
