import Button from "../global/Button";

export default function OrderSummary() {
  return (
    <div className=" pb-12 md:pb-24 w-11/12 md:w-10/12 mx-auto">
      <div className="px-4 lg:px-8">
        <div className="mt-2 h-full rounded-lg border bg-white p-6 t-0 top-2">
          <h2 className="font-bold text-2xl mb-4">Order Summary</h2>

          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <p className="text-sm text-gray-500 text-right mt-8 mb-2">
            Delivery inclusive
          </p>
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Order Total</p>
            <div className="">
              <p className="mb-1 text-lg font-semibold">$134.98</p>
            </div>
          </div>
          <hr className="my-4 border border-secondary" />
          <h2 className="font-bold mt-8">Payment Method</h2>
          <hr className="my-4 border border-secondary" />
          <div className="my-2 col-span-6">
            <input
              type="radio"
              id="mpesa"
              name="payment"
              value="mpesa"
              className="accent-secondary"
            />
            <label htmlFor="mpesa" className="text-sm font-semibold  ml-1">
              {" "}
              Mpesa
            </label>
          </div>
          <div className="my-2 col-span-6">
            <input
              type="radio"
              id="paypal"
              name="payment"
              value="paypal"
              className="accent-secondary"
            />
            <label htmlFor="paypal" className="text-sm font-semibold  ml-1">
              {" "}
              Paypal
            </label>
          </div>
          <div className="mt-16 mb-8 col-span-6">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              value="terms"
              className="accent-secondary "
            />
            <label htmlFor="terms" className="text-sm font-semibold ml-1">
              {" "}
              I have read and accepted the terms & Conditions
            </label>
          </div>
          <div className="mt-16 mb-8 col-span-6 flex justify-center">
            <Button
              styles="bg-secondary text-white px-4 py-2"
              content="Place Order"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
