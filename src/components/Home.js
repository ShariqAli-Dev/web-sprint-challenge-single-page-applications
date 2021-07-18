const deliveryStores = [
  {
    store: "Mcdonald's",
    tags: ["American", "Fast Food", "Burgers"],
    time: "20-30",
    price: 5.99,
  },
  {
    store: "sweetgreen",
    tags: ["Healthy", "Salads"],
    time: "30-45",
    price: 4.99,
  },
  {
    store: "Starbucks",
    tags: ["Cafe", "Coffee & Tea", "Breakfast and Brunch"],
    time: "10-30",
    price: 3.99,
  },
  {
    store: "Tommy's Pizza",
    tags: ["Pizza", "Salsa", "Breakfast, Lunch & dinner"],
    time: "10-15",
    price: 2.99,
  },
  {
    store: "Burger King",
    tags: ["American", "Fast Food", "Burgers"],
    time: "15-20",
    price: 6.99,
  },
  {
    store: "iHop",
    tags: ["Da Best", "Cafe", "Breakfast"],
    time: "30-45",
    price: 9.99,
  },
];

export default function Home() {
  return (
    <div class="home container">
      <section class="image-title">
        {/* Make the background of div to url(). THen setting it to the pizza image */}
        <h2>Your favorite food, while coding</h2>
        <button>Pizza?</button>
      </section>
    </div>
  );
}
