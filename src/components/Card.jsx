function Card({ title, description, image, link }) {
  return (
    <div className=" w-[250px] h-[400px] m-4 bg-white rounded-lg border border-gray-200 shadow-md">
      <a href="#!">
        <img
          className="rounded-t-lg object-cover object-center mx-auto min-h-[250px]"
          src={image}
          alt=""
        />
      </a>
      <div className="flex flex-col h-1/3 p-2 justify-between">
        <a href="#!" className="h-3/6 overflow-hidden">
          <h5 className="mb-1 text-clip font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p className="h-2/6 mb-2 font-normal text-gray-700 overflow-hidden">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="h-2/6 inline-flex w-28 items-center py-2 px-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Card;
