export default function Store({ store }) {
  return (
    <div key={store.store} class="store">
      <img src={store.img} alt="storeImage" class="store-image" />
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
}
