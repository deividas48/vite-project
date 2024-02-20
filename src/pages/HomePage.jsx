export default function HomePage() {
  return (
    <article className="container">
        <> {/* Style:
            - container: Applies a max-width of 100% to the element.
            - mx-auto: Applies margin-left and margin-right of auto to the element.
            - text-center: Aligns the text to the center.
            - mt-10: Applies margin-top of 2.5rem (40px) to the element.
            - text-4xl: Sets the font-size to 2.25rem (36px).
        */}
        </>
      <h1 className="about-heading text-4xl font-bold text-center mt-10">Home</h1>
      <p className='text-lg text-center mt-4'>
        Welcome to our app! This is the homepage where you can find information
        about our amazing features and services. Explore our website to discover
        more and get started on your journey with us. We are excited to have you
        here!
      </p>
      <img className='border p-4 ' src='/newyork.jpg' alt='town' />
    </article>
  );
}
