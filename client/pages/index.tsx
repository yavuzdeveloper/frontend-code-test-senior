import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="home">
        <figure>
          <img
            src="https://static.octopuscdn.com/logos/logo.svg"
            alt="Octopus Energy Logo"
          />
        </figure>
        <h1>Welcome to the Octopus Energy Frontend code test!</h1>
        <p>
          Get started by visiting the <code>/product</code> URL and editing{" "}
          <code>client/pages/product.js</code>
        </p>
        <p>
          You can also click the button below to navigate to the product page:
        </p>
        <Link href="/product">
          <a className="button">Go to Product Page</a>
        </Link>
      </div>
    </main>
  );
}
