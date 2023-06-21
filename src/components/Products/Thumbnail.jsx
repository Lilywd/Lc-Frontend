const Thumbnail = () => {
  return (
    <div className="md:flex m-8">
      <div className="w-12">
        <div className="w-12 h-12 mb-4">
          <img
            src="https://i.pinimg.com/originals/4e/c1/f9/4ec1f9082ff0295826d01344220b3752.jpg"
            alt="previous-icon"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-12 h-12">
          <img
            src="https://i.pinimg.com/originals/4e/c1/f9/4ec1f9082ff0295826d01344220b3752.jpg"
            alt="previous-icon"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
