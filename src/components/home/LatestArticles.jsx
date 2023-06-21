import { candleProducts } from "../../constants/index";

export const LatestArticles = () => {
  return (
    <section className="mb-32">
      <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="flex flex-wrap items-center">
          
          <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 xl:w-8/12">
            <div className="px-6 py-12 md:px-12">
              <h2 className="mb-4 text-2xl font-bold">
                What the secret of the great taste?
              </h2>
              <p className="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mr-2 h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>
                Hot news
              </p>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                maxime voluptas ipsam aliquam itaque cupiditate provident
                architecto expedita harum culpa odit, inventore rem molestias
                laborum repudiandae corporis pariatur quo eius iste! Quaerat,
                assumenda voluptates! Molestias, recusandae? Maxime fuga omnis
                ducimus.
              </p>
              <p className="text-neutral-500 dark:text-neutral-300">
                Commodi ut nisi assumenda alias maxime necessitatibus ad rem
                repellat explicabo, reiciendis illum suscipit iusto? Provident
                dignissimos similique, reiciendis inventore accusantium unde
                mollitia, deleniti quae atque error id perspiciatis illum.
                Laboriosam aperiam ab illo dignissimos obcaecati corporis
                similique a odio, optio iste quis placeat alias amet rerum sint
                quos dolor pariatur inventore possimus ad consequuntur fugiat
                perferendis consectetur laudantium.
              </p>
            </div>
                  </div>
                  <div className="hidden shrink-0 grow-0 basis-auto md:flex md:w-6/12 xl:w-4/12">
            <img
              src={candleProducts[1].img}
              alt="Trendy Pants and Shoes"
              className="w-full rounded-t-lg md:h-screen md:rounded-tr-none md:rounded-bl-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
