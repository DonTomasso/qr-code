import Head from "next/head";
import { useRouter } from "next/router";
import { QRCode } from "react-qrcode-logo";

const sizeVar = 1;

export default function Home() {
  const router = useRouter();
  const { qrValue } = router.query;

  if (!qrValue || Array.isArray(qrValue)) {
    return null;
  }

  const size = Math.max(200, qrValue.length * sizeVar);

  return (
    <>
      <Head>
        <title>{`QR kod för ${qrValue} | Don Tomasso QR Code`}</title>
        <meta name="description" content={`Genererad QR kod för ${qrValue}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="text-center">
        <h1 className="text-3xl font-bold my-10">{qrValue}</h1>
        <div className="inline-block">
          <QRCode size={size} value={qrValue} bgColor="black" fgColor="white" />
        </div>
      </main>
    </>
  );
}
