function Navbar() {
  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Dry Fruits
        </h1>

        <ul className="flex gap-6">
          <li>Home</li>
          <li>Shop</li>
          <li>Wishlist</li>
          <li>Cart</li>
          <li>Profile</li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;