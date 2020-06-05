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
        <div className="text-space">
          Outside of web development, I love to travel and eat great food
          (ideally both at the same time).
        </div>
        <div>
          Feel free to send me an{" "}
          <span>
            <a href="mailto:john.stringer.martin@gmail.com">email</a>
          </span>{" "}
          or contact me through{" "}
          <span>
            <a href="https://www.linkedin.com/in/johnstringerm/">LinkedIn</a>
          </span>
          .
        </div>
      </div>

      <img src="/me.png" id="image" />
    </div>
    <style jsx>{`
      #image {
        height: ${rem(400)};
      }
      .text-space {
        margin-bottom: ${rem(20)}
      }
        a:hover {
          text-decoration: underline;
        }
      }
    `}</style>
  </div>
);

export default Home;
