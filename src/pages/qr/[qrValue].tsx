import QRCode from "react-qr-code";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { qrValue } = router.query;

  if (!qrValue || Array.isArray(qrValue)) {
    return null;
  }

  return (
    <>
      <main className="text-center">
        <h1 className="text-3xl font-bold my-10">{qrValue}</h1>
        <QRCode
          className="mx-auto"
          size={256}
          value={qrValue}
          viewBox={`0 0 256 256`}
        />
      </main>
    </>
  );
}
