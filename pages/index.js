import PicOfMe from "../assets/me.svg";
import { rem } from "polished";

const Home = () => (
  <div className="container flex-grow">
    <h1 className="text-space">
      Hi, I'm <span>John</span> 👋
    </h1>
    <div className="about-container md:flex">
      <div className="about-text">
        <div className="text-space">
          I'm a creative frontend <span>developer</span> based in the South
          West.
        </div>
        <div className="text-space">
          I've recently graduated from <span>Plymouth University</span> after
          studying <span>Internet Design</span>.
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
