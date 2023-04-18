import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";
import { isFeatureEnabled } from "@thirdweb-dev/sdk";
import Link from "next/link";
import { contractAddress } from "../const/yourDetails";
import styles from "../styles/Home.module.css";

export default function Login() {
  const address = useAddress(); // Get the user's address

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>カケダシッターと秘密の部屋へようこそ</h1>
      <p className={styles.explain}>
        
      </p>

      <p className={styles.explain}>
        この▶▶▶{" "}
        <Link className={styles.purple} href="/">
          🚪
        </Link>{" "}
        ◀◀◀に鍵NFTを差し込んでください。
      </p>

      <hr className={styles.divider} />

      <>
        {address ? (
          <p>
            Welcome, {address?.slice(0, 6)}...{address?.slice(-4)}
          </p>
        ) : (
          <p>Please connect your wallet to continue.</p>
        )}

        <ConnectWallet accentColor="#F213A4" />
      </>
    </div>
  );
}
