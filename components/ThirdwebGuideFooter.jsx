import React from "react";
import Image from "next/image"; // 追加

export default function ThirdwebGuideFooter() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: -120,
          right: -80,
          height: 300,
          width: 150,
          border: "1px solid #eaeaea",
          transform: "rotate(45deg)",
          backgroundColor: " #262935",
          cursor: "pointer",
        }}
        role="button"
        onClick={() =>
          window.open(
            "https://github.com/thirdweb-example/nft-gated-website",
            "_blank"
          )
        }
      />

      <div
        style={{
          position: "fixed",
          bottom: 14,
          right: 18,
        }}
      >
        {/* <img>タグを<Image>コンポーネントに置き換え */}
        <Image
          src={"/github.png"}
          width={40}
          height={40}
          role="button"
          alt="GitHub" // alt属性を追加
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://github.com/thirdweb-example/nft-gated-website",
              "_blank"
            )
          }
        />
      </div>
    </>
  );
}
