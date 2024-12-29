import NavbarLayout from "@/app/components/NavbarLayout";
import "@/app/globals.css";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NavbarLayout>
			<Component {...pageProps} />
		</NavbarLayout>
	);
}
