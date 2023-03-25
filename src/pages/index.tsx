import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [qrValue, setQrValue] = useState<string>("");
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Don Tomasso QR Code</title>
        <meta name="description" content="Generera QR-koder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          if (!qrValue) return;
          router.push(`/qr/${encodeURIComponent(qrValue)}`);
        }}
      >
        <div className="text-center max-w-full w-96 mx-auto ">
          <label
            htmlFor="qr-value"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Värde att generera QR för
          </label>
          <input
            type="text"
            value={qrValue}
            id="qr-value"
            onChange={(evt) => {
              setQrValue(evt.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="t ex. http://dontomasso.com"
            required
          />
        </div>
      </form>
    </>
  );
}
