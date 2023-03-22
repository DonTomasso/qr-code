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
      <main className="text-center">
        <h1 className="text-3xl font-bold my-10">{qrValue}</h1>
        <div className="inline-block">
          <QRCode
            size={size}
            value={qrValue}
            bgColor="black"
            fgColor="white"
            logoImage="/favicon.ico"
            logoPadding={10}
            removeQrCodeBehindLogo={true}
          />
        </div>
      </main>
    </>
  );
}
