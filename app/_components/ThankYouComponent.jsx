import Link from "next/link";

const ThankYouComponent = () => {
    return (
        <section className="h-96 mt-20">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 text-center">
                <h1 className="text-2xl font-semibold text-gray-900 mb-4">
                    Thank you for your enquiry!
                </h1>
                <p className="text-lg">
                    We have received your message. Our experts will get back to you as soon as possible..
                </p>
                <p>In the meantime, you can continue to view <Link href="/properties" className="text-blue-800 font-bold">our properties</Link>.
                    </p>
            </div>
        </section>
    );
};

export default ThankYouComponent;
