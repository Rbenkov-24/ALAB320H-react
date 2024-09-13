import mockImage from "../assets/mock2.jpg";
function Article2() {
  return (
    <article>
      <time dateTime="2024-09-08">09/08/2024</time>
      <h2>Vintage in Vogue</h2>
      <img src={mockImage} alt="Three people posing together for a photo" />

      <p>
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa
        arcu, ullamcorper venenatis arcu et, pellentesque tincidunt nunc. Nullam
        purus lectus, bibendum sed tellus id, rutrum dictum turpis. Suspendisse
        potenti. Maecenas faucibus neque vel massa facilisis venenatis. ipsum
        dolor sit amet, consectetur adipiscing elit. Aliquam massa arcu,
        ullamcorper venenatis arcu et.ipsum dolor sit amet, consectetur
        adipiscing elit. Aliquam massa arcu, ullamcorper venenatis arcu et.
        ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa arcu,
        ullamcorper venenatis arcu et. ipsum dolor sit amet, consectetur
        adipiscing elit. Aliquam massa arcu, ullamcorper venenatis arcu et.
        ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa arcu,
        ullamcorper venenatis arcu.
      </p>
      <a href="#" className="button">
        Continue...
      </a>
    </article>
  );
}
export default Article2;
