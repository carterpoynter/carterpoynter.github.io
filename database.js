function displayPerson() {
  // Get the ID parameter from the URL
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get('id');

  // Load the JSON data
  $.getJSON('stats.json', function(data) {
    // Search the data for the person with the matching ID
    var person = data.find(function(item) {
      return item.id === id;
    });

    // Display the person's name and age in the HTML
    $('#person-firstname').text(person.firstName);
    $('#person-lastname').text(person.lastName);
    $('#person-shoots').text(person.shoots);
    $('#person-position').text(person.position);
  });
}