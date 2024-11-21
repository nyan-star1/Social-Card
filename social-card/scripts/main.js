document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;

    // Toggle "open" class on the clicked item
    item.classList.toggle('open');
  });
});



// Fun Facts List
const facts = [
  "Newly medicated for ADHD!",
  "I have about 10 diffrent ongoing projects.",
  "Im in the process of designing a tattoo with my friend."
];

// Add event listener for "New Fact" button
document.getElementById('new-fact-btn').addEventListener('click', () => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById('random-fact').textContent = randomFact;
});
