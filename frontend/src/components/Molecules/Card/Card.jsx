import Category from "../../Atoms/Category/Category";
import Heading from "../../Atoms/Heading/Heading";
import { CardHeaderStyle, CardStyle } from "./Card.styled";

const Card = ({ item, ...props }) => {
  const { title, icon_url, link, description, category, tag, id } = item;

  return (
    <CardStyle className="card" {...props}>
      <CardHeaderStyle>
        <div className="card-image">
          <img src={icon_url} alt={title} />
        </div>
        <div className="card-head">
          <Heading label={title} size="1rem" />
          <Category label={category} size="0.8rem" />
        </div>
      </CardHeaderStyle>
      <a href="#" className="card-link">
        {link}
      </a>

      <p className="card-description">{description}</p>
    </CardStyle>
  );
};

export default Card;
