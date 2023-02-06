import Link from "next/link";

export default function Admin() {
  const download = () => {
    console.log("download");
  };
  return (
    <div>
      <Link
        href={"/homeworks/a.pdf"}
        passHref
        rel="noopener noreferrer"
        onClick={download}
        target="_blank"
      >
        download
      </Link>
    </div>
  );
}
