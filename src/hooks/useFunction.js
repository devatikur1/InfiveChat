import moment from "moment";

export default function useFunction() {
  //🔹 Format chat timestamp for chat list display
  // Today      -> 10:30 AM
  // Yesterday  -> Yesterday
  // Within 7 days -> Monday
  // Older      -> MM/DD/YYYY
  function formatDateTime(time, getToday) {
    let days = moment().diff(moment(time), "days");

    if (days === 0 && !getToday) {
      return moment(time).format("LT");
    } else if (days === 0 && getToday) {
      return "Today";
    } else if (days === 1) {
      return "Yesterday";
    } else if (days < 8) {
      return moment(time).format("dddd");
    } else {
      return moment(time).format("L");
    }
  }

  function createChatMessages(total = 500) {
    const messages = [];

    const texts = [
      "Hello, how are you?",
      "I am working on a new project.",
      "Can you check this?",
      "React is really interesting.",
      "I am learning JavaScript.",
      "How is your day going?",
      "The UI looks amazing.",
      "I fixed the bug today.",
      "Let's improve this feature.",
      "I will test it now.",
      "The API is working fine.",
      "I deployed the project.",
      "Can you explain this?",
      "I understood the concept.",
      "This code needs optimization.",
      "I am practicing every day.",
      "Let's build something new.",
    ];

    const startDate = new Date("2025-01-01");
    const endDate = new Date();

    for (let i = 1; i <= total; i++) {
      const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

      messages.push({
        id: crypto.randomUUID(),
        text: texts[Math.floor(Math.random() * texts.length)],
        senderId: Math.random() > 0.5 ? "user_1" : "user_2",
        createdAt: randomDate.toISOString(),
      });
    }

    // Old message first
    return messages;
  }
  return [formatDateTime, createChatMessages];
}
