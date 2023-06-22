export default function PaymentInformationForm() {
  const numberInputOnWheelPreventChange = (e) => {
    e.target.blur();

    e.stopPropagation();

    setTimeout(() => {
      e.target.focus();
    }, 0);
  };
  return (
    <div>
      <h1 className=" mb-8 text-3xl font-bold">Payment Information</h1>

      <form className="grid grid-cols-6 gap-6">
        <div className="my-2 col-span-3">
          <label
            htmlFor="FirstName"
            className="block text-xs font-medium text-gray-700"
          >
            First Name*
          </label>

          <input
            type="text"
            id="FirstName"
            placeholder="Enter your first name"
            className="mt-2 p-2 w-full rounded-[5px] border border-gray-500 text-xs focus:outline-secondary"
            required
          />
        </div>

        <div className="my-2 col-span-3">
          <label
            htmlFor="LastName"
            className="block text-xs font-medium text-gray-700"
          >
            Last Name*
          </label>

          <input
            type="text"
            id="LastName"
            placeholder="Enter your last name"
            className="mt-2 p-2 w-full rounded-[5px] border border-gray-500 text-xs focus:outline-secondary"
            required
          />
        </div>

        <div className="my-2 col-span-3">
          <label
            htmlFor="Email"
            className="block text-xs font-medium text-gray-700"
          >
            Email Address*
          </label>

          <input
            type="email"
            id="Email"
            placeholder="e.g johndoe@gmail.com"
            className="mt-2 p-2 w-full rounded-[5px] border border-gray-500 text-xs focus:outline-secondary"
            required
          />
        </div>

        <div className="my-2 col-span-3">
          <label
            htmlFor="Phone"
            className="block text-xs font-medium text-gray-700"
          >
            Phone
          </label>

          <input
            type="tel"
            id="Phone"
            placeholder="+254 799 676 898"
            className="mt-2 p-2 w-full rounded-[5px] border border-gray-500 text-xs focus:outline-secondary"
            required
          />
        </div>

        <div className="my-2 col-span-6">
          <label
            htmlFor="Address"
            className="block text-xs font-medium text-gray-700"
          >
            Address
          </label>

          <input
            type="text"
            id="Address"
            placeholder="Street Address"
            className="mt-2 p-2 w-full rounded-[5px] border border-gray-500 text-xs focus:outline-secondary"
            required
          />
        </div>
        <div className="my-2 col-span-6">
          <input
            type="text"
            id="Apartment"
            placeholder="Apartment, suite, unit etc. (optional)"
            className="mt-2 p-2 w-full rounded-[5px] border border-gray-500 text-xs focus:outline-secondary"
          />
        </div>

        <div className="my-2 col-span-3">
          <label
            htmlFor="Town/city"
            className="block text-xs font-medium text-gray-700"
          >
            Town
          </label>

          <input
            type="text"
            id="town"
            placeholder="Town/City"
            className="mt-2 p-2 w-full rounded-[5px] border border-gray-500 text-xs focus:outline-secondary"
          />
        </div>

        <div className="my-2 col-span-3">
          <label
            htmlFor="postal"
            className="block text-xs font-medium text-gray-700"
          >
            Postal Code*
          </label>

          <input
            type="number"
            onWheel={numberInputOnWheelPreventChange}
            id="postal"
            placeholder="Postal Code"
            className="mt-2 p-2 w-full rounded-[5px] border border-gray-500 text-xs focus:outline-secondary"
          />
        </div>

        <div className="my-2 col-span-3">
          <input
            type="checkbox"
            id="account"
            name="account"
            value="Create"
            className="accent-secondary"
          />
          <label htmlFor="account" className="text-sm font-semibold">
            {" "}
            Create an Account?
          </label>
          <br></br>
        </div>

        <div className="my-2 col-span-3">
          <input
            type="checkbox"
            id="shipping"
            name="shipping"
            value="Shipping"
            className="accent-secondary"
          />
          <label htmlFor="shipping" className="text-sm font-semibold">
            {" "}
            Ship to a different location?
          </label>
        </div>
        <div className="my-2 col-span-6">
          <label
            htmlFor="order"
            className="block text-xs font-medium text-gray-700"
          >
            Order Notes
          </label>
          <textarea
            rows="5"
            cols="60"
            name="description"
            placeholder="Notes about your order"
            className="mt-2 p-2 w-full rounded-[5px] border border-gray-500 text-xs focus:outline-secondary"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
