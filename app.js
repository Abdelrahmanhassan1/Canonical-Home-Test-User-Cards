// Function to fetch user data from the API
async function fetchUserData() {
  try {
    const response = await fetch(
      "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayUserCards(cardsData) {
  const app = document.getElementById("cards_wrapper");

  cardsData.forEach((cardData) => {
    const card = document.createElement("div");
    card.classList.add("user-card");
    let date = new Date(cardData.date);
    day = date.getDate();
    month = date.toLocaleDateString("en-GB", { month: "long" });
    year = date.getFullYear();

    card.innerHTML = `
        <hr />
        <img src="${cardData.featured_media}" alt="${"asd"}">
        <h3 class="card_title">${cardData.title.rendered}</h3>
        <p class="card_description">By ${
          cardData._embedded.author[0].name
        } on ${day} ${month} ${year}</p>
        <hr />
        <h5>${cardData.type}</h5>
        

        `;
    app.appendChild(card);
  });
}

async function main() {
  const userData = await fetchUserData();
  displayUserCards(userData);
}

main();
