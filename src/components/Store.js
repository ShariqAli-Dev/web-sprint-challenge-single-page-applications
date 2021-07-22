import styled from "styled-components";

const StyledStore = styled.div`
  height: 22vh;
  width: 31%;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;

  .tags {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
  }

  .image {
    height: 15vh;
    width: 100%;
  }

  .name {
    font-size: 1.25rem;
    font-weight: 525;
  }

  .type,
  .bordered {
    font-size: 1rem;
  }

  .bordered {
    display: flex;
    justify-content: flex-start;
  }

  .time,
  .price {
    border: solid black 2px;
    padding: 5px;
    margin: 5px 0;
  }

  .price {
    margin-left: 15px;
  }
`;

export default function Store({ store }) {
  return (
    <StyledStore>
      <div className="tags">
        <img src={store.img} alt="storeImage" className="image" />
        <h4 className="name">{store.store}</h4>

        <p className="type">
          {store.tags.map((tag, index) => {
            return <span key={index}> - {tag}</span>;
          })}
        </p>

        <div className="bordered">
          <p className="time">{store.time} Min</p>
          <p className="price">${store.price}</p>
        </div>
      </div>
    </StyledStore>
  );
}
