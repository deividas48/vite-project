export default function AboutPage() {
  return (
    <div className="container text-center">
      <h1 className="about-heading text-4xl mt-10 font-bold text-center">
        About
      </h1>
      <img
        className="border p-4 h-52 inline-block"
        src="https://via.placeholder.com/150"
        alt="Description of the image"
      />
      <> {/* Style:
            - container: Applies a max-width of 100% to the element.
            - mx-auto: Applies margin-left and margin-right of auto to the element.
            - text-center: Aligns the text to the center.
            - mt-4: Applies margin-top of 1rem (16px) to the element.
            - text-lg: Sets the font-size to 1.125rem (18px).
        */}
        </>
      <p className='text-lg text-center mt-4'>
        This is a demo app to showcase
        <span className="font-bold"> React </span>
        and
        <span className="font-bold"> React Router </span>
        in action.
      </p>
    </div>
  );
}
