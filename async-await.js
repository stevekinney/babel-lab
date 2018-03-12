async function wow() {
  const response = await fetch('https://sendgrid.com/secret-marmalade-recipe.json');
  const json = await await response.json();
  profit(json);
}