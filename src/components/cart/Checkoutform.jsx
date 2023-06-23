import Navbar from "../global/Navbar"
import OrderSummary from "./OrderSummary";
import PaymentInformationForm from "./Paymentinfo";
const CheckoutForm = () => {
  return (
    <section>
        <Navbar/>
      <h1 className="sr-only">Checkout</h1>

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        <div className="bg-white pt-8 pb-12 md:pb-24">
          <div className="mx-auto max-w-lg px-4 lg:px-8">
            <PaymentInformationForm />
          </div>
        </div>
        <OrderSummary />
      </div>
    </section>
  );
};

export default CheckoutForm;
