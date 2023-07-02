// Fetch the JSON data
fetch('\stats.json')
	.then(response => response.json())
	.then(data => {
		const table = document.querySelector('.full-tables');

		// Loop through each player in the JSON file
for (const player of data.player) {
	// Loop through each season for the player
	for (const [season, stats] of Object.entries(player.seasons)) {
	  // Create a new row in the table
	  const row = document.createElement('tr');
	  row.classList.add('stats-row');
  
	  // Create cells for each column in the row
	  const seasonCell = document.createElement('td');
	  seasonCell.classList.add('left-table-header');
	  seasonCell.textContent = season;
  
	  const teamCell = document.createElement('td');
	  teamCell.textContent = stats.Team;
  
	  const gpCell = document.createElement('td');
	  gpCell.innerHTML = stats.GamesPlayed;
  
	  const goalsCell = document.createElement('td');
	  goalsCell.textContent = stats.Goals;
  
	  const assistsCell = document.createElement('td');
	  assistsCell.textContent = stats.Assists;
  
	  const pointsCell = document.createElement('td');
	  pointsCell.textContent = stats.Goals + stats.Assists;
  
	  const pimCell = document.createElement('td');
	  pimCell.innerHTML = stats.Penalties;
  
	  // Add the cells to the row
	  row.appendChild(seasonCell);
	  row.appendChild(teamCell);
	  row.appendChild(gpCell);
	  row.appendChild(goalsCell);
	  row.appendChild(assistsCell);
	  row.appendChild(pointsCell);
	  row.appendChild(pimCell);
  
	  // Add the row to the table
	  table.appendChild(row);
	}
  }
});