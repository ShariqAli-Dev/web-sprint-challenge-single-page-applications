const deliveryStores = [
  {
    img: "https://i0.wp.com/www.eatthis.com/wp-content/uploads/2020/10/mcdonalds-exterior.jpg?resize=640%2C360&ssl=1",
    store: "Mcdonald's",
    tags: ["American", "Fast Food", "Burgers"],
    time: "20-30",
    price: 5.99,
  },
  {
    img: "https://media-cdn.tripadvisor.com/media/photo-s/03/b2/af/61/sweet-garden-cafe-restaurant.jpg",
    store: "sweetgreen",
    tags: ["Healthy", "Salads"],
    time: "30-45",
    price: 4.99,
  },
  {
    img: "https://stories.starbucks.com/wp-content/uploads/2019/01/Starbucks_Store_in_New_York_1-1.jpg",
    store: "Starbucks",
    tags: ["Cafe", "Coffee & Tea", "Breakfast and Brunch"],
    time: "10-30",
    price: 3.99,
  },
  {
    img: "https://www.tommyspizzanyc.com/wp-content/uploads/2019/02/about.jpg",
    store: "Tommy's Pizza",
    tags: ["Pizza", "Salsa", "Breakfast, Lunch & dinner"],
    time: "10-15",
    price: 2.99,
  },
  {
    img: "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/2021-01/BurgerKing.jpg?itok=tgOUq2sH",
    store: "Burger King",
    tags: ["American", "Fast Food", "Burgers"],
    time: "15-20",
    price: 6.99,
  },
  {
    img: "https://www.nrn.com/sites/nrn.com/files/styles/article_featured_standard/public/IHOP-storefront_0.jpg?itok=z7pDgOk4",
    store: "iHop",
    tags: ["Da Best", "Cafe", "Breakfast"],
    time: "30-45",
    price: 9.99,
  },
];
export default function DeliveryExamples() {
  return (
    <section class="store-delivery-examples">
      <h3>Food Delivery In New York</h3>
      {deliveryStores.map((store, index) => {
        if (index === 2) {
          return <hr id="store-seperator" />;
        }
        return (
          <div key={store.store} class="store">
            {/* ADD AN IMAGE FOR EACH STORE AND STYLE IT */}
            <h4>{store.store}</h4>

            <p class="store-tag">
              ${" "}
              {store.tags.map((tag) => {
                return <span> - {tag}</span>;
              })}
            </p>

            <div class="border-tags">
              <p class="time-tag">{store.time} Min</p>
              <p class="price-tag">${store.price}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
