import PicOfMe from "../assets/me.png";
import { rem } from "polished";

const Home = () => (
  <div className="container flex-grow">
    <div className="about-container md:flex">
      <div className="about-text">
        <h1>Hello 👋</h1>
        <div className="text-space">
          I'm a creative junior frontend web developer based in the South West.
        </div>
        <div className="text-space">
          I've recently graduated from Plymouth University after studying
          Internet Design.
        </div>
        <div>
          Outside of web development, I love to travel and eat great food
          (ideally both at the same time).
        </div>
      </div>

      <img src={PicOfMe} id="image" />
    </div>
    <style jsx>{`
      #image {
        height: ${rem(400)};
        padding: ${rem(10)};
      }
      .text-space {
        margin-bottom: ${rem(20)}
      }
      }
    `}</style>
  </div>
);

export default Home;
