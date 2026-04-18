import React from "react";
import Image from "next/image";

const images = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAleplOyEZyAXyoABC51R3-nHlmejOgWHz9dVnJ_5UZLroRqBARHcnfdAHCu_femVGiRqA7bZRhc1owZTqDBGMXL3DiETBULeGSDOnKJO_aRB5bZNvMvguTFlLINNS_AbylRC9PoqRzlPdboSaOrqnKAv8GCpviIkgnalHII1XJjAQkVKIx41kIEiT06YUAjYpYGRRaUMbXrUywidaeVxXXPWmfV3tzL8nVTAOeCcPl2CHL3n3bZBPTS8CQRPCTh7W3JOhWZs87_oHU",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDHc-VTXAkejV6Uzf--fH1CIy6TX9nPRSodqnGFvu5g2nNRSLcfBJyep5NhJ0BNqeFRAlr0VGkbqsNCXy_qokv8cNzabi7t39Q8I_TQtr3RQE52-P2DkicUdwWR4XNFIa1wWO4XMiTzAZGA1Pzcvn06tlnSoPw0wCzHd0cMQt22AAgWvbXC6C_3qdGCz6HEK2iv3ehuWK2pcN6B-5jWILUX7dwtlXoIX7Z0octAFubrxaEC4MF26c41uUZiGrm2xD0Rr726bcl4tK6s",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9wSyioej-BniQj6XU6Ttr39zjPE7hRbxzwPR47Ndv22uQR3ot85KffQX1fnxIjd7fVcEQHroTZxzLjqOMzQ5ru49yQ2mz5y09kTJjSkJlnDGUKE_MG7wkrI-fcC2tlT-mpZcMXG-v12UPFXvLhUykYt7rw7rf-Z41atKMgzUzsBVqhaeXGkAppufvcM_47hEgbd-uKmDIKZPm27Qj_o4g6RY2LViNQpDjZpTW-7wap2P1-nARYiwju1XRHYtA18VCau3w0Bcxem1Z",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAAUCUoebDb1BjNmq0OFr-FVkz20UmdqEWZSAGQKLKLEOS1UgLJu3fP7Ja0yNrcVTVMd8fLe0HBfY4TB5IC1u8gKJXBuzxU7h9qm-jHqHAUYCRumMuzNXauDBJGKGdLsxRY8lZJ_BxljjAkJlngy36c52Dl-eCltP7RDoZCc4lYyMlNib-5wBFeLxAPu6KomZZJRmMHpAlgfb2vwzDWUf936Fiyu0G-UsRv-K2SHhI4MR_pcvDA1fz9PldUztKW0dtvHreleaqtLmHR",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAnddC2qelU9iqV1NhCXbuisxQM9xRbhxFRL_1LUXXOx3WSyMBNxceRRKFdniih_mKc8-skDmZdVzT8s133UgxfLRJsGv0uoGdtJLHn3qao3hrMsV0jH2fVfqP0uYQe0-1_RHSJbp-l9XFA7AXdsFzWUzWRWJmcpK3g4rnif6wjtLT5sle3dIwGXgIkNIVxFJGXLhIXN5CwrXw_Dw-y728eMqjwzXazikLZqc8pFQiIbxggWbIQ8bqZ9Bp9tCzkKbT01PK0lKETsIDv",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCuJ6cGZBkcLaqeCO4GP9-uZIRMVc17JMhaDrE7f9uL5p5Ltex2xi6gAfC45Da_KyiaffRZXQ_AYFB28DNDKRtqW_zpDR6jsd8GE6Bm2ydVBkwpb_W5ChI09oP631MCW_5Ug0B7-YMIyy7qGCwObvViyAeQNZMjEpBuhqPr_3DfxGnTxuLZzte0C4BOBucCbEVakBx4T8uJwQsRw2rT77f9mNu82YQzmIRNTio6xEF4_HaRMKHOUrTAKUARbgAlPN_LV76aoGIdpLku",
];

function ImageStrip() {
  return (
    <>
      {images.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="relative h-64 w-64 shrink-0 overflow-hidden rounded-lg"
        >
          <Image src={src} alt="" fill className="object-cover" sizes="256px" />
        </div>
      ))}
    </>
  );
}

export const InstagramFeed = () => {
  return (
    <section className="border-y border-hm-surface-container py-12">
      <div className="flex overflow-hidden">
        <div className="flex min-w-max animate-hm-marquee gap-4 pr-4">
          <ImageStrip />
          <ImageStrip />
        </div>
      </div>
    </section>
  );
};
