import Image from "next/image";
import Link from "next/link";
import {MainLayout} from '../components/layouts/MainLayout'


export default function HomePage() {
  return (
    <MainLayout>
      <div className={'description'}>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/index.tsx</code>
        </p>
        <div>
          <h1>
            Ir al <Link href={"/about"}>about</Link>
          </h1>
        </div>
      </div>

      <div className={'center'}>
        <Image
          className={'logo'}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </MainLayout>
  );
}
