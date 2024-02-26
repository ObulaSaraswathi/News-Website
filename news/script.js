document.addEventListener('DOMContentLoaded', function() {
  const headlinesList = document.getElementById('headlines-list');

  // Dummy data for demonstration purposes
  const headlinesData = [
    { title: 'Breaking News 1', source: 'CNN', date: '2024-02-26' },
    { title: 'Latest Updates 2', source: 'BBC', date: '2024-02-25' },
    { title: 'In-depth Analysis 3', source: 'NY Times', date: '2024-02-24' },
    { title: 'Exclusive Interview 4', source: 'The Guardian', date: '2024-02-23' },
    { title: 'Special Report 5', source: 'Reuters', date: '2024-02-22' }
  ];

  // Populate headlines
  headlinesData.forEach(function(headline) {
    const listItem = document.createElement('li');
    listItem.classList.add('headline-item');
    listItem.innerHTML = `
      <p class="headline-title">${headline.title}</p>
      <p class="headline-source">Source: ${headline.source}</p>
      <p class="headline-date">Date: ${headline.date}</p>
    `;
    headlinesList.appendChild(listItem);
  });
});
