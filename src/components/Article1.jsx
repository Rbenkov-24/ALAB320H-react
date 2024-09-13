import mockImage from "../assets/mock1.jpg";
function Article1() {
  return (
    <article>
      <time dateTime="2024-09-09">09/09/2024</time>
      <h2>On the Street in Brooklyn</h2>
      <img
        src={mockImage}
        alt="A girl wearing a flowing red dress walking down a street"
      />

      <p>
        Corem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa
        arcu, ullamcorper venenatis arcu et, pellentesque tincidunt nunc. Nullam
        purus lectus, bibendum sed tellus id, rutrum dictum turpis. Suspendisse
        potenti. Maecenas faucibus neque vel massa facilisis venenatis. ipsum
        dolor sit amet, consectetur adipiscing elit. Aliquam massa arcu,
        ullamcorper venenatis arcu et ipsum dolor sit amet, consectetur
        adipiscing elit. Aliquam massa arcu, ullamcorper venenatis arcu et.ipsum
        dolor sit amet, consectetur adipiscing elit. Aliquam massa arcu,
        ullamcorper venenatis arcu etipsum dolor sit amet, consectetur
        adipiscing elit. Aliquam massa arcu, ullamcorper venenatis arcu etipsum
        dolor sit amet, consectetur adipiscing elit. Aliquam massa arcu,
        ullamcorper venenatis arcu.
      </p>
      <a href="#" className="button">
        Continue...
      </a>
    </article>
  );
}
export default Article1;
