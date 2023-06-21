const ProductImage = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between m-8">
          <div className="w-40 h-40 rounded-full overflow-hidden mt-14">
            <img
              src="https://i.pinimg.com/originals/4e/c1/f9/4ec1f9082ff0295826d01344220b3752.jpg"
              alt="previous-icon"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-40 h-40 rounded-full overflow-hidden">
            <img
              src="https://i.pinimg.com/originals/4e/c1/f9/4ec1f9082ff0295826d01344220b3752.jpg"
              alt="previous-icon"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default ProductImage;
