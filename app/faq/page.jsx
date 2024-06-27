import faqData from "../../public/_mocks/faq.json";

const Page = () => {
  return (
    <div>
      <div className="relative py-20 my-10 bg-[url(/banner.png)] bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
        <h1 className="relative z-10 text-center text-white border-md text-2xl font-semibold">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="space-y-4">
        {faqData.map((faq, i) => (
          <details
            key={faq.id}
            className="group [&_summary::-webkit-details-marker]:hidden"
            open={i === 0}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 mb-3 rounded-lg bg-gray-50 p-4 text-gray-800">
              <h2 className="font-medium">{faq.question}</h2>

              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-4 px-4 leading-relaxed text-gray-600">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Page;
