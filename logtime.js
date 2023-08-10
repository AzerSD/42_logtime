const monthLabels = Array.from(document.querySelectorAll('svg text[font-size="10"]'));
const months = {};

let currentMonthLabel = null;

monthLabels.forEach(label => {
  const monthName = label.textContent.trim();
  months[monthName] = [];
  currentMonthLabel = monthName;
});

const elements = document.querySelectorAll('svg text[font-size="10"], svg g[data-toggle="tooltip"][data-original-title]');

elements.forEach(element => {
  const tagName = element.tagName.toLowerCase();

  if (tagName === 'text') {
    const monthName = element.textContent.trim();
    currentMonthLabel = monthName;
  } else if (tagName === 'g') {
    if (currentMonthLabel !== null) {
      months[currentMonthLabel].push(element);
    }
  }
});

const monthSums = {};

for (const monthName in months) {
  monthSums[monthName] = 0;

  months[monthName].forEach(element => {
    const title = element.getAttribute('data-original-title');
    const time = parseFloat(title);

    if (!isNaN(time)) {
      monthSums[monthName] += time;
    }
  });
}
monthSums;
