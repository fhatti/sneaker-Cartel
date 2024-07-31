import React, { useContext } from "react";
import useApi from "../services/useApi";
import MarketplaceCard from "../components/MarketplaceCard";
import AuthContext from "../contexts/AuthContext";

const Marketplace = () => {
  const { data: sneakers, loading, error } = useApi("/read/marketplace-items/all");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { user } = useContext(AuthContext);
  return (
    <div className="relative max-container max-sm:mt-12 min-h-[100vh] p-6 text-paragraph">
      <section className="flex flex-col items-center text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-headline">
          Welcome to CARTEL <span className="text-button">MARKETPLACE!</span>
        </h1>
        <p className="text-lg max-w-2xl">
          Join a vibrant community of shoe enthusiasts and sellers! Whether
          you're a sneakerhead looking to share your collection or a budding
          entrepreneur ready to start your shoe business, CARTEL Marketplace is
          the perfect place to showcase your products. Simply create an account
          and start selling your shoes directly to buyers from around the world.
        </p>
      </section>

      <section className="shoes-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Available Shoes</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {sneakers.map((shoe,index) => (
            <MarketplaceCard
              key={index}
              name={shoe.name}
              image={shoe.image}
              price={shoe.price}
              user={shoe.email}
            />
          ))}
        </div>
      </section>

      <section className="features mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Sell with Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Wide Reach:</strong> Tap into a diverse audience of shoe
            lovers who are always on the lookout for the latest styles and
            unique finds.
          </li>
          <li>
            <strong>Secure Transactions:</strong> Our platform ensures secure
            and smooth transactions, so you can sell with peace of mind.
          </li>
          <li>
            <strong>Supportive Community:</strong> Connect with fellow sellers
            and buyers, and get support from our dedicated team whenever you
            need it.
          </li>
          <li>
            <strong>Simple Process:</strong> Our user-friendly interface makes
            it easy to list your shoes, manage orders, and track your sales.
          </li>
        </ul>
      </section>

      <section className="how-it-works mb-8">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Create Your Account:</strong> Sign up and set up your seller
            profile in just a few steps.
          </li>
          <li>
            <strong>List Your Shoes:</strong> Upload high-quality images, write
            compelling descriptions, and set your prices.
          </li>
          <li>
            <strong>Start Selling:</strong> Your listings will be visible to our
            global community. Get ready to receive orders and grow your
            business!
          </li>
          <li>
            <strong>Manage & Ship:</strong> Handle your orders, communicate with
            buyers, and ship your products promptly.
          </li>
        </ol>
      </section>

      <section className="join-community mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Be Part of Our Community
        </h2>
        <p className="mb-4">
          As a seller on CARTEL Marketplace, you'll be joining a passionate
          community of shoe enthusiasts. Whether you're selling new releases,
          rare finds, or your own custom creations, our platform gives you the
          tools and support you need to succeed. Start selling today and take
          your shoe business to the next level!
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Easy Setup:</strong> Get your store up and running quickly
            with our straightforward setup process.
          </li>
          <li>
            <strong>Flexible Options:</strong> Control your store settings,
            pricing, and inventory with ease.
          </li>
          <li>
            <strong>Resources & Support:</strong> Access resources to help you
            improve your listings, market your products, and connect with
            customers.
          </li>
        </ul>
      </section>

      <section className="featured-categories mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Categories</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>New Releases:</strong> Showcase the latest drops and
            must-have sneakers.
          </li>
          <li>
            <strong>Rare & Collectibles:</strong> Offer limited editions and
            hard-to-find shoes for avid collectors.
          </li>
          <li>
            <strong>Custom & Handcrafted:</strong> Highlight unique designs and
            custom-made footwear.
          </li>
          <li>
            <strong>Casual & Sports:</strong> Sell comfortable everyday shoes
            and specialized sports footwear.
          </li>
        </ul>
      </section>

      <section className="call-to-action mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Start Selling Your Shoes Today!
        </h2>
        <p>
          Ready to join CARTEL Marketplace and connect with a global community
          of shoe enthusiasts? Sign up now, list your shoes, and start selling.
          It's easy, secure, and full of opportunities. Let's make your shoe
          business shine!
        </p>
      </section>
    </div>
  );
};

export default Marketplace;
